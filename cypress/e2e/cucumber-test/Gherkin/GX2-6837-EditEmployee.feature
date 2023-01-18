Feature: GX2-6837 | OrangeHRM | PIM | Editar perfil de empleado

    Background: Precondiciones para iniciar sesión
        Given el administrador está registrado en el sistema exitosamente
        And abre el VPD del empleado para editar
    @TC_GX2-6899
    Scenario Outline: Cucumber | TC1: admin edita información personal del empleado
        When el admin inserta nuevos valores en los campos del form
        And hace click en el botón Save
        Then debe aparecer un Log Message indicando Success, Succesfully Saved
        And se mantiene en la página del perfil del empleado
        And la información del empleado es actualizada en la Tabla del Employee List
