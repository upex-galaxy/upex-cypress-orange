class UserManagementPage {
	get = {
		usernameInput: () => cy.get('.oxd-form .oxd-input'),
		searchButton: () => cy.get('.oxd-form [type="submit"]'), // or ('[type="submit"]')
		userRoleDrowpdown: () => cy.get('[class="oxd-select-text-input"]').first(),
		userRoleAdminDrowpdown: () => cy.get('[class="oxd-select-option"]'),
		recordsFound: () => cy.get('.orangehrm-container'),
		employeeNameInput: () => cy.get('[class$="autocomplete-text-input--active"]'),
		autocompletedEmployeeNameList: () => cy.get('[class="oxd-autocomplete-option"] span'),
		invalidEmployeeNameMessage: () => cy.get('[class*="error-message"]'),
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

	//! No pude hacerse random porque el SUT está en constante uso, es muy inistable, se eliminan los usuarios.
	// getRandomEmployeeName() {
	// 	const validEmployeeNameList = [
	// 		'Nem Fe Big',
	// 		'Angelica Ellis Rice',
	// 		'Hayden Terry',
	// 		'Alyson Wyman',
	// 		'Gary Von',
	// 		'Jerrold Cruickshank',
	// 		'Shu Bechtelar',
	// 		'FName LName',
	// 	];
	// 	const employeeNameListLength = validEmployeeNameList.length;
	// 	const selectedEmployeeNameIndex = Math.floor(Math.random() * employeeNameListLength);
	// 	const employeeName = validEmployeeNameList[selectedEmployeeNameIndex];
	// 	return employeeName;
	// }

	// clickAndWriteEmployeName() {
	// 	this.get.employeeNameInput().click().type('Isa');
	// 	const randomEmployeeName = this.getRandomEmployeeName();
	// 	this.get.employeeNameInput().click().type(randomEmployeeName);
	// }
	//------------------------------------------------------------------------------------

	searchByEmployeName(employeeName) {
		this.get.employeeNameInput().click().type(employeeName);
		this.get.autocompletedEmployeeNameList().first().click();
		this.clickSearchButton();
	}

	searchBynonExistentEmployeName(employeeName) {
		this.get.employeeNameInput().click().type(employeeName);
		this.clickSearchButton();
	}
}

export const userManagementPage = new UserManagementPage();
