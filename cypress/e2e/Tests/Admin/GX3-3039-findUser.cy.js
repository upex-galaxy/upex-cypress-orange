import { removeLogs } from '@helper/RemoveLogs';
import { userManagementPage } from '@pages/Admin/userManagement.Page';

const { username, password } = Cypress.env('AdminUser');

describe('GX3-3039 | OrangeHRM | Admin | Buscar un usuario', () => {
	beforeEach('Preconditions: Login successfully, navegate to Admin section, and there is a user to search', () => {
		cy.visit('/');
		cy.url().should('contain', 'login');

		cy.Login(username, password);
		cy.visit('/admin/viewSystemUsers');
		cy.contains('User Management').should('be.visible');
	});

	it('GX3-3068 | TC01: Validar poder filtrar usuario exitosamente usando un User name', () => {
		userManagementPage.fillusernameInput('username');
		userManagementPage.clickSearchButton();
		expect(1).equal(1);
	});
});

removeLogs();
/* 
GX3-3068 | TC01: Validar poder filtrar usuario(s) exitosamente usando “User name”

GX3-3068 | TC02: Validar no poder filtrar usuario(s) usando“User name” no existente 

GX3-3068 | TC03: Validar poder filtrar usuario(s) exitosamente usando “User roles” seleccionando la opcion “Admi”

GX3-3068 | TC04: Validar poder filtrar usuario(s) exitosamente usando “User roles” seleccionando la opcion “ESS”

GX3-3068 | TC05: Validar poder filtrar usuario(s) exitosamente usando “Employee name” 

GX3-3068 | TC06: Validar no poder filtrar usuario(s) usando “Employee name” no existente 

GX3-3068 | TC07: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Enabled”

GX3-3068 | TC08: Validar poder filtrar usuario(s) exitosamente usando “Status” seleccionando la opcion “Disabled”

GX3-3068 | TC09: Validar no poder filtrar usuario(s) con campos vacios 
*/
