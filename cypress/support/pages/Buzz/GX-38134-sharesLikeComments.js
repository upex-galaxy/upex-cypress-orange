class SLC {
	get = {
		//login page
		userNameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		loginButton: () => cy.get('[type="submit"]'),

		likeButton: () => cy.get('[class="orangehrm-buzz-post-actions"] div').first(), //esto obtiene todo el array de likes de la página
		commentButton: () => cy.get('[class="orangehrm-buzz-post-actions"] button [class$="chat-text-fill"]'), //esto obtiene todo el array de comments de la página
		shareButton: () => cy.get('[class="orangehrm-buzz-post-actions"] button [class$="share-fill"]'), //esto obtiene todo el array de shares de la página
	};
	fillLoginAndSubmit(userName, password) {
		this.get.userNameInput().type(userName);
		this.get.passwordInput().type(password);
		this.get.loginButton().click().end();
	}
	clickLikeButton() {
		this.get.likeButton().click();
	}
}
export const slc = new SLC();
