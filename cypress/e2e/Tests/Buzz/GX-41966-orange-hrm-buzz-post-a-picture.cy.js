import { buzzPage } from '@pages/Buzz/GX-41966-postAPicture';
import { loginPage } from '@pages/Buzz/GX-41966-postAPicture';
const login = Cypress.env('AdminUser');

describe('GX-41966-orange-hrm-buzz-post-a-picture)ge-hrm-buzz-post-a-picture', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.url().should('contain', 'login');
		loginPage.login({
			username: login.username,
			password: login.password,
		});
		cy.url().should('contain', 'dashboard');

		cy.visit('/buzz/viewBuzz');
		cy.url().should('contain', 'viewBuzz');
	});
	it('41967 | TC1: Validar compartir una imagen en la feed.', () => {
		cy.wait(4000);
		buzzPage.get.sharePhotoButton().click();
		buzzPage.get
			.postPopUp()
			.should('exist')
			.within(() => {
				buzzPage.get.sharephotobutton().click();
				buzzPage.get.addPhotos().invoke('removeClass', 'oxd-file-input').attachFile('images/upexlogo.png');
				// buzzPage.get.shareButton().invoke('removeAttr', 'disabled').click({ force: true });
			});
		// cy.wait(4000);
	});
});
