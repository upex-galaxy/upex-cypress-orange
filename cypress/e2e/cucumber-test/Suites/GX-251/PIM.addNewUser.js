import { Given, And, When, Then } from '@badeball/cypress-cucumber-preprocessor'

context('Feature: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario', () => {
    Given('el administrador esté registrado en el sistema exitosamente', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    
    And('se le autoasigne un perfil de administrador por defecto', () => {
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get('button[type=submit]').click()
    })
    
    And('el administrador se encuentra en Módulo PIM', () => {
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    })
    
    describe('252 | TC1: Validar que administrador pueda incorporar un nuevo empleado con usuario al sistema de gestión', () => {
        Given('el administrador se ubica en la sección "Add Employee"', () => {
            cy.contains('a', /^Add Employee/).click()
        })
    
        And('activa la opción de "Create Login Details"', () => {
            cy.get('input[type=checkbox]').click({force: true})
        })
    
        When('rellena todos los datos requeridos (incluyendo credenciales) como {string}', (firstName) => {
            cy.get("[name='firstName']").type(firstName)
    
            // cy.get("[name='middleName']")
            // .clear()
            // .type(middleName)
    
            // cy.get("[name='lastName']")
            // .clear()
            // .type(lastName)
    
            // cy.get("[input.oxd-form-row]").eq(4)
            // .clear()
            // .type(employeeID)
            
            // cy.get("[input.oxd-form-row]").eq(4)
            // .clear()
            // .type(username)

            // cy.get("[input.oxd-form-row]").eq(4)
            // .clear()
            // .type(password)

            // cy.get("[input.oxd-form-row]").eq(4)
            // .clear()
            // .type(confirmPassword)
        })
    })
})

// // cypress/e2e/duckduckgo.ts
// import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// When("I visit duckduckgo.com", () => {
//   cy.visit("https://www.duckduckgo.com");
// });

// Then("I should see a search bar {string}", (name) => {
//   cy.get("#search_form_input_homepage").type(name)
// });


Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}
