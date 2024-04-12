class UserManagementPage {
	constructor() {
		this.adminUsername = ''; // Variable para almacenar el nombre de usuario
	}

	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		// searchButton: () => cy.get('.oxd-form [type="submit"]'), // or ('[type="submit"]')
		searchButton: () => cy.get('.orangehrm-left-space'),
		userRoleDrowpdown: () => cy.get('[class="oxd-select-text-input"]').first(),
		userRoleAdminDrowpdown: () => cy.get('[class="oxd-select-option"]'),
		recordsFound: () => cy.get('.orangehrm-container'),
		employeeNameInput: () => cy.get('[class$="autocomplete-text-input--active"]'),
		autocompletedEmployeeNameList: () => cy.get('.oxd-autocomplete-dropdown'),
		invalidEmployeeNameMessage: () => cy.get('[class*="error-message"]'),

		adminUserPresentName: () => cy.get('[class="oxd-table-cell oxd-padding-cell"]'),
	};

	fillusernameInput(username) {
		this.get.usernameInput().click().type(username);
	}

	clickSearchButton() {
		this.get.searchButton().click({ force: true });
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

	getNameOfExistentUser() {
		return this.get
			.adminUserPresentName()
			.eq(3)
			.children()
			.invoke('text')
			.then(text => {
				this.adminUsername = text; // Almacenar el nombre de usuario en la variable
				cy.log('***** El username es: ' + this.adminUsername);
			});
	}

	searchByEmployeName() {
		this.searchByRandomUserRole();

		return this.getNameOfExistentUser().then(() => {
			const usernameToSearch = this.adminUsername;
			this.get.employeeNameInput().click().type(usernameToSearch);
			this.get.autocompletedEmployeeNameList().first().wait(2000).click();
			this.clickSearchButton();
		});
	}

	searchBynonExistentEmployeName(employeeName) {
		this.get.employeeNameInput().click().type(employeeName);
		this.clickSearchButton();
	}
}

export const userManagementPage = new UserManagementPage();
