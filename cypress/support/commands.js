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
import 'cypress-wait-until'
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')

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

// 👾🚩🚩🚩NO ESCRIBAS UN NUEVO COMANDO EN ESTA LINEA, DIRÍGETE HASTA LA ÚLTIMA LINEA DISPONIBLE👇🏻👇🏻👇🏻✅

Cypress.Commands.add("Login", () =>
{
    const username = Cypress.env('AdminUser').username
    const password = Cypress.env('AdminUser').password

    cy.session("login",()=>{
        cy.visit("/")// visita la url
        cy.url().should("contain", "orangehrm")

        cy.get("[name='username']").type(username)//Obtener input Username y escribir el usuario
        .should("have.value","Admin") // Debería contener el el valor de usuario

        cy.get("[name='password']").type(password) //Obtener input Password y escribir el contraseña
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

Cypress.Commands.add("getRandomEmployee",()=>{
    // const json = require("../../../../fixtures/DOM/PIM/editarEmpleado.page.json")

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let getRandomInt1 = getRandomInt(0,36)
    cy.get('[role="rowgroup"]').children().eq(getRandomInt1).within(()=>{
        cy.get('[role="row"]').within(() => {
            cy.get('[role="cell"]').eq(2).children().then((inside) => {
                const firstName = inside.text()
                Cypress.env('firstName', firstName)
            })
            cy.get('[role="cell"]').eq(3).children().then((inside) => {
                const lastName = inside.text()
                Cypress.env('lastName', lastName)
            })
        })
        cy.get('button').eq(1).click()
    })
    cy.waitUntil(()=> cy.get('[class*=employee-name] h6').should('be.visible'))
            cy.get('[class*=employee-name] h6').then((actualName)=>{
                const firstName = Cypress.env('firstName').split(" ")[0]
                const lastName = Cypress.env('lastName')
                const expectedName = `${firstName} ${lastName}`
                expect(actualName.text()).equal(expectedName)
})
})





// 👾🚩🚩🚩☝🏻☝🏻☝🏻COMIENZA A ESCRIBIR TU NUEVO COMMAND AQUÍ! A PARTIR DE ESTA LÍNEA DISPONIBLE☝🏻☝🏻☝🏻✅
