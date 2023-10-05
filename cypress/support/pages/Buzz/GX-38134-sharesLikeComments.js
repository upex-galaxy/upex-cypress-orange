class SLC {
	get = {
		//login page
		userNameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		loginButton: () => cy.get('[type="submit"]'),
		postContainer: () => cy.get('[class="orangehrm-buzz-post-footer"]', { timeout: 3000 }),

		likeButton: () => cy.get('[class="orangehrm-buzz-post-actions"] div').first(), //esto obtiene todo el array de likes de la página
		commentButton: () => cy.get('div[class="orangehrm-buzz-post-actions"] button[class="oxd-icon-button"]').first(), //esto obtiene todo el array de comments de la página
		shareButton: () => cy.get('div[class="orangehrm-buzz-post-actions"] button[class="oxd-icon-button"]').last(), //esto obtiene todo el array de shares de la página
		popupComment: () => cy.get('form[class="oxd-form"]').last(),
		postSuccess: () => cy.get('[id="oxd-toaster_1"] [class*="oxd-toast--success"]', { timeout: 2000 }),
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
}
export const buzzMenu = new SLC();
