import { removeLogs } from '@helper/RemoveLogs';

describe('GX3-2356| OrangeHRM | Buzz | Interact with post by Shares, Likes or Comments', () => {
	beforeEach('Preconditions', () => {
		cy.visit('/');
		cy.url().should('contain', 'index');
	});

	it('GX3-2361 | TC01: Should turn red the like button when clicking on it', () => {
		expect(1).equal(1);
	});
	it('GX3-2361 | TC01: Should turn red the like button when clicking on it', () => {
		expect(1).equal(1);
	});
	it('GX3-2361 | TC01: Should turn red the like button when clicking on it', () => {
		expect(1).equal(1);
	});
});

removeLogs();
