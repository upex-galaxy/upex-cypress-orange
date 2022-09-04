import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US-GX2-41 | TC1: Validar recuperar contraseña correctamente.", () => {
    Given("el usuario tiene una cuenta creada previamente", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("contain", "login")
    })

    And("el usuario ingresa en la sección de recuperación de contraseña", () => {
        cy.contains("Forgot your password?")
            .click()
        cy.url().should("contain","requestPasswordResetCode")
    })

    When("el usuario ingresa su {string} en el input de username", (name) => {
        cy.get('[name="username"]')
        .type(name)
    })

    And("hace click en {string}", (ResetPassword) => {
        cy.get(ResetPassword)
        .click()
    })

    Then("deberia aparecer un mensaje como {string}", (success) => {
        cy.contains(success)
        .should("exist")
    })

    And("deberia visualizar el siguiente {string} y {string}", (texto1, texto2) => {
        cy.contains(texto1)
            .should('be.visible')
        cy.contains(texto2)
        .should('be.visible')
    })

})