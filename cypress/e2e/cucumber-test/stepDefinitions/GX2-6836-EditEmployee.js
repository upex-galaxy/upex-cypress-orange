import { employee } from '@pages/Employee.Page.js'
import { pim } from '@pages/Pim.Page.js'
import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'
const { username, password } = Cypress.env('AdminUser')
let the

context('GX2-6836 | OrangeHRM | PIM | Editar perfil de empleado', () => {
	Given('el administrador está registrado en el sistema exitosamente', () => {
		cy.Login(username, password)
		cy.fixture('data/employee').then((data) => {
			the = data
		})
	})
	And('abre el VPD del empleado para editar', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList') // donde puedo agregar este endpoint para que no este harcoded
        pim.get.pencilButton().click({ force: true })
        employee.get.EmployeeProfilePicture().should('exist').and('be.visible')
	})

	describe('GX2-6837 | TC1: admin edita información personal del empleado', () => {
		When('el admin inserta nuevos valores en los campos del form', () => {
            cy.UpdateEmployeeFirstName(the)
            cy.UpdateEmployeeMiddleName(the)
            cy.UpdateEmployeeLastName(the)
		})
		And('hace click en el botón Save', () => {
            employee.clickSavePersonalDetails()
		})
		Then('debe aparecer un Log Message indicando Success, Succesfully Saved', () => {
			cy.log('Then')
		})
		And('se mantiene en la página del perfil del empleado', () => {
			cy.log('And')
		})
		And('la información del empleado es actualizada en la Tabla del Employee List', () => {
			cy.log('And')
		})
	})
})


// Este código abajo es para que NO APAREZCA los XHR o Fetch en el Test Runner de Cypress, para que se vea limpio.
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
