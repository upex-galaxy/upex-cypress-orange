class Login {
	constructor() {
		this.usernameInput = () => cy.get('input[name="username"]');
		this.passwordInput = () => cy.get('input[name="password"]');
		this.loginButton = () => cy.get('button[type="submit"]');
	}

	validLogin(username, password) {
		this.usernameInput().type(username);
		this.passwordInput().type(password);
		this.loginButton().click();
	}
}

export const login = new Login();
