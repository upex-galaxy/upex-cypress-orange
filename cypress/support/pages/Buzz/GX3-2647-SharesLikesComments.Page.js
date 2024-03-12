class ShareLikeComment {
	constructor() {
		this.shareButton = () => cy.get('button[type="button"] i.bi-share-fill');
		this.popUp = () => cy.get('div[role="document"]');
		this.shareButtonPopUp = () => cy.get('button[type="submit"]').last();
		this.shareCounter = () => cy.get('p').filter(':contains("Share")');
		this.heartButton = () => cy.get('.orangehrm-buzz-post-actions #heart-svg').first();
		this.likeButton = () => cy.get('p').filter(':contains("Like")');
		this.animationClass = () => cy.get('div.orangehrm-like-animation');
		this.likeCounter = () => cy.get('p').filter(':contains("Like")').first();
		this.commentButton = () => cy.get('div.orangehrm-buzz-post-actions i');
		this.textBoxComment = () => cy.get('input[placeholder="Write your comment..."]');
		this.commentCard = () => cy.get('.orangehrm-post-comment');
		this.commentCounter = () => cy.get('p').filter(':contains("Comment")').first();
	}

	clickShareButton() {
		const post = cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/shares').as('getPost');

		this.shareButton().first().click({ force: true });
		return post;
	}

	clickShareButtonPopUp() {
		this.shareButtonPopUp().first().click({ force: true });
	}

	clickHeartButton() {
		this.heartButton().click({ force: true });
	}

	clickCommentButton() {
		this.commentButton().first().click({ force: true });
	}

	writeAcomment(message) {
		this.textBoxComment().type(`${message}{enter}`);
	}
}
export const shareLikeComment = new ShareLikeComment();
