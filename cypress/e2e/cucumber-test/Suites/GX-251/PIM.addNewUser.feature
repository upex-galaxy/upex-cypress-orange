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
		And activa el toggle switch de "Create Login Details"

	@TC_GX2-259 @TS_GX2-252
	Scenario Outline: 252 | TC1: Validar que administrador pueda incorporar un nuevo empleado con usuario al sistema de gestión
		When rellena todos los datos requeridos incluyendo credenciales como "<firstName>""<middleName>""<lastName>""<employeeID>""<username>""<password>""<confirmPassword>"
		And hace click en el botón "Save"
		Then debe aparecer un Log Message indicando "Successfully Saved"
		And se direcciona a la página con los detalles personales del perfil del usuario creado
		And se agrega el nuevo empleado en la lista de empleados Employee List "<employeeID>" y el nuevo usuario en el Admin
		Examples:
			| firstName                      | middleName | lastName                      | employeeID | username  | password                                                                   | confirmPassword                                                            |
			| Manuela                        | Ramona     | Gonzalez                      | 0265       | CandelaBr | iN+b5C-W                                                                   | iN+b5C-W                                                                   |
			| Carlajosefinaaaaaaaaaaaaaaaaaa | **         | A                             | 0354897976 | Carla     | k3beeA46j)q)7_K7Vw*H3YArG7@9z]WR[-yBW@]4Q8d57%adQ9/iN4$5Fxe5)V9p@Zn%92R.u> | k3beeA46j)q)7_K7Vw*H3YArG7@9z]WR[-yBW@]4Q8d57%adQ9/iN4$5Fxe5)V9p@Zn%92R.u> |
			| r                              | '          | RodrIguezzzzzzzzzzzzzzzzzzzzz | 1          | LuisRod2  | 9jL5X?h!w3L                                                                | 9jL5X?h!w3L                                                                |

	Scenario Outline: 252 | TC2: Intentar validar que administrador agregue campos invalidos como firstName, lastName y middleName
		When el usuario ingresa datos en firstName como "<firstName>", middleName como "<middleName>", lastName como "<lastName>"
		Then deberia desplegarse un mensaje de log como "<errorMessage>" para cada uno de los campos
		Examples:
			| firstName                            | middleName                       | lastName                        | errorMessage                    |
			| manuelajosefinaaaaaaaaaaaaaaaaaaaaaa | ramon123dfgggggggggggggggggggggg | RodrIguezzzzzzzzzzzzzzzzzzzzzzz | Should not exceed 30 characters |

	Scenario Outline: 252 | TC3: Intentar validar que administrador agregue campo invalido a employeeID
		When el usuario ingresa datos en employeeID como "<employeeID>"
		Then deberia desplegarse un mensaje de log como "<errorMessage>" para el campo employeeID
		Examples:
			| employeeID  | errorMessage                    |
			| 03456707078 | Should not exceed 10 characters |

	Scenario Outline: 252 | TC4: Intentar validar que administrador agregue campo invalido a username
		When el usuario ingresa datos en username como "<username>"
		Then deberia desplegarse un mensaje de log como "<errorMessage>" para el campo username
		Examples:
			| username                                                  | errorMessage                    |
			| MaximilianoRodriguezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz | Should not exceed 40 characters |
			| Nahu                                                      | Should be at least 5 characters |
			| Admin                                                     | Username already exists         |

	Scenario Outline: 252 | TC5: Intentar validar que administrador agregue campo invalido a password
		When el usuario ingresa datos en password como "<password>"
		Then deberia desplegarse un mensaje de log como "<errorMessage>" para el campo password
		Examples:
			| password                                                                   | errorMessage                                                                                                                    |
			| PHRVgp8Ez&8*jNK9uy@FiC1V!4%sTFMeVVnSJ847eHXFv0vCI4bcc9WirariI36mdoAf0H0%l3 | Should not exceed 64 characters                                                                                                 |
			| rwL5T5!                                                                    | Should have at least 8 characters                                                                                               |
			| o^$4v06y96w                                                                | Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password |
			| 8Q98I79$5V                                                                 | Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password |
			| QfGPg&OoZ*Yt                                                               | Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password |
			| w2dB74t3KnuO                                                               | Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password |

	Scenario Outline: 252 | TC6: Intentar validar que administrador agregue campo invalido a confirmPassword
		Given el administrador llena correctamente la seccion create login details como "<password>"
		When el usuario ingresa datos en confirmPassword como "<confirmPassword>"
		Then deberia desplegarse un mensaje de log como "<errorMessage>" para el campo confirmPassword
		Examples:
			| password                                                                   | confirmPassword                                                            | errorMessage                    |
			| PHRVgp8Ez&8*jNK9uy@FiC1V!4%sTFMeVVnSJ847eHXFv0vCI4bcc9WirariI36mdoAf0H0%l3 | PHRVgp8Ez&8*jNK9uy@FiC1V!4%sTFMeVVnSJ847eHXFv0vCI4bcc9WirariI36mdoAf0H0%l3 | Should not exceed 64 characters |
			| d8V3@bR9&C                                                                 | d8V3@bR9&D                                                                 | Passwords do not match          |