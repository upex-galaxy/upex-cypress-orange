describe('take element', () => {
    
	beforeEach(() => {
        cy.session("login",()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("[name='username']").type("Admin")
            cy.get("[name='password']").type("admin123")
            cy.get("[type='submit']").click()
            cy.url().should("contain","viewEmployeeList")
        })

    })
    it("edit",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        cy.get(".bi-pencil-fill").then((editBtn)=>{
            cy.log(editBtn.length)
            const randomEdit = Math.floor(Math.random() * editBtn.length)
            cy.wrap(editBtn).eq(randomEdit)
                .click({force:true})
        })

        cy.get(".oxd-grid-3 input").eq(0)
            .type("Saitest")

        cy.get(".oxd-select-text--arrow").eq(0) // Nacionalidad
            .click({force:true})

        const randomNum = Math.floor(Math.random() * 194)
        cy.get("[role='option']").eq(randomNum) // Option de Nacionalidad
            .click()
        
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