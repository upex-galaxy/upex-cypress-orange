class UserManagementPage {
	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		searchButton: () => cy.get('.oxd-form [type="submit"]'), // or ('[type="submit"]')
		userRoleDrowpdown: () => cy.get('[class="oxd-select-text-input"]').first(),
		userRoleAdminDrowpdown: () => cy.get('[class="oxd-select-option"]'),
		recordsFound: () => cy.get('.orangehrm-container'),
	};

	fillusernameInput(username) {
		this.get.usernameInput().click().type(username);
	}

	clickSearchButton() {
		this.get.searchButton().click();
	}

	searchUserSuccessfully(username) {
		this.fillusernameInput(username);
		this.clickSearchButton();
	}

	searchByRandomUserRole() {
		this.get.userRoleDrowpdown().click();
		const randomUserRole = Math.floor(Math.random() * 2) + 1;
		this.get.userRoleAdminDrowpdown().eq(randomUserRole).click();
		this.clickSearchButton();
	}
}

export const userManagementPage = new UserManagementPage();
