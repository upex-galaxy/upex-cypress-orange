Feature: GX2-6837 | OrangeHRM | PIM | Editar perfil de empleado

    Background: Precondiciones para iniciar sesión
        Given el administrador está registrado en el sistema exitosamente
        And abre el VPD del empleado para editar

    Scenario Outline: TC1: admin edita información personal del empleado
        When el admin inserta nuevos valores en los campos del form
        And hace click en el botón Save
        Then debe aparecer un Log Message indicando Successfully Updated
        And se mantiene en la página del perfil del empleado
        And la información del empleado es actualizada en la Tabla del Employee List

    Scenario Outline: TC2: admin edita imagen de perfil del empleado
        When el admin ingresa en la imagen del perfil del empleado
        And carga una nueva imagen de perfil en el UploadInput
        And hace click en el botón "Save"
        Then debe aparecer un Log Message indicando "Success, Succesfully Saved"
        And debe visualizarse la nueva imagen de perfil en todas las vistas del empleado