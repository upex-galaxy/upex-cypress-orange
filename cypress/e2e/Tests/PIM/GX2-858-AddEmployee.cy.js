import { logs } from '@helper/RemoveLogs.js'

describe('US GX2-858 | TS: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario',()=>{

    const {username, password} = Cypress.env('AdminUser')
    const {addEmployeeInPim, viewEmployee} = Cypress.env('endpoint')
    beforeEach(()=>{
        cy.Login(username,password)
    })

    it('859 | TC1: Validate to add new a employee profile to the HR successfully.',()=>{

        cy.visit(addEmployeeInPim)
        cy.get('input[name="firstName"]').type('Ely{enter}')
        cy.get('input[name="middleName"]').type('Saitest{enter}')
        cy.get('input[name="lastName"]').type('Pikachu{enter}')

        cy.visit(viewEmployee)

        cy.get('input[placeholder*="Type for hints"]').first().type('Ely')

        // Assert is Done XD
    })
})

logs.removeLogs()