describe("upexwork",()=>{
    
    const givenLink = "https://forms.gle/vfFsGR1QdKvCbUqs7"

    it("visit and click link 1",()=>{
        
        cy.visit("https://www.upexwork.com/")
        cy.wait(2000)
        cy.contains("UNIRME A LA COMUNIDAD UPEX").should("not.be.visible").then((link)=>{
            cy.wrap(link)
                .scrollIntoView({duration: 100})
            cy.wait(2000)
            cy.wrap(link).should("be.visible")
            expect(link.length).equal(1)
            cy.wrap(link).invoke("attr","href").should("equal",givenLink)
            cy.wrap(link).invoke("removeAttr","target").click()
        })
        cy.url().should("contain","docs.google.com")
    })

    it("click link2",()=>{
        
        cy.visit("https://www.upexwork.com/")
        cy.wait(2000)
        cy.get(".footer-logo").scrollIntoView({duration:9000})
        cy.wait(2000)
        cy.get(`[href='${givenLink}']`).then((links)=>{
            expect(links.length).equal(2)
            const secondLink = links[1]
            cy.wrap(secondLink)
                .scrollIntoView({duration: 100})
            cy.wrap(secondLink).should("be.visible")
            cy.wrap(secondLink).invoke("attr","href").should("equal",givenLink)
            cy.wrap(secondLink).invoke("removeAttr","target").click()
        })
        cy.url().should("contain","docs.google.com")
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