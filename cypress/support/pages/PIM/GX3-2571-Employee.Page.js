class NewEmployee {
	constructor() {
		this.inputFirstName = () => cy.get('input[name="firstName"]');
		this.inputMiddleName = () => cy.get('input[name="middleName"]');
		this.inputLastName = () => cy.get('input[name="lastName"]');
		this.inputUnploaProfilePhoto = () => cy.get('input[type="file"]');
		this.inputId = () => cy.get('div.oxd-grid-item input');
		this.saveButton = () => cy.get('button[type="submit"]');
		this.employeeFullname = () => cy.get('div.orangehrm-edit-employee-name h6');
		this.employeeListButton = () => cy.contains('a', 'Employee List');
		this.InputEmployeeName = () => cy.get('input[placeholder="Type for hints..."]');
		this.searchButton = () => cy.get('button[type="submit"]');
		this.switchCreateLoginDetails = () => cy.get('span.oxd-switch-input--active');
		this.inputUsername = () => cy.get('.oxd-input-group input[autocomplete="off"]');
		this.inputPassword = () => cy.get('input[type="password"]');
		this.inputUsernameUserManagement = () => cy.get('div.oxd-input-group input');
		this.errorMessageText = () => cy.get(' .oxd-input-group .oxd-text');
	}
	unploadProfilePhoto() {
		const filePath = 'cypress/fixtures/images/upexlogo.png';
		this.inputUnploaProfilePhoto().selectFile(filePath, { force: true });
	}

	clickSaveButton() {
		this.saveButton().click({ force: true });
	}
	verifySuccessMessageIsDisplayed(message) {
		cy.on('window:alert', str => {
			expect(str).to.equal(message);
		});
	}

	clickEmployeeList() {
		this.employeeListButton().click();
	}

	searchEmployee(name) {
		this.InputEmployeeName().first().type(name);
		this.searchButton().click({ force: true });
	}

	clickSwitch() {
		this.switchCreateLoginDetails().click();
	}

	searchEmployeeInAdmin(value) {
		newEmployee.inputUsernameUserManagement().first().type(value);
		newEmployee.searchButton().click();
	}
}
export const newEmployee = new NewEmployee();
