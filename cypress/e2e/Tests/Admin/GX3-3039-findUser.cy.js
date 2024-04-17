import { removeLogs } from '@helper/RemoveLogs';
import { userManagementPage } from '@pages/Admin/userManagement.Page';
import data from '../../../fixtures/data/gx3-3039-findUser.json';

const { username, password } = Cypress.env('AdminUser');

describe('GX3-3039 | OrangeHRM | Admin | Buscar un usuario', () => {
	beforeEach('PRC: Login successfully, navegate to Admin section, and there is a user to search', () => {
		cy.visit('/');
		cy.url().should('contain', 'login');

		cy.Login(username, password);
		cy.visit('/admin/viewSystemUsers');
		cy.url().should('contain', 'viewSystemUsers');
		//! La siguiente assertion falla cuando el navegador cambia a idioma español... a veces ocurre
		//! cy.contains(data.userManagement).should('be.visible');
	});

	it('GX3-3068 | TC01: Should successfully filter users by an existing "Username"', () => {
		userManagementPage.searchUserSuccessfully(username);
		cy.contains(data.recordFound).should('be.visible');
		userManagementPage.get.searchResultTable().contains(username);
	});

	it.skip('GX3-3068 | TC02: Should not filter users with a non-existent "Username"', () => {
		userManagementPage.searchUserSuccessfully(data.nonExistentUsername);
		cy.contains(data.noRecordsFound).should('be.visible');
		userManagementPage.get.searchResultTable().should('be.empty');
	});

	//! Filtra mal: cuando se selecciona el rol Admin, a veces se muetran usuarios con rol ESS
	it('GX3-3068 | TC03: Should successfully filter users by “User role” options', () => {
		userManagementPage.searchByUserRole();
		cy.contains(data.recordFound).should('be.visible');
		userManagementPage.get.recordsFoundContainer().should('be.visible');
	});

	it('GX3-3068 | TC04: Should successfully filter users by an existing "Employee Name"', () => {
		//TODO: Steps (1) Search an existing employee by role, (2) save the employee's name, (3) search the employee by its name
		userManagementPage.searchByEmployeName();

		userManagementPage.get.searchResultTable().then($table => {
			const recordsText = $table.text();
			if (recordsText !== '') {
				expect(recordsText).to.contain(userManagementPage.adminUsername);
				cy.contains(data.recordFound).should('be.visible');
			} else {
				cy.contains(data.noRecordsFound).should('be.visible');
				cy.log('-->> There not exist an user with the name: ' + userManagementPage.adminUsername);
			}
		});
	});

	it('GX3-3068 | TC05: Should not filter users with a non-existent "Employee Name"', () => {
		userManagementPage.searchBynonExistentEmployeName(data.nonExistentEmployeeName);
		userManagementPage.get.invalidEmployeeNameMessage().should('be.visible');
	});

	it('GX3-3068 | TC06: Should successfully filter users by "Status"', () => {
		userManagementPage.searchByStatus().then(statusSelected => {
			userManagementPage.get
				.searchResultTable()
				.invoke('text')
				.then(tableText => {
					const statusToCheck = statusSelected === 'Enabled' ? 'Disabled' : 'Enabled'; // ? :

					//trim() - Elimina los espacios en blanco al principio y al final de una cadena de texto
					if (tableText.trim() !== '') {
						expect(tableText).not.to.contain(statusToCheck);
					} else {
						cy.contains(data.noRecordsFound).should('be.visible');
						cy.log(`There are no users with status: ${statusSelected}`);
					}
				});
		});
	});

	it('GX3-3068 | TC07: Should display all users when the search"s fields are empty', () => {
		userManagementPage.clickSearchButton();
		cy.contains(data.recordFound).should('be.visible');
	});
});
removeLogs();
