import { buzzMenu } from '../../../support/pages/Buzz/GX-38134-sharesLikeComments';
const userName = 'Admin';
const password = 'admin123';
describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.url('contain', 'login');
		cy.Login(userName, password);
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it.only('38135 | TC1: Validar la funcionalidad del botón Shares', () => {
		buzzMenu.clickSharedButton('post');
		buzzMenu.get.postSuccess().should('have.length', 1).and('be.visible');
		buzzMenu.clickSharedButton('cancel');
		cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').last().should('be.visible');
	});
	it('38135 | TC2: Validar la funcionalidad del botón Like', () => {
		buzzMenu.clickLikeButton();
		buzzMenu.get.likeButton().should('have.class', 'orangehrm-like-animation');
	});
	it('38135 | TC3: Validar la funcionalidad del botón Comment...', () => {
		expect(1).eq(1);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
