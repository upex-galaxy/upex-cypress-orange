class Pim {
	// Agarrable de Cypress
	// Propiedades / Elementos:
	get = {
		pencilButton: () => cy.get('i[class$="bi-pencil-fill"]', { timeOut: 10000 }).eq(1),
		employeeIdInput: () => cy.get('input[class$="oxd-input--active"]').eq(1),
		searchButton: () => cy.get('button[type="submit"]'),
		employeeRow: () => cy.get('div[class="oxd-table-card"]').eq(0),
		//orangehrm-employee-list
	};

	enterEmployeeId(type) {
		this.get.employeeIdInput().type(type);
	}

	clickOnSearchButton() {
		this.get.searchButton().click({ force: true });
	}
}

export const pim = new Pim();
