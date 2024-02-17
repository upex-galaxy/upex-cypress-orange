class OrangeHRMLoginPage {
	get = {
		usernameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		loginButton: () => cy.get('[type="submit"]'),
	};

	enterUsername(username) {
		this.get.usernameInput().type(username);
	}

	enterPassword(password) {
		this.get.passwordInput().type(password);
	}

	submitLogin() {
		this.get.loginButton().click();
	}

	loginAndSubmit(username, password) {
		this.enterUsername(username);
		this.enterPassword(password);
		this.submitLogin();
	}

	loginSuccess(usedUsername, usedPassword) {
		cy.visit('/');
		this.loginAndSubmit(usedUsername, usedPassword);
	}
}
export const orangeLoginPage = new OrangeHRMLoginPage();
