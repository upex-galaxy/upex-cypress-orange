class loginPage {
	get = {
		usernameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		submitBtn: () => cy.get('[type="submit"]'),
	};

	enterUserName(type) {
		this.get.usernameInput().type(type);
	}

	enterPassword(type) {
		this.get.passwordInput().type(type);
	}

	clickOnSubmit() {
		this.get.submitBtn().click();
	}
}

class RangePage {
	get = {
		adminBtn: () => cy.get('li[class^="oxd-main-menu-item"]').eq(0),
		addBtn: () => cy.get('[class$="oxd-button--secondary"]'),
		formAddUser: () => cy.get('[class$="orangehrm-main-title"]'),
		userRolePicker: () => cy.get('.oxd-select-wrapper').eq(0),
		listRole: () => cy.get('[role="option"]'),
		status: () => cy.get('.oxd-select-wrapper').eq(1),
		listStatus: () => cy.get('[role="option"]'),
		inputUserName: () => cy.get('[class="oxd-input oxd-input--active"]').eq(1),
		passwordForm: () => cy.get('[type="password"]').eq(0),
		confirmPasswForm: () => cy.get('[type="password"]').eq(1),
		empleeName: () => cy.get('[placeholder="Type for hints..."]'), //employee name
		listEmployeeName: () => cy.get('[role="listbox"]'),
		saveBtn: () => cy.get('[type="submit"]'),
		menssageSucess: () => cy.get('[class*="oxd-text--toast-message"]'),
		menssageError: () => cy.get('[class*="oxd-input-field-error-message"]'),
	};

	selectAdminBtn() {
		return this.get.adminBtn().click();
	}

	clickOnAddBtn() {
		return this.get.addBtn().click();
	}

	selectUserRole() {
		return this.get.userRolePicker().click();
	}

	selectAdminRole() {
		return this.get.listRole().eq(1).click();
	}

	clickOnStatus() {
		return this.get.status().click();
	}

	selectStatusEnabled() {
		return this.get.listStatus().eq(1).click();
	}

	typePassword(password) {
		return this.get.passwordForm().type(password);
	}
	typeConfirmPasssword(password) {
		return this.get.confirmPasswForm().type(password);
	}

	selectListNameEmployee() {
		return this.get.listEmployeeName().eq(0).click();
	}

	clickOnSaveBtn() {
		return this.get.saveBtn().click();
	}

	typeEmployeeName(name) {
		return this.get.empleeName().type(name);
	}

	typeUsername(name) {
		return this.get.inputUserName().type(name);
	}

	//invalid
	typeEmployeeInvalid(name) {
		return this.get.empleeName().type(name);
	}

	typeUserNameInvalid(name) {
		return this.get.inputUserName().type(name);
	}
	typePasswordInvalid(password) {
		return this.get.passwordForm().type(password);
	}
	typeConfirmPassInvalid(password) {
		return this.get.confirmPasswForm().type(password);
	}
}

export const login = new loginPage();
export const rangePage = new RangePage();
