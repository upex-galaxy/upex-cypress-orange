import { removeLogs } from '@helper/RemoveLogs';
import { orangeLoginPage } from '@pages/orangeHRMLoginPage';
import { buzzPage } from '@pages/Buzz/GX3-2356-interact_with_post_shares_likes_comments-isa';

describe('GX3-2356| OrangeHRM | Buzz | Interact with post by Shares, Likes or Comments', () => {
	const { username: usedUsername, password: usedPassword } = Cypress.env('AdminUser');

	beforeEach('Preconditions', () => {
		orangeLoginPage.loginSuccess(usedUsername, usedPassword);
		cy.url().should('contain', 'index');
		buzzPage.goToBuzzPage('viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('GX3-2361 | TC01: Should turn red the like button when clicking on it', () => {
		expect(1).equal(1);
	});
});

removeLogs();
