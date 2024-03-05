import { login } from '@pages/Buzz/GX3-2493-login.Page';
import { post } from '@pages/Buzz/GX3-2493.post.Page';
const { username, password } = Cypress.env('AdminUser');
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX3-2493 | [Automation] OrangeHRM | Buzz | Delete a post', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('/');
			cy.url().should('contain', 'orangehrmlive');
			login.validLogin(username, password);
		});
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('GX3-2493 | TC1: Validate  admin tries to delete a post', () => {
		post.selectRandomPostAndClickDeleteLink();

		post.verifyPopUpIsShown();
		post.verifyDeleteButtonIsVisible();
		post.verifyCancelButtonIsVisible();
	});

	it('GX3-2493 | TC2: Validate delete a post', () => {
		post.selectRandomPostAndClickDeleteLink();

		post.verifyPopUpIsShown();
		post.clickDeleteButton();
		post.verifySuccessMessageIsDisplayed('Successfully Deleted');
		post.verifyPostNotVisible();
	});

	it('GX3-2493 | TC3: Validate cancel deleting a post', () => {
		post.selectRandomPostAndClickDeleteLink();
		post.clickCancelButton();
		post.verifyPostIsVisible();
	});
});
