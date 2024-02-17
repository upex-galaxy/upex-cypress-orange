class BuzzPage {
	get = {
		selectMenuButtton: menuName => cy.get(`[class="oxd-main-menu-item-wrapper"] [href*="${menuName}"]`),
		postItem: () => cy.get('[class*="oxd-sheet--white orangehrm-buzz"]:not([class*="gutters"])'),
		likeButtons: () => cy.get('.orangehrm-buzz-post-actions div svg'),
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
}

export const buzzPage = new BuzzPage();
