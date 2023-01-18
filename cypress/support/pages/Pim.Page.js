class Pim{

    // Agarrable de Cypress
    // Propiedades / Elementos:
    get = {
        pencilButton: ()=> cy.get('i[class$="bi-pencil-fill"]', { timeOut: 10000 }).eq(2),
        /*passwordInput: ()=> cy.get('[name="password"]'),
        submitButton: ()=> cy.get('[type="submit"]'),
        forgotLink: ()=> cy.get('[class*="login-forgot"] p'),
        */
    }

    enterUsername(type){
        this.get.usernameInput().type(type)
    }

}

export const pim = new Pim; 