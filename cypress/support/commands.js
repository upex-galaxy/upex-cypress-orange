// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
import 'cypress-wait-until';



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



Cypress.Commands.add("Login", () =>
{
    cy.session("login",()=>{
        cy.visit("/")// visita la url
        cy.url().should("contain", "orangehrm")

        cy.get("[name='username']").type("Admin")//Obtener input Username y escribir el usuario
        .should("have.value","Admin") // Debería contener el el valor de usuario

        cy.get("[name='password']").type("admin123") //Obtener input Password y escribir el contraseña
        .should("have.value", "admin123") // Debería contener el el valor de la contraseña

        cy.get("[type='submit']").click() // Contiene Login, hacer click
    })
})

Cypress.Commands.add("dropDown", (index,type) =>
{
    cy.contains("div", type).siblings().within(() =>
    {
        cy.get(".oxd-select-text").click({force:true})

    }).then(() =>
    {
        cy.get("[role='listbox']").children().eq(index).click()
    })
})


