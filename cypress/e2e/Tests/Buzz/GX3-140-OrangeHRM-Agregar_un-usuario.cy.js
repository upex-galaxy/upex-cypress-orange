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
		const emploeName = 'a';
		const randomPassword = faker.internet.password();

		rangePage.selectAdminBtn();
		rangePage.get.adminBtn().should('contain', 'Admin');
		rangePage.clickOnAddBtn();
		rangePage.get.formAddUser().should('contain', 'Add User');
		rangePage.selectUserRole();
		rangePage.selectAdminRole();
		rangePage.typeEmployeeName(emploeName);
		cy.wait(2000);
		rangePage.selectListNameEmployee();
		rangePage.typeUsername(Username);
		rangePage.clickOnStatus();
		rangePage.selectStatusEnabled();
		rangePage.typePassword(randomPassword);
		rangePage.get.passwordForm().should('have.value', randomPassword);
		rangePage.typeConfirmPasssword(randomPassword);
		rangePage.get.confirmPasswForm().should('have.value', randomPassword);
		rangePage.clickOnSaveBtn();
		rangePage.get.menssageSucess().should('contain', 'Successfully Saved');
		cy.contains(Username).should('contain', Username);
	});

	it.only('GX3-140|TC002 Admin user cant register a user', () => {
		const employeeInvalid = '-';
		const userNameInvalid = faker.internet.userName().slice(0, 4);
		const passwordInvalid = faker.internet.password().slice(0, 6);
		rangePage.selectAdminBtn();
		rangePage.get.adminBtn().should('contain', 'Admin');
		rangePage.clickOnAddBtn();
		rangePage.typeEmployeeInvalid(employeeInvalid);
		rangePage.typeUserNameInvalid(userNameInvalid);
		rangePage.typePasswordInvalid(passwordInvalid);
		rangePage.get.passwordForm().should('have.value', passwordInvalid);
		rangePage.typeConfirmPassInvalid(passwordInvalid);
		rangePage.get.confirmPasswForm().should('have.value', passwordInvalid);
		rangePage.clickOnSaveBtn();
		cy.wait(2000);
		rangePage.get.menssageError().eq(0).should('contain.text', 'Required');
		rangePage.get.menssageError().eq(1).should('contain.text', 'Invalid');
		rangePage.get.menssageError().eq(2).should('contain.text', 'Required');
		rangePage.get.menssageError().eq(3).should('contain.text', 'Should be at least 5 characters');
		rangePage.get.menssageError().eq(4).should('contain.text', 'Should have at least 7 characters');
	});
});
