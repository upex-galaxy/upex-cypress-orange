describe("✅OrangeHRM | Account | Recuperar contraseña olvidada por usuario",()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode")
        cy.url().should("contain","request")
    })

    it.only("261 | TC1: Validar poder recuperar contraseña correctamente",()=>{
        cy.get('[name="username"]').type("kenny")
        cy.get("button[type='submit']").click()
        cy.get("h6").contains("Reset Password link sent successfully").should("be.visible")
    })

    it("261 | TC2: Validar NO poder recuperar la contraseña cuando el campo username esta vacío",()=>{
        cy.get('[name="username"]').type("")
        cy.get("button[type='submit']").click()
        cy.get("h6").should("contain","Reset Password")
    })

    it("261 | TC3: Validar NO poder recuperar la contraseña cuando el campo username no es válido",()=>{
        cy.get('[name="username"]').type("kenny1$")
        cy.get("button[type='submit']").click()
        cy.url().should("not.contain", "requestPasswordResetCode")
    })

    it("261 | TC4: Validar poder ir a la pagina de login cuando se preciona el botón cancelar",()=>{
        cy.get("button[type='button']").click()
        cy.url().should("eql","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})