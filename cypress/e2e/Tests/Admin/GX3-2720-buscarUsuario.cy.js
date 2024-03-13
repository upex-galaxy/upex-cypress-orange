const { username, password } = Cypress.env('AdminUser');
import { removeLogs } from '@helper/RemoveLogs';
import { login } from '@pages/Admin/GX3-2720-Login.Page';
import { searchUser } from '@pages/Admin/GX3-2720-SearchUser.Page';
import * as the from '@data/GX3-2720-buscarUsuario.json';
removeLogs();
describe('GX3-2720 | [Automation] OrangeHRM | Admin | Buscar un usuario', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('/');
			cy.url().should('contain', 'orangehrmlive');
			login.validLogin(username, password);
		});
		cy.visit(the.endpoints.viewBuzzviewSystemUsers);
		cy.url().should('contain', the.endpoints.viewBuzzviewSystemUsers);
	});

	it('GX3-2720 | TC1: Validate search user by "Username', () => {
		searchUser.writeUsername(the.credentials.username);
		searchUser.clickSearchButton();
		searchUser.recordsFoundTable().should('include.text', the.credentials.username);
	});

	it('GX3-2720 | TC2: Validate filter users by "User Role".', () => {
		searchUser.selectAnOption();
		searchUser.recordsFoundTable().should('not.include.text', 'Admin');
	});

	it('GX3-2720 | TC3: Validate search  user by "Employee Name".', () => {
		searchUser.writeEmployeeName();
		searchUser.clickSearchButton();
		searchUser.validateEmployeeNameInRecordsFound();
	});
	it('GX3-2720 | TC4: Validate search non-existent username', () => {
		searchUser.writeUsername(the.credentials.nonExistenUsername);
		searchUser.clickSearchButton();
		searchUser.verifyMessageIsDisplayed('No records found');
	});
});
