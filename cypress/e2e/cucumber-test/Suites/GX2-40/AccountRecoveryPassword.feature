@GX2-76 @Automation @TestExecutionReport
@US_GX2-40
Feature: 🟢📜OrangeHRM | Account | Recuperar contraseña olvidada por usuario
	#{panel:bgColor=#eae6ff}
	#* *Como usario Admin*
	#* *Quiero recuperar la contraseña olvidada*
	#* *Para poder iniciar sesión y continuar la actividad de trabajo*
	#{panel}
	#GX2-40
	@TC_GX2-73 @TS_GX2-41 @QA @TC
	Scenario: US-GX2-41 | TC1: Validar recuperar contraseña correctamente.
		Given el usuario tiene una cuenta creada previamente
		And el usuario ingresa en la sección de recuperación de contraseña
		When el usuario ingresa su "<username>" en el input de username
		And hace click en "<ResetPassword>"
		Then deberia aparecer un mensaje como "<success>"
		And deberia visualizar el siguiente "<texto1>" y "<texto2>"
		Examples:
			| username | success                               | ResetPassword   | texto1                                                | texto2                                             |
			| Admin    | Reset Password link sent successfully | [type='submit'] | A reset password link has been sent to you via email. | You can follow that link and select a new password |

# #GX2-40
# 	@TC_GX2-68 @TS_GX2-41 @QA @TC
# 	Scenario Outline: US-GX2-41 | TC3: Validar No poder recuperar contraseña cuando se ingresa usuario no válido.
# 		Given el usuario tiene una cuenta creada previamente
# 		And el usuario ingresa en la sección de recuperación de contraseña
# 		When el usuario ingresa su username invalido 
# 		And hace click en "Reset Password"
# 		Then deberia aparecerun mensaje de error como"Requires" debajo del input
# 		And no deberia poder enviarse la solicitud de contraseña
# 		Examples:
# 			| invalid |
# 			| 1234    |
# 			| upex    |
# 			|         |  |  |  |
# 	#GX2-40
# 	@TC_GX2-69 @TS_GX2-41 @QA @TC
# 	Scenario: US-GX2-41 | TC2: Validar No poder recuperar contraseña cuando el campo username está vacío.
# 		Given el usuario tiene una cuenta creada previamente
# 		And el usuario ingresa en la sección de recuperación de contraseña
# 		When el usuario olvida ingresar su username en el input
# 		And hace click en "Reset Password"
# 		Then debería aparecer un mensaje de error como "Required" debajo del input
# 		And no debería poder enviarse la solicitud de cambio de contraseña