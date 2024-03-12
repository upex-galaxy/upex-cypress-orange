const { username, password } = Cypress.env('AdminUser');
import { login } from '@pages/Buzz/GX3-2647-Login.Page';
import { removeLogs } from '@helper/RemoveLogs';
import { shareLikeComment } from '@pages/Buzz/GX3-2647-SharesLikesComments.Page';
removeLogs();

describe('GX3-2647 | OrangeHRM | Buzz | Interact with post by Shares, Likes or Comments', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('/');
			cy.url().should('contain', 'orangehrmlive');
			login.validLogin(username, password);
		});
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('GX3-2647 | TC1: Validate user Shares a post', () => {
		shareLikeComment.clickShareButton();
		shareLikeComment.popUp().should('be.visible');
		shareLikeComment.clickShareButtonPopUp();

		cy.wait('@getPost').then(interception => {
			expect(interception.response.statusCode).to.equal(200);
		});

		//Me gustaría saber si puedo agregar como un metodo en mi clase para que se vea más limpio o así está bien?
		shareLikeComment
			.shareCounter()
			.first()
			.invoke('text')
			.then(currentValue => {
				const initialCountValue = parseInt(currentValue);
				cy.contains('Successfully Saved').should('be.visible');
				shareLikeComment
					.shareCounter()
					.first()
					.should('contain.text', initialCountValue.toString() + ' ' + 'Share');
			});
	});

	it('GX3-2647 | TC2: Validate user clicks on the Like button', () => {
		shareLikeComment
			.likeCounter()
			.invoke('text')
			.then(value => {
				const initialLikesNumber = parseInt(value);
				shareLikeComment.clickHeartButton();
				shareLikeComment.animationClass().should('exist');
				shareLikeComment.likeCounter().should('contain.text', (initialLikesNumber + 1).toString() + ' ' + 'Like');
			});

		shareLikeComment.clickHeartButton(); //Reset like
	});

	it('GX3-2647 | TC3: Validate user makes a Comment in a post', () => {
		shareLikeComment.clickCommentButton();

		shareLikeComment
			.commentCounter()
			.invoke('text')
			.then(initialCount => {
				const initialCountValue = parseInt(initialCount);
				shareLikeComment.writeAcomment('Dune 2 es un peliculón!!');
				cy.contains('Successfully Saved').should('be.visible');
				shareLikeComment.commentCounter().should('contain.text', (initialCountValue + 1).toString());
			});

		shareLikeComment.commentCard().should('be.visible');
	});
});
