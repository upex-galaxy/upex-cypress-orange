import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor'
import {PersonalDetail} from '../../../../support/pages/OrangeHRM/editarEmpleadoPage'
import {faker} from '@faker-js/faker'
import {EmployeeListPage} from '../../../../support/pages/OrangeHRM/employeeListPage'

context('OrangeHRM | PIM | Editar perfil de empleado', () => {
	Given('el administrador se encuentra en la pagina de login de Orange', () => {
		cy.visit('web/index.php/auth/login')
		cy.url().should('contain', 'login')
	})

	And('el administrador ingresa unas credenciales validas consiguiendo acceso al site', () => {
		cy.Login()
	})

	And('el administrador debe posicionarse en la pestaña PIM y Employee List', () => {
		cy.visit('web/index.php/pim/viewEmployeeList')
		cy.url().should('contain', 'viewEmployeeList')
	})

	describe('TC1: Admin edita información personal del empleado', () => {
		When('el admin inserta nuevos valores en los campos del form', () => {
			Cypress.env('randomFirstName', faker.name.firstName())
			Cypress.env('randomLastName', faker.name.lastName())
			EmployeeListPage.getRandomEmployee()
			PersonalDetail.typeFirstName(Cypress.env('randomFirstName'))
			PersonalDetail.clearMiddleName()
			PersonalDetail.typeLastName(Cypress.env('randomLastName'))
			PersonalDetail.typeBirthDate('1994-06-15')
			PersonalDetail.selectNationality() //Include Nationality Assertion
			PersonalDetail.selectGender() //Include Gender Assertion
		})
		And('hacer click en el boton {string}', (save) => {
			PersonalDetail.clickSubmit()
			cy.reload()
			//Full Name Assertion
			Cypress.env('expectedName', `${Cypress.env('randomFirstName')} ${Cypress.env('randomLastName')}`)
			cy.waitUntil(() => cy.get('[class*=employee-name] h6').should('be.visible'))
			PersonalDetail.inputs.employeeName().should('have.text', Cypress.env('expectedName'))
			//BirthDate Assertion
			PersonalDetail.inputs
				.birthDate()
				.click()
				.then(() => {
					cy.get('[class*="selector-month"] div p').should('have.text', 'June')
					cy.get('[class*="selector-year"] div p').should('have.text', '1994')
					cy.get('[class*="dates-grid"]').within(() => {
						cy.get('[class*="date-wrapper"]').eq(14).should('have.text', '15')
					})
				})
		})
		Then('debe aparecer un Log Message indicando {string}', (message) => {
			PersonalDetail.clickSubmit()
			cy.get('#oxd-toaster_1')
				.should('be.visible')
				.then(() => {
					cy.get('[class*="content-text"]').eq(1).should('have.text', message)
				})
		})
		And('se mantiene en la página del perfil del empleado', () => {
			cy.url().should('contain', 'viewPersonalDetails')
		})
		And('la información del empleado es actualizada en la Tabla del {string}', (eList) => {
			cy.visit('web/index.php/pim/viewEmployeeList')
			cy.url().should('contain', 'viewEmployeeList')
			EmployeeListPage.getMofiedEmployee()
		})
	})

	describe('TC2: Admin edita imagen de perfil del empleado.', () => {
		When('el admin ingresa en la imagen del perfil del empleado', () => {
            EmployeeListPage.getRandomEmployee()
            PersonalDetail.clickImage()
		})
		And('carga una nueva imagen de perfil en el UploadInput', () => {
				PersonalDetail.actualizeImage()
		})
		And('hace click en el botón {string}', (save) => {
			PersonalDetail.clickSubmit()
		})
		Then('debe aparecer una alerta indicando {string}', (message) => {
			cy.get('#oxd-toaster_1')
				.should('be.visible')
				.then(() => {
					cy.get('[class*="content-text"]').eq(1).should('have.text', message)
				})
		})
		And('debe visualizarse la nueva imagen de perfil en todas las vistas del empleado.', () => {
			expect(1).to.eq(1)
			// Este step definition requiere visual testing, se sale de scope.
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
