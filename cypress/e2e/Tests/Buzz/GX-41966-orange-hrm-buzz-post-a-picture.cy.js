import { buzzPage } from '@pages/Buzz/GX-41966-postAPicture';
import { loginPage } from '@pages/Buzz/GX-41966-postAPicture';
import data from '../../../fixtures/data/GX-41966-postAPicture.json';
import { removeLogs } from '@helper/RemoveLogs';

const login = Cypress.env('AdminUser');

describe('GX-41966-orange-hrm-buzz-post-a-picture)ge-hrm-buzz-post-a-picture', () => {
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
	it('41967 | TC1: Validar compartir una imagen en la feed.', () => {
		const numberOfImages = 1;
		buzzPage.addImages({
			numberOfPhotos: numberOfImages,
			path: data.path.imagePng,
		});
		//pop up image length
		buzzPage.get.imageContainer().find('img').should('have.length', numberOfImages);
		buzzPage.clickOnShareButton();
		buzzPage.get.postSucces().should('be.visible').and('have.text', data.messages.succes);
		//feed image length
		buzzPage.get.imageContainer().should('contain.html', 'img');
	});
	it('41967 | TC2: Validar compartir 5 imagenes en la feed.', () => {
		const numberOfImages = 5;
		buzzPage.addImages({
			numberOfPhotos: numberOfImages,
			path: data.path.imagePng,
		});
		buzzPage.get.photosAddInput().should('not.exist');
		//pop up image length
		buzzPage.get.imageContainer().find('img').should('have.length', numberOfImages);
		buzzPage.clickOnShareButton();
		cy.wait(5000);
		buzzPage.get.postSucces().should('be.visible').and('have.text', data.messages.succes);
		//feed image length
		buzzPage.get.imageContainer().find('img').should('have.length', numberOfImages);
	});
	it('41967 | TC3: Validar no compartir imagen de mas de 2mb.', () => {
		const numberOfImages = 1;
		buzzPage.addImages({
			numberOfPhotos: numberOfImages,
			path: data.path.imageGif,
		});
		buzzPage.get.alertContent().should('be.visible').and('have.text', data.messages.maximumAllowedSize);
	});
});

removeLogs();
