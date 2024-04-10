class UserManagementPage {
	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		searchButton: () => cy.get('.oxd-form [type="submit"]'), // or ('[type="submit"]')
	};

	fillusernameInput(username) {
		this.get.usernameInput().click().type(username);
	}

	clickSearchButton() {
		this.get.searchButton().click({ force: true });
	}
}

export const userManagementPage = new UserManagementPage();
