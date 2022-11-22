import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario esta ubicado en la pagina de recuperación de contraseña', () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
})
describe('GX2-195 | TS 196 | TC01:  Validar usuario recupera la contraseña exitosamente', () => {
	When('el usuario ingresa su {string} en el formulario', (usernamevalido) => {
		cy.get('.oxd-input').type(usernamevalido)
	})

	And('hace click en Reset Password', () => {
		cy.get('[type="submit"]').click()
	})
	Then('aparecera un mensaje de confirmacion como {string}', (msj) => {
		cy.get('.oxd-text--h6').contains(msj)
	})
})

//🚩🧪Este TC no puede ejecutarse porque hay un defecto en la feature según los requerimientos:
// describe('GX2-195 | TS 196 | TC02:  Validar no poder recuperar contraseña de usuario inexistente', () => {
// 	When('el usuario ingresa un {string} inexistente', (username) => {
// 		cy.get('.oxd-input').type(username)
// 	})

// 	And('hace click en Reset Password2', () => {
// 		cy.get('[type="submit"]').click()
// 	})
// 	Then('se remarcara el imput Username en color rojo y arrojará el mensaje2 {string}', (msj2) => {
// 		cy.get('.oxd-input.oxd-input--active.oxd-input--error').should('exist')
// 		cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').contains(msj2)
// 	})
// })

describe('GX2-195 | TS 196 | TC03:  Validar no poder recuperar contraseña con usuario null', () => {
	When('el usuario no ingresa nombre de usuario', () => {
		cy.get('.oxd-input').type('{enter}')
	})

	And('hace click en Reset Password3', () => {
		cy.get('[type="submit"]').click()
	})
	Then('se remarcara el imput Username en color rojo y arrojará el mensaje3 {string}', (msj3) => {
		cy.get('.oxd-input.oxd-input--active.oxd-input--error').should('exist')
		cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').contains(msj3)
	})
})