@GX2-76 @Automation @TestExecutionReport
@US_GX2-40
Feature: 🟢📜OrangeHRM | Account | Recuperar contraseña olvidada por usuario
	#{panel:bgColor=#eae6ff}
	#* *Como usuario Admin*
	#* *Quiero recuperar la contraseña olvidada*
	#* *Para poder iniciar sesión y continuar la actividad de trabajo*
	#{panel}

	#GX2-40
	@TC_GX2-73 @TS_GX2-41 @QA @TC
	Scenario: US-GX2-41 | TC1: Validar recuperar contraseña correctamente.
		Given el usuario tiene una cuenta creada previamente
		And el usuario ingresa en la sección de recuperación de contraseña
		When el usuario ingresa su "<username>" en "<userInput>"
		And hace click en "<ResetPassword>"
		Then deberia aparecer un mensaje indicando "<successText>" 
		And deberia visualizar el siguiente texto  "<TextA>" y "<TextB>" 
		Examples:
			| username | userInput         | ResetPassword   | successText                           | TextA                                                 | TextB                                              |
			| Admin    | [name='username'] | [type='submit'] | Reset Password link sent successfully | A reset password link has been sent to you via email. | You can follow that link and select a new password |

	#GX2-40
	@TC_GX2-69 @TS_GX2-41 @QA @TC
	Scenario: US-GX2-41 | TC2: Validar No poder recuperar contraseña cuando el campo username está vacío.
		Given el usuario tiene una cuenta creada previamente.
		And el usuario ingresa en la sección de recuperación de contraseña.
		When el usuario olvida ingresar su username en "<userInput>"
		And hace click en "<ResetPassword>".
		Then debería aparecer un mensaje de error como "<requiresMsj>" debajo del input
		And no debería poder enviarse la solicitud de cambio de contraseña
		Examples:
			| userInput         | ResetPassword   | requiresMsj |
			| [name='username'] | [type='submit'] | Required    |

	#GX2-40
	@TC_GX2-68 @TS_GX2-41 @QA @TC
	Scenario Outline: US-GX2-41 | TC3: Validar No poder recuperar contraseña cuando se ingresa usuario no válido.
		Given el usuario debe una cuenta creada previamente
		And el usuario ingresa dentro de la sección de recuperación de contraseña
		When el usuario debe ingresar su "<userinvalid>" en "<userInput>".
		And hace click en el botón "<ResetPassword>"
		Then deberia aparecer un mensaje de error como "<requiresMsj>" debajo del input username
		And no deberia poder enviarse la solicitud de contraseña
		Examples:
			| userinvalid | userInput         | ResetPassword   | requiresMsj |
			| 1234        | [name='username'] | [type='submit'] | Required    |
			| upex        | [name='username'] | [type='submit'] | Required    |
			| %&#         | [name='username'] | [type='submit'] | Required    |

