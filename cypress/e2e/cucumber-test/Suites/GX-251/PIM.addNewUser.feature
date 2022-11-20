@US_GX2-251
Feature: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario
	#{panel:bgColor=#deebff}
	#*COMO* administrador en OrangeHRM
	#
	#*QUIERO* poder agregar un nuevo empleado con usuario
	#
	#*PARA* gestionar su perfil en el sistema de la empresa
	#{panel}

	Background:
		#@PREC_GX2-413
		Given el administrador esté registrado en el sistema exitosamente
		And se le autoasigne un perfil de administrador por defecto
		And el administrador se ubica en la sección "Add Employee"

	#@TC_GX2-259 @TS_GX2-252
	Scenario Outline: 252 | TC1: Validar que administrador pueda incorporar un nuevo empleado con usuario al sistema de gestión
		When activa la opción de "Create Login Details"
		And rellena todos los datos requeridos incluyendo credenciales como "<firstName>"
		Examples:
			| firstName |
			| Manuela   |


# # cypress/e2e/duckduckgo.feature
# Feature: duckduckgo.com
# 	Scenario: visiting the frontpage
# 		When I visit duckduckgo.com
# 		Then I should see a search bar "<name>"
# 		Examples:
# 			| name      |
# 			| Manuela   |
