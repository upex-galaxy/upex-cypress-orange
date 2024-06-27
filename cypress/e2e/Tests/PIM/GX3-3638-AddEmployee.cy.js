import { PimPage } from '@pages/Buzz/PIM.page.js';
import { menuOrange } from '@pages/Menu.Page';
import { json } from '@data/';
describe('US GX3-3638 | TS: ✅OrangeHRM | PIM | Agregar un nuevo empleado con usuario', () => {
	const { username, password } = Cypress.env('AdminUser');
	const { dashboardIndex, viewEmployee } = Cypress.env('endpoint');
	beforeEach('Login to OrangeHRM', () => {
		cy.Login(username, password);
	});
	it('3638 | TC1: Validate to add new a employee profile to the HR without credentials successfully.', () => {
		cy.fixture('data/registreUser').then(data => {
			cy.visit(dashboardIndex);
			menuOrange.GoToPIM();
			PimPage.AddEmployeeBtn();
			PimPage.typeFirstName();
		});
	});
});
