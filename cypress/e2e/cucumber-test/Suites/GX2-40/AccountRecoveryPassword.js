import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
    
describe("US-GX2-41 | TC1: Validar recuperar contraseña correctamente.", () => {
    Given("el usuario tiene una cuenta creada previamente", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("include","login")
    })
    And("el usuario ingresa en la sección de recuperación de contraseña", () => {
        cy.contains("Forgot your password?").click()
        cy.url().should("include","requestPasswordResetCode")
    })
    When("el usuario ingresa su {string} en {string}", (username, userInput) => {
        cy.get(userInput).type(username)
    })
    And('hace click en {string}', (ResetPassword) => {
        cy.get(ResetPassword).click()
    })
    Then("deberia aparecer un mensaje indicando {string}", (successText) => {
        cy.contains(successText).should('be.visible')
    })
    And("deberia visualizar el siguiente texto  {string} y {string}", (TextA,TextB) => {
        cy.contains(TextA).should('be.visible')
        cy.contains(TextB).should('be.visible')
        cy.url().should('include',"sendPasswordReset")
    })
}) 

describe("US-GX2-41 | TC2: Validar No poder recuperar contraseña cuando el campo username está vacío.", () => {
    Given("el usuario tiene una cuenta creada previamente.", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.url().should("contain","login")
    })
    And("el usuario ingresa en la sección de recuperación de contraseña.", () => {
            cy.contains("Forgot your password?").click()
            cy.url().should("contain","requestPasswordResetCode")
    })
    When("el usuario olvida ingresar su username en {string}", (userInput) => {
        cy.get(userInput).should('be.empty')
    })
    And("hace click en {string}.", (ResetPassword) => {
        cy.get(ResetPassword).click()
    })
    Then("debería aparecer un mensaje de error como {string} debajo del input", (requiresMsj) => {
        cy.contains(requiresMsj).should('be.visible')
    })
    And("no debería poder enviarse la solicitud de cambio de contraseña", () => {
        cy.url().should("include","requestPasswordResetCode")
    })
})

describe("US-GX2-41 | TC3: Validar No poder recuperar contraseña cuando se ingresa usuario no válido.", () => {
    Given("el usuario debe una cuenta creada previamente", () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.url().should("contain","login")
    })
    And("el usuario ingresa dentro de la sección de recuperación de contraseña", () => {
            cy.contains("Forgot your password?").click()
            cy.url().should("contain","requestPasswordResetCode")
    })
    When("el usuario debe ingresar su {string} en {string}.", (userinvalid, userInput) => {
        cy.get(userInput).type(userinvalid)
    })
    And("hace click en el botón {string}", (ResetPassword) => {
        cy.get(ResetPassword).click()
    })
    Then("deberia aparecer un mensaje de error como {string} debajo del input username", (requiresMsj) => {
        cy.contains(requiresMsj).should('be.visible')
    })
    And("no deberia poder enviarse la solicitud de contraseña", () => {
        cy.url().should("include","requestPasswordResetCode")
    })
})


//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
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