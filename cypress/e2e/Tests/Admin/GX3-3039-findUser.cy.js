import { removeLogs } from '@helper/RemoveLogs';
import { userManagementPage } from '@pages/Admin/userManagement.Page';
import data from '../../../fixtures/data/gx3-3039-findUser.json';

const { username, password } = Cypress.env('AdminUser');

describe('GX3-3039 | OrangeHRM | Admin | Buscar un usuario', () => {
	beforeEach('Preconditions: Login successfully, navegate to Admin section, and there is a user to search', () => {
		cy.visit('/');
		cy.url().should('contain', 'login');

		cy.Login(username, password);
		cy.visit('/admin/viewSystemUsers');
		cy.contains(data.userManagement).should('be.visible');
	});

	it('GX3-3068 | TC01: Should successfully filter users by an existing username', () => {
		userManagementPage.searchUserSuccessfully(username);
		cy.contains(data.recordFound).should('be.visible');
	});

	it('GX3-3068 | TC02: Should not filter users with a non-existent "Username"', () => {
		userManagementPage.searchUserSuccessfully(data.username);
		cy.contains(data.noRecordsFound).should('be.visible');
	});

	it('GX3-3068 | TC03: Should display all users when the search"s fields are empty', () => {
		userManagementPage.clickSearchButton();
		cy.contains(data.recordsFound).should('be.visible');
	});

	it('GX3-3068 | TC04: Should successfully filter users by “User role” options', () => {
		userManagementPage.searchByRandomUserRole();
		cy.contains(data.recordsFound).should('be.visible');
		userManagementPage.get.recordsFoundContainer().should('be.visible');
	});

	//TODO: Me dio trabajo!!!!!!!!!!!!
	//TODO: Steps
	//TODO: (1) Search an existing employee by role, (2) save the employee's name, (3) search the employee by that name
	it('GX3-3068 | TC05: Should successfully filter users by an existing "Employee Name"', () => {
		userManagementPage.searchByEmployeName();
		cy.contains(data.recordFound).should('be.visible');
		cy.wait(8000);
		userManagementPage.get
			.recordsFoundContainer()
			.should('be.visible')
			.then($element => {
				const recordsText = $element.text();
				expect(recordsText).to.contain(userManagementPage.adminUsername);
			});
	});

	it('GX3-3068 | TC06: Should not filter users with a non-existent "Employee Name"', () => {
		userManagementPage.searchBynonExistentEmployeName(data.nonExistentUsername);
		userManagementPage.get.invalidEmployeeNameMessage().should('be.visible');
	});

	it('GX3-3068 | TC07:  Should successfully filter users by "Status"', () => {});

	// it('GX3-3068 | TC07: ', () => {});
	// it('', () => { });
});

removeLogs();
/*
	GX3-3068 | TC07: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Enabled”

	GX3-3068 | TC08: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Disabled”
	*/
