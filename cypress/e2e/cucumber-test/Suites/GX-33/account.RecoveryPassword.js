import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


describe("Us-GX2-33 | TC1 |Validar recuperar contraseña correctamente", () =>
{
    
    Given("el usuario tiene una cuenta creada previamente", () =>
    {
        
        vy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("include", "login")
        cy.location("hostname").should("include", "opensource-demo.orangehrmlive.com")
        cy.location("protocol").should("contain", "https")
    })

    And("el usuario ingresa en la sección de recuperación de contraseña", () =>
    {

        cy.contains("Forgot your password?").click()
        cy.url().should("contain", "requestPasswordResetCode")

    })
    When("el usuario ingresa su username en el input de username", () =>
    {
        
        cy.expect(true).to.equal(true)
    })

    And("hace click en Reset Password", () =>
    {

        cy.expect(true).to.equal(true)
    })
    
    Then("deberia aparecer un mensaje indicando: Reset Password link sent successfully",()=>
    {
        cy.expect(true).to.equal(true)

    })
    And("deberia visualizar el siguiente texto:A reset password link has been sent to you via email. You can follow that link and select a new password (ver Mocku)", () =>
    {
        cy.expect(true).to.equal(true)
    })
})
