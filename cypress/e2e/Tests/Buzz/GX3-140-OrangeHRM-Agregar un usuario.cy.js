import { removeLogs } from '@helper/RemoveLogs';
import { login, rangePage } from '../../../support/pages/Buzz/GX3-140-OrangeHRM-AgregarUsuario';
const { authLogin, dashboardIndex } = Cypress.env('endpoint');
const { username, password } = Cypress.env('AdminUser');
removeLogs();

import { faker } from '@faker-js/faker';

describe('GX3-140-OrangeHRM-Agregar un usuario', () => {
	beforeEach('Login to rangeHRM', () => {
		cy.visit('/');
		cy.url().should('contain', authLogin);
		login.enterUserName(username);
		login.enterPassword(password);
		login.clickOnSubmit();
		cy.url().should('contain', dashboardIndex);
	});
	it('GX3-140| TC001 Add user successfully', () => {
		const Username = faker.internet.userName();
		rangePage.selectAdminBtn();
		rangePage.get.adminBtn().should('contain', 'Admin');
		rangePage.clickOnAddBtn();
		//rangePage.get.formAddUser().should('contain', 'Add User');
		rangePage.selectUserRole();
		rangePage.selectAdminRole();
		rangePage.typeEmployeeName(); //employee name
		cy.wait(4000);
		rangePage.selectListNameEmployee();
		rangePage.get.inputUserName().type(Username);
		rangePage.clickOnStatus();
		rangePage.selectStatusEnabled();
		rangePage.typePassword();
		rangePage.typeConfirmPasssword();
		rangePage.clickOnSaveBtn();
		cy.wait(2000);
		rangePage.get.menssageSucess().should('contain', 'Successfully Saved');
		cy.contains(Username).should('contain', Username);
		cy.wait(2000);
	});

	it('GX3-140|TC002 Admin user cant register a user', () => {
		rangePage.selectAdminBtn();
		rangePage.get.adminBtn().should('contain', 'Admin');
		rangePage.clickOnAddBtn();

		rangePage.typeEmployeeInvalid();
		rangePage.typeUserNameInvalid();
		rangePage.typePasswordInvalid();
		rangePage.typeConfirmPassInvalid();
		rangePage.clickOnSaveBtn();
		cy.wait(5000);
		rangePage.get.menssageError().eq(0).should('contain.html', 'Required');
		rangePage.get.menssageError().eq(1).should('contain.html', 'Invalid');
		rangePage.get.menssageError().eq(2).should('contain.html', 'Required');
		rangePage.get.menssageError().eq(3).should('contain.html', 'Should be at least 5 characters');
		rangePage.get.menssageError().eq(4).should('contain.html', 'Should have at least 7 characters');
	});
});
