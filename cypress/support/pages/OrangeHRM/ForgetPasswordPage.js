class ForgetPasswordPage {
    constructor() {
        this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    }

    elements = {
        "username_input": () => cy.get('input[name="username"]'),
        "resetPassword_button": () => cy.get('button[type="submit"]'),
        "cancel_button": () => cy.get('button[type="button"]'),
        "required_span": () => cy.get('span'),
        "successfullResetPasswordMessage": () => cy.get('.oxd-text--h6')
    }

    visit() {
        cy.visit(this.url)
    }

    typeUsername(username) {
        this.elements.username_input().type(username)
    }

}


export const ForgetPassword = new ForgetPasswordPage;