describe("✅OrangeHRM | Account | Recuperar contraseña olvidada por usuario",()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode")
    })

    it("261 | TC1: Validar recuperación de contraseña exitosa",()=>{
        cy.get('[name="username"]').type("kenny")
    })

    it("261 | TC2: Validar no poder recuperar la contraseña cuando username es nulo",()=>{

    })

    it("261 | TC3: Validar no poder recuperar la contraseña cuando username no matchea",()=>{

    })

    it("261 | TC4: Validar ir a pagina de log in con el botón cancelar",()=>{

    })

    
})
