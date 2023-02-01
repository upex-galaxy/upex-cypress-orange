class employeeListPage{
    tab = {
        table:()=> cy.get('[role="table"]'),
        rowGroup:()=> cy.get('[role="rowgroup"]'),
        row:()=> cy.get('[role="row"]'),
        cell:()=> cy.get('[role="cell"]')
    }

    getRandomEmployee(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        Cypress.env("getRandomInt1",getRandomInt(0,36))

        this.tab.rowGroup().children().eq(Cypress.env("getRandomInt1")).within(()=>{
            this.tab.row().within(()=>{
                this.tab.cell().eq(2).children().then((inside)=>{
                    const firstName = inside.text()
                    Cypress.env('firstName', firstName)
                })
                this.tab.cell().eq(3).children().then((inside)=>{
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
    }

    getMofiedEmployee(){
        this.tab.row().then(()=>{
            this.tab.cell().contains(Cypress.env("randomFirstName"))
            this.tab.cell().contains(Cypress.env("randomLastName"))
        })
    }
}

export const EmployeeListPage = new employeeListPage();

