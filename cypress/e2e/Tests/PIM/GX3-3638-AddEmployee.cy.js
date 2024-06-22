import { menuOrange } from '@pages/Menu.Page';
import { PimPage } from '@pages/Buzz/PIM.page';
import { login } from '@pages/Login.Page';
import userdata from '../../../fixtures/data/registreUser.json';
describe('US GX3-3638 | TS: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario', () => {
	beforeEach('Login to OrangeHRM', () => {
		cy.visit('/auth/login');
		login.enterUsername('Admin');
		login.enterPassword('admin123');
		login.submitLogin();
		cy.url().should('include', 'dashboard');
	});
	it('3638 | TC1: Validate to add new a employee profile to the HR without credentials successfully.', () => {
		menuOrange.GoToPIM();
		PimPage.AddUser();
		cy.get('[class*="enter-active"]').should('be.visible').and('have.css', 'color', 'rgb(255, 255, 255)');
		cy.url().should('include', 'viewPersonalDetails/empNumber/');
	});
});
