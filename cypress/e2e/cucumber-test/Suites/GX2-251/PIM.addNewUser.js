import {Given, And, When, Then} from '@badeball/cypress-cucumber-preprocessor'

context('Feature: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario', () => {
	Given('el administrador esté registrado en el sistema exitosamente', () => {
		cy.visit('web/index.php/auth/login')
		cy.url().should('contain', 'login')
	})

	And('se le autoasigne un perfil de administrador por defecto', () => {
		cy.Login('Admin', 'admin123')
	})

	And('el administrador se ubica en la sección {string}', (section) => {
		cy.visit('web/index.php/pim/addEmployee')
		cy.url().should('contain', 'addEmployee')
		cy.get('a').contains(section)
	})

	And('activa el toggle switch de {string}', (toggle) => {
		cy.get('input[type=checkbox]').click({force: true})
		cy.contains(toggle).should('be.visible')
	})

	describe('252 | TC1: Validar que administrador pueda incorporar un nuevo empleado con usuario al sistema de gestión', function() {
		When('rellena todos los datos requeridos incluyendo credenciales como {string}{string}{string}{string}{string}{string}{string}', (firstName, middleName, lastName, employeeID, username, password, confirmPassword) => {
				cy.get("[name='firstName']").clear().type(firstName).should('have.value', firstName)
				cy.get("[name='firstName']").invoke('val').as('valueName')

				cy.get("[name='middleName']").clear().type(middleName).should('have.value', middleName)

				cy.get("[name='lastName']").clear().type(lastName).should('have.value', lastName)
				cy.get("[name='lastName']").invoke('val').as('valueLastName')

				cy.get('.oxd-form-row input').eq(3).clear().type(employeeID).should('have.value', employeeID)
				cy.get('.oxd-form-row input').eq(3).invoke('val').as('valueEmployeeId')

				cy.get('.oxd-form-row input').eq(5).clear().type(username).should('have.value', username)

				cy.get('[type=password]').eq(0).clear().type(password).should('not.have.class', 'oxd-input--error').and('have.value', password)

				cy.get('[type=password]').eq(1).clear().type(confirmPassword).should('have.value', confirmPassword)
			}
		)

		And('hace click en el botón {string}', (buttonSave) => {
			cy.get('button[type=submit]').click({force: true})
			cy.contains(buttonSave).should('be.visible')
		})

		And('debe aparecer un Log Message indicando {string}', (msg) => {
			cy.get('#oxd-toaster_1').find('p')
			cy.contains(msg).should('be.visible')
		})

		And('se direcciona a la página con los detalles personales del perfil del usuario creado', function() {
			cy.url().should('contain', 'viewPersonalDetails')
			cy.get('.oxd-form input').eq(0).should('have.value', this.valueName)
			cy.get('.oxd-form input').eq(2).should('have.value', this.valueLastName)
			cy.get('.oxd-form input').eq(4).should('have.value', this.valueEmployeeId)
		})
		
		And('se agrega el nuevo empleado en la lista de empleados Employee List {string} y el nuevo usuario en el Admin {string}', (employeeID, username) => {
			cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
			cy.url().should('contain', 'viewEmployeeList')
			cy.get('.oxd-form-row input').eq(1).clear().type(employeeID).should('have.value', employeeID)

			cy.get('button[type=submit]')
			cy.contains('Search').click({force: true})

			cy.get('.oxd-table-card').should('have.length', 1)

			cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
			cy.url().should('contain', 'viewSystemUsers')

			cy.get('.oxd-form-row input').eq(0).clear().type(username).should('have.value', username)

			cy.get('button[type=submit]')
			cy.contains('Search').click({force: true})

			cy.get('.oxd-table-card').should('have.length', 1)
			cy.get('.oxd-table-cell').eq(1).children().should('have.text', username)
		})
	})

	describe('252 | TC2: Intentar validar que administrador agregue campos invalidos como firstName, lastName y middleName', () => {
		When(
			'el usuario ingresa datos en firstName como {string}, middleName como {string}, lastName como {string}',
			(firstName, middleName, lastName) => {
				cy.get("[name='firstName']").clear().type(firstName).should('have.value', firstName)

				cy.get("[name='middleName']").clear().type(middleName).should('have.value', middleName)

				cy.get("[name='lastName']").clear().type(lastName).should('have.value', lastName)
			}
		)

		Then('deberia desplegarse un mensaje de log como {string} para cada uno de los campos', (errorMessage) => {
			cy.get('.--name-grouped-field')
				.children()
				.each(($li, index, $lis) => {
					cy.get("span[class*='error-message']").eq(index).should('have.text', errorMessage)
				})
		})
	})

	describe('252 | TC3: Intentar validar que administrador agregue campo invalido a employeeID', () => {
		When('el usuario ingresa datos en employeeID como {string}', (employeeID) => {
			cy.get('.oxd-form-row input').eq(3).clear().type(employeeID).should('have.value', employeeID)
		})

		Then('deberia desplegarse un mensaje de log como {string} para el campo employeeID', (errorMessage) => {
			cy.get('.oxd-input-field-bottom-space')
				.eq(4)
				.within((item) => {
					cy.get("span[class*='error-message']").should('have.text', errorMessage)
				})
		})
	})

	describe('252 | TC4: Intentar validar que administrador agregue campo invalido a username', () => {
		When('el usuario ingresa datos en username como {string}', (username) => {
			cy.get('.oxd-form-row input').eq(5).clear().type(username)
		})

		Then('deberia desplegarse un mensaje de log como {string} para el campo username', (errorMessage) => {
			cy.get('.oxd-input-field-bottom-space')
				.eq(5)
				.within((item) => {
					cy.get("span[class*='error-message']").should('have.text', errorMessage)
				})
		})
	})

	describe('252 | TC5: Intentar validar que administrador agregue campo invalido a password', () => {
		When('el usuario ingresa datos en password como {string}', (password) => {
			cy.get('.oxd-form-row input').eq(8).clear().type(password).should('have.value', password)
		})

		Then('deberia desplegarse un mensaje de log como {string} para el campo password', (errorMessage) => {
			cy.get('.oxd-input-field-bottom-space')
				.eq(8)
				.within((item) => {
					cy.get("span[class*='error-message']").should('have.text', errorMessage)
				})
		})
	})

	describe('252 | TC6: Intentar validar que administrador agregue campo invalido a confirmPassword', () => {
		Given('el administrador llena correctamente la seccion create login details como {string}', (password) => {
			cy.get('.oxd-form-row input').eq(5).clear().type('RodriguezC')
			cy.get('.oxd-form-row input').eq(8).clear().type(password).should('have.value', password)
		})

		When('el usuario ingresa datos en confirmPassword como {string}', (confirmPassword) => {
			cy.get('.oxd-form-row input').eq(9).clear().type(confirmPassword).should('have.value', confirmPassword)
		})

		Then('deberia desplegarse un mensaje de log como {string} para el campo confirmPassword', (errorMessage) => {
			cy.get('.oxd-input-field-bottom-space')
				.eq(9)
				.within((item) => {
					cy.get("span[class*='error-message']").should('have.text', errorMessage)
				})
		})
	})
})

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
