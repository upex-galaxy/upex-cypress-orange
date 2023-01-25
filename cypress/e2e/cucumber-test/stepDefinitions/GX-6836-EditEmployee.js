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

		cy.fixture('data/endpoints').then((data) => {
			site = data
		})


		
	})
	And('abre el VPD del empleado para editar', () => {
		cy.visit(site.pages.pim)
		pim.get.pencilButton().click({ force: true })
		employee.get.EmployeeProfilePicture().should('exist').and('be.visible')
	})

	describe('TC1: admin edita información personal del empleado', () => {
		When('el admin inserta nuevos valores en los campos del form', () => {
			cy.GetCurrentUrl()
			cy.GetEmployeeId()
			cy.UpdateEmployeeFirstName(the)
			cy.UpdateEmployeeMiddleName(the)
			cy.UpdateEmployeeLastName(the)
		})
		And('hace click en el botón Save', () => {
			employee.clickSavePersonalDetails()
		})

		//Success, Succesfully Saved
		Then('debe aparecer un Log Message indicando Successfully Updated', () => {
			employee.get.SuccessToastMessage().invoke('text').should('eq', 'Successfully Updated') //harcoded

		})
		And('se mantiene en la página del perfil del empleado', () => {
			cy.reload()
			employee.get.EmployeeFirstAndLastName().invoke('text').should('eq', `${the.employeeNewData.firstName} ${the.employeeNewData.lastName}`)
			cy.url().should('eq', Cypress.env('currentUrl'))
		})
		And('la información del empleado es actualizada en la Tabla del Employee List', () => {
			cy.visit(site.pages.pim)
			pim.enterEmployeeId(Cypress.env('employeeId'))
			pim.clickOnSearchButton()
			pim.get.employeeRow().should(($el) => {
				expect($el)
					.to.contain(Cypress.env('employeeId'))
					.and.contain(the.employeeNewData.firstName)
					.contain(the.employeeNewData.middleName)
					.contain(the.employeeNewData.lastName)
			})
		})
	})

	describe('TC2: admin edita imagen de perfil del empleado', () => { 

		When('el admin ingresa en la imagen del perfil del empleado', () =>{
			//cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/29')
			employee.clickEmployeeProfileImage()
		})
		
		And('carga una nueva imagen de perfil en el UploadInput', ()=>{
			employee.get.EmployeeChangeImageButton().selectFile('cypress/fixtures/images/NewProfilePicture.jpg', {force: true})
		})

		And('hace click en el botón "Save"', ()=>{
            employee.clickSaveProfileImage()
		})

		Then('debe aparecer un Log Message indicando "Success, Succesfully Saved"', ()=>{
            employee.get.SuccessToastMessage().invoke('text').should('eq', 'Successfully Updated')
		})

		And('debe visualizarse la nueva imagen de perfil en todas las vistas del empleado', ()=>{
            
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
