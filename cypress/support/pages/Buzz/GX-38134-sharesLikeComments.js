class SLC {
	get = {
		//login page
		userNameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		loginButton: () => cy.get('[type="submit"]'),
		postContainer: () => cy.get('[class="orangehrm-buzz-post-footer"]', { timeout: 3000 }),

		likeButton: () => cy.get('[class="orangehrm-buzz-post-actions"] div').first(), //esto obtiene todo el array de likes de la página
		commentButton: () => cy.get('div[class="orangehrm-buzz-post-actions"] button[class="oxd-icon-button"]').first(), //esto obtiene todo el array de comments de la página
		commentInput: () => cy.get('form input', { timeout: 3000 }),
		commentBox: () => cy.get('div[class="orangehrm-post-comment"] span.orangehrm-post-comment-text').last(),
		shareButton: () => cy.get('div[class="orangehrm-buzz-post-actions"] button[class="oxd-icon-button"]').last(), //esto obtiene todo el array de shares de la página
		popupComment: () => cy.get('form[class="oxd-form"]').last(),
		postSuccess: () => cy.get('[id="oxd-toaster_1"] [class*="oxd-toast--success"]', { timeout: 2000 }),
		showMoreText: () => cy.get('[class="orangehrm-buzz-comment"] p[class$="buzz-comment-readmore"]', { timeout: 2000 }),
		containerBoxInput: () => cy.get('[class="orangehrm-buzz-comment"] [class$="orangehrm-post-comment-text"]'),
		lateralMenu: () => cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]'),
	};
	fillLoginAndSubmit(userName, password) {
		this.get.userNameInput().type(userName);
		this.get.passwordInput().type(password);
		this.get.loginButton().click().end();
	}
	clickLikeButton() {
		this.get.likeButton().click();
	}
	clickSharedButton(value) {
		this.get
			.postContainer()
			.first()
			.within(() => {
				this.get.shareButton().click({ force: true });
			});
		this.get
			.popupComment()
			.should('be.visible')
			.within(() => {
				if (value === 'post') {
					cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/shares').as('postShare');
					cy.get('button').last().should('be.visible').click().end();
					cy.wait('@postShare').then(kenny => {
						expect(kenny.response.statusCode).to.equal(200);
					});
				} else if (value === 'cancel') {
					cy.get('button').first().should('be.visible').click().end();
				}
			});
	}
	clickCommentButtonAndType(comment) {
		this.get
			.postContainer()
			.first()
			.within(() => {
				this.get.commentButton().click({ force: true });
			});
		this.get.commentInput().should('have.class', 'oxd-input--focus').type(`${comment}{enter}`, { force: true });
	}
	showMoreBttn() {
		return buzzMenu.get.showMoreText().then(showMore => {
			return showMore.length;
		});
	}
}
export const buzzMenu = new SLC();
