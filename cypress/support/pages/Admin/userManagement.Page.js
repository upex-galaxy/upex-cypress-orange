class UserManagementPage {
	constructor() {
		this.adminUsername = ''; // Variable para almacenar el nombre de usuario
	}

	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		searchButton: () => cy.get('.orangehrm-left-space'), //cy.get('.oxd-form [type="submit"]') or ('[type="submit"]')
		userRoleDrowpdown: () => cy.get('[class="oxd-select-text-input"]').first(),
		userRoleAdminDrowpdown: () => cy.get('[class="oxd-select-option"]'),
		statusDrowpdown: () => cy.get('[class="oxd-select-text-input"]').last(),
		statusOptionsList: () => cy.get('[class$="positon-bottom"] [class$="option"]'),
		recordsFoundContainer: () => cy.get('.orangehrm-container'),
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

	searchByUserRole() {
		this.get.userRoleDrowpdown().click();
		const randomUserRoleIndex = Math.floor(Math.random() * 2) + 1;
		this.get.userRoleAdminDrowpdown().eq(randomUserRoleIndex).click();
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
		this.searchByUserRole();

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

	searchByStatus() {
		this.get.statusDrowpdown().click();
		const randomStatusIndex = Math.floor(Math.random() * 2) + 1;
		this.statusIndex = randomStatusIndex;
		return this.get
			.statusOptionsList()
			.eq(randomStatusIndex)
			.invoke('text')
			.then(statusText => {
				cy.log('Status Selected: ' + statusText);
				this.get.statusOptionsList().eq(randomStatusIndex).click();
				cy.wait(2000);
				this.clickSearchButton();
			});
	}
}
export const userManagementPage = new UserManagementPage();
