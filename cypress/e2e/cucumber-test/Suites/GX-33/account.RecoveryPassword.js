import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";



describe("Us-GX2-33 | TC1 |Validar recuperar contraseña correctamente", () => {
    
    Given("el usuario tiene una cuenta creada previamente", () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("include", "login")
        cy.location("hostname").should("include", "opensource-demo.orangehrmlive.com")
        cy.location("protocol").should("contain", "https")
    })

    And("el usuario ingresa en la sección de recuperación de contraseña", () => {

        cy.contains("Forgot your password?").click()
        cy.url().should("contain", "requestPasswordResetCode")

    })
    When("el usuario ingresa su {string} en el input de username", (username) => {
        
        cy.get('input[name="username"]').type(username)
    })

    And("hace click en {string}", (ResetPassword) => {

        cy.get('button[type="submit"]').click()
            .should("contain.text", ResetPassword)
    })
    
    Then("deberia aparecer un mensaje indicando: Reset Password link sent successfully", () => {
        
        cy.url().should("contain", "sendPasswordReset")
        cy.get("h6").should("be.visible", "Reset Password link sent successfully")

    })

    And("deberia visualizar el siguiente texto:A reset password link has been sent to you via email.You can follow that link and select a new password", () => {
    
        cy.get("p").eq(1)
            .should("be.visible", "A reset password link has been sent to you via email.")
        cy.get("p").eq(3)
            .should("be.visible", "You can follow that link and select a new password.")
        
    })
})

describe(" Us-GX2-33 | TC2 |Validar NO poder recuperar contraseña cuando el campo username esta vacio", () => {
        
    Given("el admin tiene una cuenta creada previamente", () => {
            
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("include", "login")
        cy.location("hostname").should("include", "opensource-demo.orangehrmlive.com")
        cy.location("protocol").should("contain", "https")
    })
    
    And("el admin ingresa en la sección de recuperación de contraseña", () => {
    
        cy.contains("Forgot your password?").click()
        cy.url().should("contain", "requestPasswordResetCode")
    
    })
    When("el admin ingresa en el input de username vacio", () => {
            
        cy.get('input[name="username"]').should("be.empty")
            
    })
    
    And("hace click en el botton {string}", (Reset) => {
    
        cy.get('button[type="submit"]').click()
            .should("contain.text", Reset)
                
    })
        
    Then("deberia apareceria un mensaje de error: {string}", (Required) => {
            
            
        cy.get("span").should("be.visible", Required)
    
    })
    
    And("no deberia poder enviarse la solicitud de cambio de contraseña", () => {
        
        cy.url().should("contain", "requestPasswordResetCode")
            
    })

})   
describe(" Us-GX2-33 | TC3 |Validar NO poder recuperar contraseña cuando se ingresa username no valido", () => {
        
    Given("el usuario tiene una cuenta previamente creada", () => {
            
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.url().should("include", "login")
            cy.location("hostname").should("include", "opensource-demo.orangehrmlive.com")
            cy.location("protocol").should("contain", "https")
        })
    
    And("el usuario ingresa en la parte de recuperación de contraseña", () => {
    
            cy.contains("Forgot your password?").click()
            cy.url().should("contain", "requestPasswordResetCode")
    
        })
    When("el usuario ingresa su username {string} en el input", (invalido) => {
            
            cy.get('input[name="username"]').type(invalido)
        })
    
    And("hace click en el botton {string} ", (Reset) => {
    
            cy.get('button[type="submit"]').click()
                .should("contain.text", Reset)
                
        })
        
    Then("deberia apareceria un mensaje de error indicando: {string}", (Required) => {
            
            
            cy.get("span").should("be.visible", Required)
    
        })
    
    And("no deberia poder enviar la solicitud de cambio de contraseña", () => {
        
            cy.url().should("contain", "requestPasswordResetCode")
            
        })
    })


