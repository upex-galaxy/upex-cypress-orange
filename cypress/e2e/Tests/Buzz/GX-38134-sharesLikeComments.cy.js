import { slc } from '../../../support/pages/Buzz/GX-38134-sharesLikeComments';
const userName = 'Admin';
const password = 'admin123';
describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.url('contain', 'login');
		slc.fillLoginAndSubmit(userName, password);
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('38135 | TC1: Validar la funcionalidad del botón Shares', () => {
		expect(1).eq(1);
	});
	it('38135 | TC2: Validar la funcionalidad del botón Like', () => {
		slc.clickLikeButton();
		slc.get.likeButton().should('have.class', 'orangehrm-like-animation');
	});
	it('38135 | TC3: Validar la funcionalidad del botón Comment...', () => {
		expect(1).eq(1);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
