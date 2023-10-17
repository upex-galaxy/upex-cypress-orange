import { buzzMenu } from '../../../support/pages/Buzz/GX-38134-sharesLikeComments';
const userName = 'Admin';
const password = 'admin123';
import { faker } from '@faker-js/faker';
const randomName = faker.name.firstName();
describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.url('contain', 'login');
		cy.Login(userName, password);
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('38135 | TC1: Validar la funcionalidad del botón Shares', () => {
		buzzMenu.clickSharedButton('post');
		buzzMenu.get.postSuccess().should('have.length', 1).and('be.visible');
		buzzMenu.clickSharedButton('cancel');
		buzzMenu.get.lateralMenu().last().should('be.visible');
	});
	it('38135 | TC2: Validar la funcionalidad del botón Like', () => {
		buzzMenu.clickLikeButton();
		buzzMenu.get.likeButton().should('have.class', 'orangehrm-like-animation');
	});
	it('38135 | TC3: Validar la funcionalidad del botón Comment...', () => {
		buzzMenu.clickCommentButtonAndType(randomName);
		buzzMenu.get.containerBoxInput().then($box => {
			if ($box.length === 4) {
				buzzMenu.get.showMoreText().click({ force: true });
				buzzMenu.get.commentBox().should('have.text', randomName);
			} else {
				buzzMenu.get.commentBox().should('have.text', randomName);
			}
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
