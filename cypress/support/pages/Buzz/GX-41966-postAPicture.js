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
		sharePhotoButton: () => cy.get('[class = oxd-glass-button]').eq(0),
		postPopUp: () => cy.get('[role=document]'),
		addPhotos: () => cy.get('input[type=file]'),
		addPhotos2: () => cy.get('[class=orangehrm-photo-input-field]'),
		sharephotobutton: () => cy.get('[class^=oxd-file-div]'),
		shareButton: () => cy.get('button[type=submit]'),
	};
}

export const buzzPage = new BuzzPage();
export const loginPage = new LoginPage();
