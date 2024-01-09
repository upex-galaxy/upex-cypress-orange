import { removeLogs } from '@helper/RemoveLogs';
import { login, rangePage } from '../../../support/pages/Buzz/GX3-140-OrangeHRM-AgregarUsuario';
const { authLogin, dashboardIndex } = Cypress.env('endpoint');
const { username, password } = Cypress.env('AdminUser');
removeLogs();

describe('GX3-140-OrangeHRM-Agregar un usuario', () => {
	beforeEach('Login to rangeHRM', () => {
		cy.visit('/');
		cy.url().should('contain', authLogin);
		login.enterUserName(username);
		login.enterPassword(password);
		login.clickOnSubmit();
		cy.url().should('contain', dashboardIndex);
	});

	it.only('GX3-140| TC001 Agregar un usuario con exito', () => {
		rangePage.selectAdminBtn();
		rangePage.get.adminBtn().should('contain', 'Admin');
		rangePage.clickOnAddBtn();
		rangePage.get.formAddUser().should('contain', 'Add User');
		rangePage.selectUserRole();
		rangePage.selectAdminRole();
		cy.get('[placeholder="Type for hints..."]').type('Test 53 Boy');
		cy.wait(4000);
		rangePage.selectListNameEmployee();
		cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('Pepe2022-2');
		rangePage.clickOnStatus();
		rangePage.selectStatusEnabled();
		rangePage.typePassword();
		rangePage.typeConfirmPasssword();
		rangePage.clickOnSaveBtn();
		cy.wait(2000);
		rangePage.get.menssageSucess().should('contain', 'Successfully Saved');
	});

	//it('', () => { })

	//it(()=>{})
});
