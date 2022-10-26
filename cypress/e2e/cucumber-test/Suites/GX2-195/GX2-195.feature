Feature: OrangeHRM | Account | Recuperar contraseña olvidada por usuario

 Background:
        Given el usuario esta ubicado en la pagina de recuperación de contraseña
		
	
	Scenario Outline: GX2-195 | TS 196 | TC01:  Validar usuario recupera la contraseña exitosamente
	
		When el usuario ingresa su "<usernamevalido>" en el formulario 
		And hace click en Reset Password
		Then aparecera un mensaje de confirmacion como "<msj>"
		Examples:
		  |usernamevalido|msj|
		  | Admin |Reset Password link sent successfully|


	Scenario Outline: GX2-195 | TS 196 | TC02:  Validar no poder recuperar contraseña de usuario inexistente 

		When el usuario ingresa un "<username>" inexistente
		And hace click en Reset Password2
		Then se remarcara el imput Username en color rojo y arrojará el mensaje2 "<msj2>"
		Examples:
		  |username|msj2|
		  | Pruebax |User Doesn't Exist|
		  

	Scenario Outline: GX2-195 | TS 196 | TC03:  Validar no poder recuperar contraseña con usuario null

		When el usuario no ingresa nombre de usuario
		And hace click en Reset Password3
		Then se remarcara el imput Username en color rojo y arrojará el mensaje3 "<msj3>"
		Examples:
		  |msj3|
		  |Required|
