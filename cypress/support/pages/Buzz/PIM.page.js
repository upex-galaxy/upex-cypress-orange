class PIMpage {
	get = {
		ConfigurationBtn: () => cy.get('[class*="nav-tab-item"]').contains('Configuration'),
		EmployeeLIstBtn: () => cy.get('[class*="nav-tab-item"]').contains('Employee List'),
		AddEmployeeBtn: () => cy.get('[class*="nav-tab-item"]').contains('Add Employee'),
		ReportBtn: () => cy.get('[class*="nav-tab-item"]').contains('Reports'),
		FirstNameBtn: () => cy.get('input[class*="firstname"]'),
		MiddleNameBtn: () => cy.get('input[class*="middlename"]'),
		LastNameBtn: () => cy.get('input[class*="lastname"]'),
		EmployeeIDbtn: () => cy.get('input[class*="input--active"]').eq(3),
		loginDetailsBtn: () => cy.get('input[type="checkbox"]'),
		SaveBtn: () => cy.get('button[type="submit"]'),
		MsgSuccesful: () => cy.get('[class*="enter-active"]'),
		inputUsername: () => cy.get('input[class*="input--active"]').eq(4),
		inputPassword: () => cy.get('input[type="password"]'),
		inputConfirmPassword: () => cy.get('input[type="password"]').eq(1),
	};
	typeFirstName(name) {
		this.get.FirstNameBtn().type(name);
	}
	typeMiddleName(name) {
		this.get.MiddleNameBtn().type(name);
	}
	typeLastName(name) {
		this.get.LastNameBtn().type(name);
	}
	typeEmployeeID(data) {
		this.get.EmployeeIDbtn().type(data);
	}

	typeUsername(username) {
		this.get.inputUsername().type(username);
	}

	typePassword(password) {
		this.get.inputPassword().type(password);
	}
}

export const PimPage = new PIMpage();
