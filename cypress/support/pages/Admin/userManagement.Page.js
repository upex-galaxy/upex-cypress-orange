class UserManagementPage {
	constructor() {
		this.adminUsername = ''; // Variable para almacenar el nombre de usuario
	}

	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		searchButton: () => cy.get('.orangehrm-left-space'), //cy.get('.oxd-form [type="submit"]') or ('[type="submit"]')
		userRoleDrowpdown: () => cy.get('[class="oxd-select-text-input"]').first(),
		statusDrowpdown: () => cy.get('[class="oxd-select-text-input"]').last(),
		userRoleAdminDrowpdown: () => cy.get('[class="oxd-select-option"]'),
		// statusOptionsList: () => cy.get('[class$="positon-bottom"] [class$="option"]'),
		textStatusOptions: () => cy.get('[class="oxd-select-dropdown --positon-bottom"] span'),
		searchResultTable: () => cy.get('[class="oxd-table-body"]'),
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
			this.get.autocompletedEmployeeNameList().last().wait(2000).click();
			this.clickSearchButton();
		});
	}

	searchBynonExistentEmployeName(employeeName) {
		this.get.employeeNameInput().click().type(employeeName);
		cy.wait(1000);
		this.clickSearchButton();
	}

	//=====================================================
	selectRandomStatus() {
		this.get.statusDrowpdown().click();
		const randomStatusIndex = Math.floor(Math.random() * 2);
		return randomStatusIndex;
	}

	searchByStatus() {
		const index = this.selectRandomStatus();
		return this.get
			.textStatusOptions()
			.eq(index)
			.invoke('text')
			.then(selectedOptionText => {
				cy.log('--->> Status Selected: ' + selectedOptionText);
				this.get.textStatusOptions().eq(index).click();
				cy.wait(2000);
				this.clickSearchButton();
				cy.wait(1000);
				return cy.wrap(selectedOptionText);
			});
	}
}
export const userManagementPage = new UserManagementPage();
