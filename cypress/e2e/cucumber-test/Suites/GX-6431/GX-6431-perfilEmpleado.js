import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {PersonalDetail} from "../../../../support/pages/OrangeHRM/editarEmpleadoPage"

context("El administrador debe estar registrado y loggueado en el site exitosamente", () => {

    Given("el administrador se encuentra en la pagina de login de Orange", () => {
        cy.visit('web/index.php/auth/login')
        cy.url().should('contain', 'login')
    })

    And("el administrador ingresa unas credenciales validas consiguiendo acceso al site", () => {
        cy.Login()
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
            PersonalDetail.typeLastName(the.personal_Details.lastName)
            PersonalDetail.typeBirthDate(the.personal_Details.dateOfBirth)
            PersonalDetail.selectNationality()
            PersonalDetail.selectGender()
            PersonalDetail.clickSubmit()
            cy.get('#oxd-toaster_1').should('be.visible').then(()=>{
                cy.get('[class*="content-text"]').eq(1).should('have.text','Successfully Updated')
            })
            //Assertions
            cy.waitUntil(()=> cy.get('[class*=employee-name] h6').should('be.visible'))
            PersonalDetail.inputs.employeeName().should('have.text','Upex Galaxy')
            //Cuando Agrego otras asersiones falla la asersion numero 1
            PersonalDetail.inputs.birthDate().should('have.text','1994-06-15')
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