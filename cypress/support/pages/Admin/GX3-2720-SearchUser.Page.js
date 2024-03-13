class SearchUser {
	constructor() {
		this.userNameInput = () => cy.get('div.oxd-input-group input').first();
		this.searchButton = () => cy.get('button[type="submit"]');
		this.recordsFoundTable = () => cy.get('.oxd-table-cell');
		this.roleSelector = () => cy.get('div.oxd-select-text ').first();
		this.employeeNameInput = () => cy.get('div.oxd-input-group input').last();
		this.employeeData = () => cy.get('span.oxd-userdropdown-tab');
	}

	writeUsername(username) {
		this.userNameInput().type(username);
	}

	clickSearchButton() {
		this.searchButton().click({ force: true });
	}

	selectAnOption() {
		this.roleSelector().click();
		cy.contains('ESS').click();
		this.clickSearchButton();
	}
	writeEmployeeName() {
		this.employeeData()
			.invoke('text')
			.then(text => {
				const name = text;
				this.employeeNameInput().type(name.trim());
			});
	}
	validateEmployeeNameInRecordsFound() {
		this.employeeData()
			.invoke('text')
			.then(employeeName => {
				this.recordsFoundTable().should('contain.text', employeeName);
			});
	}

	verifyMessageIsDisplayed(expectedMessage) {
		cy.on('window:alert', str => {
			expect(str).to.equal(expectedMessage);
		});
	}
}

export const searchUser = new SearchUser();
