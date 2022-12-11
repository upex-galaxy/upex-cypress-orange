const { Given,When,Then, And } = require("@badeball/cypress-cucumber-preprocessor");

context("✅OrangeHRM | Side-Panel | Filter for a Category Section by Search Bar",()=>{

    Given("admin is logged in",()=>{
        cy.Login()
    })

    describe("509 | TC1: Check finding a category in panel when the search bar text is matching a category",()=>{
        
        When("admin enters a text into the Search Bar input as {string}",(searchText)=>{
            cy.visit("/")
            cy.wait(1000)
            cy.get('[placeholder="Search"]').type(searchText)
        })
        Then("the panel should only display the matching category as {string}",(categoryText)=>{
            cy.get('[class*="sidepanel-body"]').within((panel)=>{
                cy.get("input").should("not.have.value","")
                cy.get("li span")
                    .should("exist")
                    .then((categories)=>{
                        expect(categoryText).to.include(categories.text())
                    })
            })
            // Precondición del siguiente Paso:
            cy.get('[class*="sidepanel-body"] li span').contains(categoryText)
                .click({force:true})
        })
        And("the category should have the same endpoint as {string}",(endpoint)=>{
            cy.url().should("contain", endpoint)
        })
    })

    describe('509 | TC2:  Check Not finding categories when search bar text is NOT matching categories', () => {
        
        When("admin enters a text that it's not matching into the Search Bar input as {string}",(searchText)=>{
            cy.visit("/")
            cy.wait(1000)
            cy.get('[placeholder="Search"]').type(searchText)
        })
        Then("the panel should NOT display any category because the input text is not matching",()=>{
            cy.get('[class*="sidepanel-body"]').within((panel)=>{
                cy.get("input").should("not.have.value","")
                cy.get("li span")
                    .should("not.exist")
            })
        })
    });
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













