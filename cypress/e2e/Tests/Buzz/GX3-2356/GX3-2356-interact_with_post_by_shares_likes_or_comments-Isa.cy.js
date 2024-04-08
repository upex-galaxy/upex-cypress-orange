import { removeLogs } from '@helper/RemoveLogs';
import { orangeLoginPage } from '@pages/orangeHRMLoginPage';
import { buzzPage } from '@pages/Buzz/GX3-2356-interact_with_post_shares_likes_comments-isa';
import { faker } from '@faker-js/faker';

describe('GX3-2356| OrangeHRM | Buzz | Interact with post by Shares, Likes or Comments', () => {
	const { username: usedUsername, password: usedPassword } = Cypress.env('AdminUser');

	beforeEach('Preconditions', () => {
		orangeLoginPage.loginSuccess(usedUsername, usedPassword);
		cy.url().should('contain', 'index');
		buzzPage.goToBuzzPage('viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('GX3-2361 | TC01: Should turn red the like button when clicking on it', () => {
		buzzPage.clickLikeButton();
		buzzPage.get.likeButtons().should('have.class', 'orangehrm-like-animation');
		buzzPage.get.isRedHeartVisible().should('be.visible');
	});

	it.skip('GX3-2361 | TC02: Should can comment successfully in a post when the Enter key is pressed in the textbox', () => {
		const randomComment = faker.lorem.sentence();
		buzzPage.writeYourComment({ comment: randomComment });
		buzzPage.get.commentInput().should('have.value', randomComment);
		buzzPage.get.commentWrapper().contains(randomComment).should('be.visible');

		// buzzPage.get.commentWrapper().then($commentWrapper => {
		// 	if ($commentWrapper.find(buzzPage.get.showMorePosts().length !== 0)) {
		// 		buzzPage.get.showMorePosts().click({ force: true });
		// 	}
		// 	buzzPage.get.commentInput().should('contain', randomComment);
		// });
	});

	it.skip('GX3-2361 | TC03: Should display a post when the "Share" button in the pop-up is clicked', () => {});
});

removeLogs();
