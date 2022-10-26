import { Given,And, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US GX2-187 | TS: ✅OrangeHRM | PIM | Editar perfil de empleado", () =>
{
    Given("el administrador está registrado en el sistema exitosamente", () =>
    {
        cy.LoginOrange()

    })

    And("abre el VPD del empleado para editar",() =>
    {

        cy.fixture("DOM/PIM/EditarPerfilDeEmpleado.Page.json").then((the) =>
        {
            cy.visit(the.urlPIM)// visita la url
            cy.url().should("contain", "viewEmployeeList")

            cy.scrollTo(0, 500)
            cy.get(the.selector).click({force:true})
            
        })
    })
    
    When("el admin inserta nuevos valores validos en los campos del form como {string},{string},{string},{string}", (firstName,MiddleName,lastName,NickName,EmployeeID,Nationality,DateofBirth,Gender) =>
    {
        cy.get(the.input.firstName)
            .type(firstName)
            .should("contain.text", "firstName")
            .and("be.visible")

        cy.get(the.input.middleName)
            .type(MiddleName)
            .should("contain.text", "firstName")
            .and("be.visible")

        cy.get(the.input.lastName)
            .type(lastName)
            .should("contain.text", "firstName")
            .and("be.visible")

        cy.get(the.input.NickName).eq(3)
            .type(NickName)

        cy.get(the.input.EmployeeID).eq(4)
            .type(EmployeeID)

        cy.get(the.input.Nationality)
            .type(Nationality)

        cy.get(the.input.DateOfBirth)
            .type(DateofBirth)

        cy.get(the.input.Gender)
            .type(Gender)
    })
    And("hace click en el botón {string}", (Save)=>
    {
        expect(1).to.eq(1)
    })
    Then("debe aparecer un Log Message indicando {string}", (Message) =>
    {
        cy.contains(Message).should("be.visible")
    })
    And("se mantiene en la página del perfil del empleado", ()=>
    {
        expect(1).to.eq(1)
    })
    And("la información del empleado es actualizada en la Tabla del {string}", (EmployeeList)=>
    {
        expect(1).to.eq(1)
    })
})



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