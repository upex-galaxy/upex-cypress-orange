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
		passwordForm: () => cy.get('[type="password"]').eq(0),
		confirmPasswForm: () => cy.get('[type="password"]').eq(1),
		listEmployeeName: () => cy.get('[role="listbox"]'),
		saveBtn: () => cy.get('[type="submit"]'),
		menssageSucess: () => cy.get('[class*="oxd-text--toast-message"]'),
	};

	selectAdminBtn() {
		this.get.adminBtn().click();
	}

	clickOnAddBtn() {
		this.get.addBtn().click();
	}

	selectUserRole() {
		this.get.userRolePicker().click();
	}

	selectAdminRole() {
		this.get.listRole().eq(1).click();
	}

	clickOnStatus() {
		this.get.status().click();
	}

	selectStatusEnabled() {
		this.get.listStatus().eq(1).click();
	}

	typePassword() {
		this.get.passwordForm().type('Peter2023');
	}
	typeConfirmPasssword() {
		this.get.confirmPasswForm().type('Peter2023');
	}

	selectListNameEmployee() {
		this.get.listEmployeeName().click();
	}

	clickOnSaveBtn() {
		this.get.saveBtn().click();
	}
}

export const login = new loginPage();
export const rangePage = new RangePage();
