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
		inputPassword: () => cy.get('input[type="password"]'),
	};
	AddUser() {
		this.get.AddEmployeeBtn().click();
		cy.url().should('includes', '/addEmployee');
		this.get.FirstNameBtn().type('test');
		this.get.MiddleNameBtn().type('test');
		this.get.LastNameBtn().type('test');
		this.get.EmployeeIDbtn().type('456123');
		this.get.SaveBtn().click();
	}
}

export const PimPage = new PIMpage();
