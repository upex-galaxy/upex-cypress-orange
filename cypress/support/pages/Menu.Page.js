class MenuOrangeHRM {
	get = {
		AdminButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Admin'),
		PIMButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('PIM'),
		LeaveButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Leave'),
		TimeButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Time'),
		RecruitmentButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Recruitment'),
		MyInfoButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('My Info'),
		PerformanceButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Performance'),
		DashboardButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Dashboard'),
		DirectoryButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Directory'),
		MaintenanceButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Maintenance'),
		BuzzButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Buzz'),
		claimButton: () => cy.get('li[class^="oxd-main-menu-item"]').contains('Claim'),
	};

	GoToAdmin() {
		this.get.AdminButton().click();
	}

	GoToPIM() {
		this.get.PIMButton().click();
	}

	GoToLeave() {
		this.get.LeaveButton().click();
	}

	GoToTime() {
		this.get.TimeButton().click();
	}

	GoToRecruitment() {
		this.get.RecruitmentButton().click();
	}

	GoToMyInfo() {
		this.get.MyInfoButton().click();
	}

	GoToPerformance() {
		this.get.PerformanceButton().click();
	}

	GoToDashboard() {
		this.get.DashboardButton().click();
	}

	GoToDirectory() {
		this.get.DirectoryButton().click();
	}

	GoToMaintenance() {
		this.get.MaintenanceButton().click();
	}

	GoToClaim() {
		this.get.claimButton().click();
	}
}
export const menuOrange = new MenuOrangeHRM();
