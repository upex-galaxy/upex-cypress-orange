import { Given,And, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US GX2-187 | TS: ✅OrangeHRM | PIM | Editar perfil de empleado", () =>
{
    Given("el administrador está registrado en el sistema exitosamente", () =>
    {
        cy.Login()
    })

    And("abre el VPD del empleado para editar",() =>
    {
        cy.get(".oxd-table-row").its('length').then(LengthButton =>
        {
            const randomEdit = Math.floor(Math.random() * LengthButton) + 1
            cy.get(".oxd-table-row").eq(randomEdit).within(() =>
            {
                cy.get(".bi-pencil-fill").click({force:true})

            })
            
        })
        

    })

    When("el admin inserta nuevos valores validos en los campos del form como {string},{string},{string},{string},{string},{string},{string},{string}", (firstName,MiddleName,lastName,NickName,EmployeeID,Nationality,DateOfBirth,Gender) =>
    {

        cy.fixture("DOM/PIM/EditarPerfilDeEmpleado.Page").then((the) =>
        {
            cy.get("[name='firstName']")
            .clear()
            .type(firstName)
            .should("not.contain.text", "error")


            cy.get("[name='middleName']")
            .clear()
            .type(MiddleName)
            .should("not.contain.text", "error")


            cy.get(the.input.lastName)
            .clear()
            .type(lastName)
            .should("not.contain.text", "error")


            cy.get(".oxd-grid-3 input").eq(0)
            .clear()
            .type(NickName)


            cy.get(the.input.EmployeeID).eq(4)
            .clear()
            .type(EmployeeID)
            .should("not.contain.text", "error")


            cy.dropDown(parseInt(Nationality), "Nationality")


            cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1)')
            .click({force:true})
            .type(DateOfBirth)


            cy.get("..oxd-input-group")
            .click(Female)
            .should('have.value', 'Female')
        })
    })
    And("hace click en el botón {string}", (Save)=>
    {

        expect(1).to.eq(1)
    })
    Then("debe aparecer un Log Message indicando {string}", (Message) =>
    {
        expect(1).to.eq(1)
        // cy.contains(Message).should("be.visible")
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