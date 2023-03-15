// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'
import 'cypress-wait-until'
import '@4tw/cypress-drag-drop'
import { login } from '@pages/Login.Page'
import { employee } from '@pages/Employee.Page'

const { authLogin, dashboardIndex } = Cypress.env('endpoint')

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => {
	cy.session('login', () => {
		cy.visit('/')
		cy.url().should('contain', authLogin)
		username && login.enterUsername(username)
		password && login.enterPassword(password)
		login.submitLogin()

		cy.url().should('contain', dashboardIndex)
	})
})

Cypress.Commands.add('UpdateEmployeeFirstName', (the) => {
	employee.get
		.EmployeeFirstNameInput()
		.clear()
		.type(the.employeeNewData.firstName)
		.invoke('prop', '_value')
		.should('eq', the.employeeNewData.firstName)
})

Cypress.Commands.add('UpdateEmployeeMiddleName', (the) => {
	employee.get
		.EmployeeMiddleNameInput()
		.clear()
		.type(the.employeeNewData.middleName)
		.invoke('prop', '_value')
		.should('eq', the.employeeNewData.middleName)
})

Cypress.Commands.add('UpdateEmployeeLastName', (the) => {
	employee.get
		.EmployeeLastNameInput()
		.clear()
		.type(the.employeeNewData.lastName)
		.invoke('prop', '_value')
		.should('eq', the.employeeNewData.lastName)
})

Cypress.Commands.add('GetEmployeeId', () => {
	cy.then(() => {
		employee.get
			.EmployeeId()
			.invoke('prop', '_value')
			.then((employeeIdValue) => {
				Cypress.env('employeeId', employeeIdValue)

				cy.log(` EL EMPLOYEEID ES ${Cypress.env('employeeId', employeeIdValue)}`)
			})
	})
})

Cypress.Commands.add('GetCurrentUrl', () => {
	cy.url().then((url) => {
		Cypress.env('currentUrl', url)
	})
})

Cypress.Commands.add('GetEmployeeNumber', () => {

	cy.url().then((url) => {
		//const currentURL = url;
		cy.log(`URL IS; ${url}`)
		currentURL = url.split('empNumber/')
		const id = currentURL[1]
		cy.log(`EMPLOYEE NUMBER IS; ${id}`)
		Cypress.env('employeeNumber', id)

	})

})

Cypress.Commands.add('GetEmployeeImageEtag', () =>{
		
	cy.api({
		method: 'GET',
		url: `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/${Cypress.env('employeeNumber')}`,
	}).then((resp) => {
		expect(resp.status).to.equal(200)
		Cypress.env('employeeImageEtag', resp.headers.etag)
		cy.log(`EMPLOYEE NUMBER ${Cypress.env('employeeNumber')} HAS PROLIFE ETAG ------>  ${Cypress.env('employeeImageEtag')}`)
	})

})




