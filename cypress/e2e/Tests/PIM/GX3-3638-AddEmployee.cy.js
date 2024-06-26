import { Login } from '@pages/Login.Page.js';
import { PimPage } from '@pages/Buzz/PIM.page.js';
import json from 'cypress/fixtures/data/registreUser.json';
describe('US GX3-3638 | TS: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario', () => {
	beforeEach('Login to OrangeHRM', () => {
		cy.visit('/auth/login');
		Login.enterUsername('Admin');
		Login.enterPassword('admin123');
		Login.submitLogin();
		cy.url().should('include', 'dashboard');
	});
	it('3638 | TC1: Validate to add new a employee profile to the HR without credentials successfully.', () => {
		PimPage.typeFirstName();
	});
});
