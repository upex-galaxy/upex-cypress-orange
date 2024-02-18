class BuzzPage {
	get = {
		selectMenuButtton: menuName => cy.get(`[class="oxd-main-menu-item-wrapper"] [href*="${menuName}"]`),
		postItem: () => cy.get('[class*="oxd-sheet--white orangehrm-buzz"]:not([class*="gutters"])'),
		likeButtons: () => cy.get('[class="orangehrm-buzz-post-actions"] div').first(),
		isRedHeartVisible: () => cy.get('.orangehrm-like-animation'),
		commentButtons: () => cy.get('.orangehrm-buzz-post-actions button [class$="bi-chat-text-fill"]'),
		shareButtons: () => cy.get('.orangehrm-buzz-post-actions button [class$="bi-share-fill"]'),
		shareButtonPopUp: () => cy.get('[class$="orangehrm-buzz-post-modal-actions"] button'),
		sharePopUp: () =>
			cy.get(
				'[class$="oxd-sheet--rounded oxd-sheet--white oxd-dialog-sheet oxd-dialog-sheet--shadow oxd-dialog-sheet--gutters orangehrm-dialog-modal"]'
			),
		shareSuccessfulMessage: () => cy.get('[class*="oxd-text--toast-message"]'),
		writeCommentInput: () => cy.get('[class="orangehrm-buzz-comment-add"] form input'),
	};

	goToBuzzPage(nameMenu) {
		this.get.selectMenuButtton(nameMenu).click();
	}

	clickLikeButton() {
		this.get.likeButtons().click({ force: true });
	}
}

export const buzzPage = new BuzzPage();
