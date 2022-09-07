@US_GX2-80
Feature: 🟢📜OrangeHRM | Account | Recuperar contraseña olvidada por usurio
	#{panel:bgColor=#eae6ff}
	#* *Como usario Admin*
	#* *Quiero recuperar la contraseña olvidada*
	#* *Para poder iniciar sesión y continuar la actividad de trabajo*
	#{panel}

	#[https://upexgalaxy0.atlassian.net/browse/GX2-80|https://upexgalaxy0.atlassian.net/browse/GX2-80|smart-link]
	@TC_GX2-88 @TS_GX2-81 @TC
	Scenario: US-GX2-80 | TC1: Validar recuperar contraseña correctamente
		Given el usuario tiene una cuenta creada previamente
		And el usuario ingresa en la sección de recuperación de contraseña
		When el usuario ingresa su "<username>" en "<userInput>"
		And hace click en "<ResetPassword>"
		Then debería aparecer un mensaje indicando "<successText>" 
		And debería visualizar el siguiente texto  "<TextA>" y "<TextB>" 
		Examples:
			| username | userInput         | ResetPassword   | successText                           | TextA                                                 | TextB                                              |
			| Admin    | [name='username'] | [type='submit'] | Reset Password link sent successfully | A reset password link has been sent to you via email. | You can follow that link and select a new password |
		
		
	#[https://upexgalaxy0.atlassian.net/browse/GX2-80|https://upexgalaxy0.atlassian.net/browse/GX2-80|smart-link]
	 @TC_GX2-89 @TS_GX2-81 @PasswordRecovery @TC
	Scenario: US-GX2-80 | TC2: Validar No poder recuperar contraseña cuando el campo username está vacío
	 	Given el usuario tiene una cuenta creada previamente
	 	And el usuario ingresa en la sección de recuperación de contraseña
	 	When el usuario olvida ingresar su username en "<userInput>"
	 	And hace click en "<ResetPassword>"
	 	Then debería aparecer un mensaje de error como "<requiredMsj>" debajo del input
	 	And no debería poder enviarse la solicitud de cambio de contraseña
		Examples:
			| userInput         | ResetPassword   | requiredMsj |
			| [name='username'] | [type='submit'] | Required    |
	
	#[https://upexgalaxy0.atlassian.net/browse/GX2-80|https://upexgalaxy0.atlassian.net/browse/GX2-80|smart-link]
	@TC_GX2-90 @TS_GX2-81 @PasswordRecovery @TC
	Scenario Outline: US-GX2-80 | TC3: Validar No poder recuperar contraseña cuando se ingresa usuario no válido
		Given el usuario debe tener una cuenta creada previamente
		And el usuario ingresa en la sección de recuperación de contraseña
		When el usuario ingresa un "<userinvalid>" en "<userInput>"
		And hace click en el botón "<ResetPassword>"
		Then debería aparecer un mensaje de error no permitiendo enviar la solicitud de cambio de contraseña
		Examples:
		    | userinvalid | userInput         | ResetPassword   | 
			| 1234    	  | [name='username'] | [type='submit'] | 
			| upex        | [name='username'] | [type='submit'] | 
			| %&#         | [name='username'] | [type='submit'] |
