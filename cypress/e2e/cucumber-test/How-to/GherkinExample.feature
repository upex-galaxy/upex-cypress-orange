@GX-5 @AutomationTriggered @Cucumber @Cypress @GitHubActions @Labs @Xray
@US_GX-2
Feature: Labs: CI Framework Test for Xray with Cypress and GitHub Actions
	#As a Workspace Manager,
	#
	#I want to test Cypress-GitHub TX Result Integration; by clicking on a Jira Action, the CI tool can be triggered and run all of the associated test to this feature and update the test status back to Jira again.
	#
	#So that the Tests can be updated from Jira Action.

	Background: Precondiciones para estar registrado
		Given User is signed up
		And User is at the login page

	@TC_GX-4 @TS_GX-3 @BDD @Cucumber @Feature @Gherkin
	Scenario Outline: US 2 | TS 3 | TC1: Check the Login correctly to Orange CRM Website
		When User enters username as '<username>' and password as '<password>' and clicks on login button
		Then User should be able to login to the Website
		And should display a friendly message as "User has successfully logged in"
		Examples:
			| username | password |
			| Admin    | admin123 |

	@TC_GX-4 @TS_GX-3 @BDD @Cucumber @Feature @Gherkin
	Scenario Outline: US 2 | TS 3 | TC2: Check the Login is not possible when user enters invalid credentials
		When User enters invalid username as '<username>' and password as '<password>' and clicks on login button
		Then User should NOT be able to login to the Website
		And should display an error message as "Please, insert a valid value"
		Examples:
			| username | password |
			| Admin2    | admin1234 |
	

