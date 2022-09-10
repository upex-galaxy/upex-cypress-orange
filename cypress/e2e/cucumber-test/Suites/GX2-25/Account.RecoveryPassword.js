import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';

describe('US-GX2-25 | TC1 - Validar recuperar contraseña correctamente', () => {

	Given('El usuario tiene una cuenta creada previamente', () => {
		
		cy.visit('https://opensource-demo.orangehrmlive.com/')
		cy.url().should('contain', 'login')
	})

	And('El usuario ingresa en la sección de recuperación de contraseña', () => {
		
		cy.contains('Forgot your password?').click()
		cy.url().should('contain', 'requestPasswordResetCode')
	})	

	When('El usuario ingresa su {string} en el input de username', (username) => {
		
		cy.get("[name='username']").type(username)
	})
		
	And('Hace click en {string}', (button) => {
		
		cy.get('button[type="submit"]').click().should('contain.text', button)
	})
	
	Then('Debería visualizar un mensaje de {string}', (message) => {

		cy.contains(message).should('exist')
	})
		
	And('Debería visualizar el {string} y {string}', (message1, message2) => {

		cy.contains(message1).should('be.visible')
		cy.contains(message2).should('be.visible')
	})
})

describe('US-GX2-25 | TC2 - Validar NO poder recuperar contraseña cuando el campo username está vacío', () => {

	Given('Usuario tiene una cuenta creada previamente', () => {
		
		cy.visit('https://opensource-demo.orangehrmlive.com/')
		cy.url().should('contain', 'login')
	})

	And('Usuario ingresa en la sección de recuperación de contraseña', () => {
		
		cy.contains('Forgot your password?').click()
		cy.url().should('contain', 'requestPasswordResetCode')
	})	

	When('Usuario deja vacío el input de username', () => {
		
		cy.get('input[name="username"]').should("be.empty")
	})
		
	And('Hace click en el botón {string}', (resetPassword) => {
		
		cy.get('button[type="submit"]').click().should('contain.text', resetPassword)
	})
	
	Then('Debería aparecer un mensaje de error como {string} debajo del input', (message) => {

		cy.get('span').should('be.visible', message)
	})
		
	And('NO debería poder enviar la solicitud de cambio de contraseña', () => {

		cy.get('h6').should('contain', 'Reset Password')
	})
})

describe('US-GX2-25 | TC3 - Validar NO poder recuperar contraseña cuando se ingresa usuario no válido', () => {

	Given('El usuario tiene una cuenta previamente establecida', () => {
		
		cy.visit('https://opensource-demo.orangehrmlive.com/')
		cy.url().should('contain', 'login')
	})

	And('El usuario ingresa en el sector de recuperación de contraseña', () => {
		
		cy.contains('Forgot your password?').click()
		cy.url().should('contain', 'requestPasswordResetCode')
	})	

	When('El usuario ingresa en el input su username {string}', (username) => {
		
		cy.get('input[name="username"]').type(username)
	})
		
	And('Hace click en donde dice {string}', (resetPassword) => {
		
		cy.get('button[type="submit"]').click().should('contain.text', resetPassword)
	})
	
	Then('Debería aparecer un mensaje de error indicando: {string}', (message) => {

		cy.get('span').should('be.visible', message)
	})
		
	And('NO debería poder enviar la invitación de cambio de contraseña', () => {

		cy.url().should("not.contain", "requestPasswordResetCode")
	})
})