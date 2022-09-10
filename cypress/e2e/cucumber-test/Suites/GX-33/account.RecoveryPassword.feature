@US_GX2-33
Feature: 🟢📜OrangeHRM | Account | Recuperar contraseña olvidada por usurio
	#{panel:bgColor=#eae6ff}
	#* *Como usario Admin*
	#* *Quiero recuperar la contraseña olvidada*
	#* *Para poder iniciar sesión y continuar la actividad de trabajo*
	#{panel}

	#GX2-33
	@TC_GX2-57 @TS_GX2-34 @Automation @TC
	Scenario: Us-GX2-33 | TC1 |Validar recuperar contraseña correctamente
		Given el usuario tiene una cuenta creada previamente
		And el usuario ingresa en la sección de recuperación de contraseña
		When el usuario ingresa su "<username>" en el input de username
		And hace click en "<ResetPassword>"
		Then deberia aparecer un mensaje indicando: Reset Password link sent successfully
		And deberia visualizar el siguiente texto:A reset password link has been sent to you via email.You can follow that link and select a new password
		Examples:
			| username | ResetPassword  |
			| Admin    | Reset Password |
			| pao.rosa | Reset Password |


	#GX2-33
	@TC_GX2-61 @TS_GX2-34 @Automation @TC
	Scenario: Us-GX2-33 | TC2 |Validar NO poder recuperar contraseña cuando el campo username esta vacio
		Given el admin tiene una cuenta creada previamente
		And el admin ingresa en la sección de recuperación de contraseña
		When el admin ingresa en el input de username vacio
		And hace click en el botton "Reset Password"
		Then deberia apareceria un mensaje de error: "Required"
		And no deberia poder enviarse la solicitud de cambio de contraseña



	#GX2-33
	@TC_GX2-63 @TS_GX2-34 @Automation @TC
	Scenario Outline: Us-GX2-33 | TC3 |Validar NO poder recuperar contraseña cuando se ingresa username no valido
		Given el usuario tiene una cuenta previamente creada 
		And el usuario ingresa en la parte de recuperación de contraseña
		When el usuario ingresa su username "<invalido>" en el input
		And hace click en el botton "Reset Password"
		Then deberia apareceria un mensaje de error indicando: "Required"
		And no deberia poder enviar la solicitud de cambio de contraseña
		Examples:
			| invalido |
			| 1234     |
			| upex     |
			| #%&/     |
