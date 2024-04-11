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
		userManagementPage.get.recordsFound().should('be.visible');
	});

	it('GX3-3068 | TC05: Should successfully filter users by an existing "Employee Name"', () => {
		userManagementPage.searchByEmployeName(data.employeeName);
		cy.contains(data.recordFound).should('be.visible');
		userManagementPage.get.recordsFound().should('be.visible');
		userManagementPage.get.recordsFound().should('contain', data.employeeName);
	});

	it('GX3-3068 | TC06: Should not filter users with a non-existent "Employee Name"', () => {
		userManagementPage.searchBynonExistentEmployeName(data.nonExistentUsername);
		userManagementPage.get.invalidEmployeeNameMessage().should('be.visible');
	});

	// it('GX3-3068 | TC07: ', () => {});
	// it('', () => { });
});

removeLogs();
/*
	GX3-3068 | TC07: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Enabled”

	GX3-3068 | TC08: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Disabled”

	GX3-3068 | TC09: Validar no poder filtrar usuario(s) con campos vacios 
	*/
