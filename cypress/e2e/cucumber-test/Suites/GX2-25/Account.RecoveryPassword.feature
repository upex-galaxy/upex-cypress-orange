@US_GX2-25
Feature: 🟢📜OrangeHRM | Account | Recuperar contraseña olvidada por usurio
	#{panel:bgColor=#eae6ff}
	#* *Como usario Admin*
	#* *Quiero recuperar la contraseña olvidada*
	#* *Para poder iniciar sesión y continuar la actividad de trabajo*
	#{panel}

	#GX2-25
	@TC_GX2-62 @TS_GX2-26 @Automation @TC
	Scenario: US-GX2-25 | TC1 - Validar recuperar contraseña correctamente
		Given El usuario tiene una cuenta creada previamente
		And El usuario ingresa en la sección de recuperación de contraseña
		When El usuario ingresa su "<Username>" en el input de username
		And Hace click en "<ResetPassword>"
		Then Debería visualizar un mensaje de "<Success>"
		And Debería visualizar el "<Message1>" y "<Message2>"
		Examples:
			| Username | ResetPassword  | Success                               | Message1                                              | Message2                                            |
			| Admin    | Reset Password | Reset Password link sent successfully | A reset password link has been sent to you via email. | You can follow that link and select a new password. |

	#GX2-25
	@TC_GX2-65 @TS_GX2-26 @Automation @TC
	Scenario: US-GX2-25 | TC2 - Validar NO poder recuperar contraseña cuando el campo username está vacío
		Given Usuario tiene una cuenta creada previamente
		And Usuario ingresa en la sección de recuperación de contraseña
		When Usuario deja vacío el input de username
		And Hace click en el botón "Reset Password"
		Then Debería aparecer un mensaje de error como "Required" debajo del input
		And NO debería poder enviar la solicitud de cambio de contraseña

	#GX2-25
	@TC_GX2-67 @TS_GX2-26 @Automation @TC
	Scenario Outline: US-GX2-25 | TC3 - Validar NO poder recuperar contraseña cuando se ingresa usuario no válido
		Given El usuario tiene una cuenta previamente establecida
		And El usuario ingresa en el sector de recuperación de contraseña
		When El usuario ingresa en el input su username "<Invalid>"
		And Hace click en donde dice "Reset Password"
		Then Debería aparecer un mensaje de error indicando: "Required"
		And NO debería poder enviar la invitación de cambio de contraseña
		Examples:
			| Invalid |
			| 433     |
			| John    |
			| +-*/    |