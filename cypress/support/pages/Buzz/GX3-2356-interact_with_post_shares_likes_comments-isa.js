class BuzzPage {
	get = {
		selectMenuButtton: menuName => cy.get(`[class="oxd-main-menu-item-wrapper"] [href*="${menuName}"]`),
		postItem: () => cy.get('[class*="oxd-sheet--white orangehrm-buzz"]:not([class*="gutters"])').eq(0),
		likeButtons: () => cy.get('[class="orangehrm-buzz-post-actions"] div').first(),
		isRedHeartVisible: () => cy.get('.orangehrm-like-animation'),

		commentButtons: () => cy.get('div [class=orangehrm-buzz-post-actions] button [class$="bi-chat-text-fill"]').first(),
		commentInput: () => cy.get('[class="orangehrm-buzz-comment-add"] form input').first(),
		commentWrapper: () => cy.get('[class=orangehrm-buzz-comment]'),
		showMorePosts: () => cy.get('[class$=buzz-comment-readmore]'),

		shareButtons: () => cy.get('.orangehrm-buzz-post-actions button [class$="bi-share-fill"]'),
		shareButtonPopUp: () => cy.get('[class$="orangehrm-buzz-post-modal-actions"] button'),
		sharePopUp: () =>
			cy.get(
				'[class$="oxd-sheet--rounded oxd-sheet--white oxd-dialog-sheet oxd-dialog-sheet--shadow oxd-dialog-sheet--gutters orangehrm-dialog-modal"]'
			),
		shareSuccessfulMessage: () => cy.get('[class*="oxd-text--toast-message"]'),
	};

	goToBuzzPage(nameMenu) {
		this.get.selectMenuButtton(nameMenu).click();
	}

	clickLikeButton() {
		this.get.likeButtons().click({ force: true });
	}

	writeYourComment({ comment }) {
		this.get.postItem().within(() => {
			this.get.commentButtons().click({ force: true });
			this.get.commentInput().clear().should('be.empty').type(`${comment}{enter}`);
			cy.wait(3000);
		});
	}

	// clickShareButton() {
	// 	const listShareButtons = this.get.shareButtons();
	// 	listShareButtons.click();
	// }

	// clickshareButtonPopUp() {
	// 	const shareButtonPopUP = this.get.shareButtonPopUp();
	// 	shareButtonPopUP.click();
	// }
}
export const buzzPage = new BuzzPage();
