class LoginPage {
	get = {
		username: () => cy.get('[name=username]'),
		password: () => cy.get('[name=password]'),
		loginButton: () => cy.get('[class^=oxd-button]'),
	};

	login({ username, password }) {
		this.get.username().clear().should('be.empty').type(username);
		this.get.password().clear().should('be.empty').type(password);
		this.get.loginButton().click();
	}
}

class BuzzPage {
	get = {
		postPopUp: () => cy.get('[role=document]'),
		popUpShareButton: () => cy.get('button[type=submit]').eq(1),
		postSucces: () => cy.get('div[class^=oxd-toast-content]', { timeout: 15000 }),
		postContainer: () => cy.get('[class ^= oxd-sheet]').eq(1),
		// alertContent: () => cy.get('[class^=oxd-alert-content]'),
		shareButton: () => cy.get('[class$=bi-share-fill]').first(),
		commentInput: () => cy.get('[class = oxd-buzz-post-input]').eq(1),
	};

	sharePost({ comment }) {
		cy.wait(4000);
		this.get.shareButton().click({ force: true });
		this.get.postPopUp().should('exist');
		this.get.commentInput().clear().should('be.empty').type(comment);
		this.get.popUpShareButton().click();
	}
}

export const buzzPage = new BuzzPage();
export const loginPage = new LoginPage();
