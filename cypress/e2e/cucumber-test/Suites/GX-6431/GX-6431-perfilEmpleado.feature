Feature: OrangeHRM | PIM | Editar perfil de empleado

  Background: El administrador debe estar registrado y loggueado en el site exitosamente
    Given el administrador se encuentra en la pagina de login de Orange
    And el administrador ingresa unas credenciales validas consiguiendo acceso al site
    And el administrador debe posicionarse en la pestaña PIM y Employee List
    
  Scenario: TC1: Admin edita información personal del empleado
    When el admin inserta nuevos valores en los campos del form
    And hacer click en el boton Save
    # Then debe aparecer un Log Message indicando "Success, Succesfully Saved"
    # And se mantiene en la página del perfil del empleado
    # And la información del empleado es actualizada en la Tabla del "Employee List"

  # Scenario: admin edita imagen de perfil del empleado.
  #   When: el admin ingresa en la imagen del perfil del empleado
  #   And: carga una nueva imagen de perfil en el UploadInput
  #   // Cumpliendo con los requsitos de subida de archivo según las BR
  #   And: hace click en el botón "Save"
  #   Then: debe aparecer un Log Message indicando "Success, Succesfully Saved"
  #   And: debe visualizarse la nueva imagen de perfil en todas las vistas del empleado.