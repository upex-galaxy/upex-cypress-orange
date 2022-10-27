import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import ForgetPasswordPage from "../../../../support/pages/OrangeHRM/ForgetPasswordPage";

    //Precondicones
    Given("el usuario esta en el endpoint {string}", (endpoint) => {
        ForgetPasswordPage.visit()
        cy.url().should("contain",endpoint) 
})


describe("US GX2-146 | TS GX2-147 | TC1: Validar recuperar la contraseña de usuario con cuenta previamente creada", () => {
    
    Given("el usuario tiene una cuenta previamente creada", () => {
        cy.log("Cuenta creada")
    })

    When("el usuario ingresa el username {string} en el input username y hace click en el boton Reset Password", (validUsername) => {
        ForgetPasswordPage.typeUsername(validUsername)
        ForgetPasswordPage.elements.resetPassword_button().click()
    })

    Then("debe aparecer el mensaje {string}", (resetPasswordsuccessfullyMessage) => {
        ForgetPasswordPage.elements.successfullResetPasswordMessage().should("be.visible").and("have.text",resetPasswordsuccessfullyMessage)
    })

    And("debe indicar el siguiente texto: {string} y {string}", (succesfullEmailMessage1,succesfullEmailMessage2) => {
        cy.get(':nth-child(3) > .oxd-text').should("contain",succesfullEmailMessage1)
        cy.get(':nth-child(4) > .oxd-text').should("contain",succesfullEmailMessage2)
    })

})

// * TC2
describe("US GX2-146 | TS GX2-147 | TC2:  Validar que no permita recuperar la contraseña de usuario previamente no creado", () => {
    
    Given("el usuario NO tiene una cuenta previamente creada", () => {
        cy.log("Usuario con cuenta no creada")
    })

    When("el usuario ingresa su username {string} en el input username y hace click en el boton Reset Password", (invalidUsername) => {
        ForgetPasswordPage.typeUsername(invalidUsername)
        ForgetPasswordPage.elements.resetPassword_button().click()
    })

    Then("No debe aparecer el mensaje {string}", (resetPasswordsuccessfullyMessage) => {
        ForgetPasswordPage.elements.successfullResetPasswordMessage().should("not.have.text",resetPasswordsuccessfullyMessage)
    })


})

describe("US GX2-146 | TS GX2-147 | TC3: Validar que no permita recuperar la contraseña dejando el input “username” vacío", () => {
    
    Given("el usuario deja el input username vacio y hace click en el boton Reset Password", () => {
        ForgetPasswordPage.elements.username_input().should("be.empty")
        ForgetPasswordPage.elements.resetPassword_button().click()
    })

    Then("el border del input username se cambia a color rojo {string} y se muestra un mensaje {string}", (colorRojo,requiredMessage) => {
        ForgetPasswordPage.elements.username_input().should("have.css", "border-color", colorRojo)
        ForgetPasswordPage.elements.required_span().should("be.visible").and("have.text",requiredMessage)
    })

    And("No se muestra el mensaje {string}", (resetPasswordsuccessfullyMessage) => {
    ForgetPasswordPage.elements.successfullResetPasswordMessage().should("not.have.text",resetPasswordsuccessfullyMessage)
    })
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
