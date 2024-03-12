class Post {
	constructor() {
		this.postCards = () => cy.get('div.orangehrm-buzz');
		this.threeDotsSelector = () => cy.get('div.orangehrm-buzz-post-header-config i');
		this.deletePostLink = () => cy.contains('Delete Post');
		this.popUp = () => cy.get('div[role="document"]');
		this.deleteButton = () => cy.contains('button', ' Yes, Delete ');
		this.cancelButton = () => cy.contains('button', ' No, Cancel ');
		this.post = '';
	}
	selectRandomPostAndClickDeleteLink() {
		this.postCards().then(cards => {
			const randomIndex = Math.floor(Math.random() * cards.length);
			const randomCard = cards[randomIndex];
			this.post = randomCard;
			this.threeDotsSelector().then(i => {
				cy.wrap(i).eq(randomIndex).click({ force: true });
				this.clickOnDeletePostLink();
			});
		});
	}
	clickOnDeletePostLink() {
		this.deletePostLink().click();
	}
	clickDeleteButton() {
		this.deleteButton().click();
	}
	clickCancelButton() {
		this.cancelButton().click();
	}

	verifyPopUpIsShown() {
		this.popUp().should('be.visible');
	}
	verifyDeleteButtonIsVisible() {
		this.deleteButton().should('be.visible');
	}
	verifyCancelButtonIsVisible() {
		this.cancelButton().should('be.visible');
	}
	verifySuccessMessageIsDisplayed(expectedMessage) {
		cy.on('window:alert', str => {
			expect(str).to.equal(expectedMessage);
		});
	}
	verifyPostNotVisible() {
		cy.get('body').then(() => {
			cy.get(this.post).should('not.exist');
		});
	}
	verifyPostIsVisible() {
		cy.get('body').then(() => {
			cy.get(this.post).should('exist');
		});
	}
}
export const post = new Post();
