// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import cypress from 'cypress';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')



// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("LoginOrange", () =>
{
    cy.fixture("DOM/PIM/EditarPerfilDeEmpleado.Page.json").then((the) =>
    {
        cy.visit(the.url)// visita la url
        cy.url().should("contain", "orangehrm")

        cy.get(the.input.username).type(the.data.username)//Obtener input Username y escribir el usuario
        .should("have.value",the.data.username) // Debería contener el el valor de usuario

        cy.get(the.input.password).type(the.data.password) //Obtener input Password y escribir el contraseña
        .should("have.value", the.data.password) // Debería contener el el valor de la contraseña

        cy.get(the.input.buttonLogin).click() // Contiene Login, hacer click
    })
})


