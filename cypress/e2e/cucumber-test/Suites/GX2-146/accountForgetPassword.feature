Feature: OrangeHRM | Account | Recuperar contraseña olvidada por usuario

	Background: Precondicones
		Given el usuario esta en el endpoint "requestPasswordResetCode"

	@TC_GX2-203 @TS_GX2-147 @Account @Automation @L2 @PasswordRecovery
	Scenario: US GX2-146 | TS GX2-147 | TC1: Validar recuperar la contraseña de usuario con cuenta previamente creada
		Given el usuario tiene una cuenta previamente creada
		When el usuario ingresa el username "Admin" en el input username y hace click en el boton Reset Password
		Then debe aparecer un mensaje "Reset Password link sent successfully"
		And debe indicar el siguente texto: "A reset password link has been sent to you via email. You can follow that link and select a new password"

	@TC_GX2-204 @TS_GX2-147 @Account @Automation @L2 @PasswordRecovery
	Scenario: US GX2-146 | TS GX2-147 | TC2:  Validar que no permita recuperar la contraseña de usuario previamente no creado
		Given el usuario NO tiene una cuenta previamente creada
		When el usuario ingresa el username "master" en el input username y hace click en el boton Reset Password
		Then No debe aparecer el mensaje "Reset Password link sent successfully"


	@TC_GX2-205 @TS_GX2-147 @Account @Automation @L2 @PasswordRecovery
	Scenario: US GX2-146 | TS GX2-147 | TC3: Validar que no permita recuperar la contraseña dejando el input “username” vacío
		Given el usuario deja el input username vacio y hace click en el boton Reset Password
		Then el border del input username se cambia a color rojo "rgb(235, 9, 16)" y se muestra un mensaje "Required"
		And No debe aparecer el mensaje "Reset Password link sent successfully"
