class PIMpage {
	get = {
		ConfigurationBtn: () => cy.get('[class*="nav-tab-item"]').contains('Configuration'),
		EmployeeLIstBtn: () => cy.get('[class*="nav-tab-item"]').contains('Employee List'),
		AddEmployeeBtn: () => cy.get('[class*="nav-tab-item"]').contains('Add Employee'),
		ReportBtn: () => cy.get('[class*="nav-tab-item"]').contains('Reports'),
		FirstNameBtn: () => cy.get('input[class*="firstname"]'),
		MiddleNameBtn: () => cy.get('input[class*="middlename"]'),
		LastNameBtn: () => cy.get('input[class*="lastname"]'),
		EmployeeIDbtn: () => cy.get('input[class*="input--active"]').eq(4),
		SaveBtn: () => cy.get('button[type="submit"]'),
	};
}
