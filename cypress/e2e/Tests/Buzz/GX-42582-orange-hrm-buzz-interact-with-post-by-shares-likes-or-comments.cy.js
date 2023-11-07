import { faker } from '@faker-js/faker';
import { buzzPage, loginPage } from '@pages/Buzz/GX-42582interactWithPost.page';
const login = Cypress.env('AdminUser');
const randomComment = faker.lorem.sentences(2);

describe('GX-42582-orange-hrm-buzz-interact-with-post-by-shares-likes-or-comments', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('/');
			cy.url().should('contain', 'login');
			loginPage.login({
				username: login.username,
				password: login.password,
			});
			cy.url().should('contain', 'dashboard');
		});
		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});

	it('42583 | TC1: Validar la funcionalidad del boton share.', () => {
		buzzPage.shareAPost({
			comment: randomComment,
		});
		buzzPage.get.postSucces().should('exist').and('have.text', 'SuccessSuccessfully Saved');
		buzzPage.get.postContainer().should('contain.text', randomComment);
	});
	it('42583 | TC2: Validar la funcionalidad del boton like.', () => {
		buzzPage.likeAPost().then(number => {
			buzzPage.get.postFooter().within(() => {
				if (number === 0) {
					buzzPage.get.textLikes().should('have.text', `${number + 1} Like`);
				} else {
					buzzPage.get.textLikes().should('have.text', `${number + 1} Likes`);
				}
			});
		});
		buzzPage.get.likeButton().first().should('have.class', 'orangehrm-like-animation');
	});
});
