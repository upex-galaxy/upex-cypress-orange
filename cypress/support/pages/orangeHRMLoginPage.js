// class OrangeHRMLoginPage {
// 	get = {
// 		usernameInput: () => cy.get('[name="username"]'),
// 		passwordInput: () => cy.get('[name="password"]'),
// 		loginButton: () => cy.get('[type="submit"]'),
//     };

//     enterUsername(username) {
// 		this.usernameInput().type(username);
// 	}

// 	enterPassword(password) {
// 		this.passwordInput().type(password);
// 	}

// 	submitLogin() {
// 		this.loginButton().click();
// 	}

// 	loginAndSubmit(username, password) {
// 		this.enterUsername(username);
// 		this.enterPassword(password);
// 		this.submitLogin();
// 	}

// 	loginSuccess(){
//         cy.visit('/');
// 		this.loginAndSubmit(usedUsername, usedPassword);
// 	}

//     export const orangeLoginPage = new OrangeHRMLoginPage();
// }
