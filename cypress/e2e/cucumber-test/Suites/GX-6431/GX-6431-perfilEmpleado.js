import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {PersonalDetail} from "../../../../support/pages/OrangeHRM/editarEmpleadoPage"

context("El administrador debe estar registrado y loggueado en el site exitosamente", () => {

    Given("el administrador se encuentra en la pagina de login de Orange", () => {
        cy.visit('web/index.php/auth/login')
        cy.url().should('contain', 'login')
    })

    And("el administrador ingresa unas credenciales validas consiguiendo acceso al site", () => {
        cy.Login('Admin', 'admin123')
    })

    Then("el administrador debe posicionarse en la pestaña PIM y Employee List", () => {
        cy.visit('web/index.php/pim/viewEmployeeList')
        cy.url().should('contain', 'viewEmployeeList')
    })

    describe("admin edita información personal del empleado.", () => {

        When("el admin inserta nuevos valores en los campos del form", () => {
        cy.fixture("DOM/PIM/editarEmpleado.page").then((the)=>{
            cy.getRandomEmployee()
            PersonalDetail.typeFirstName(the.personal_Details.firstName)
            // inputs.typeLastName()
            // inputs.typeBirthDate()
            // inputs.selectNationality()
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
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}
})