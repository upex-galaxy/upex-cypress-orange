Feature: 
	# TX: GX-3446
	
	Background:
		#@PREC_GX-3450
		Given User is signed up
		And User is at the login page

	#GX-3445 
	@TC_GX-3448 @TS_GX-3447 @Cucumber @Gherkin
	Scenario Outline: 3447 | TC1: Check user can log in successfully with valid credentials
		When User enters username as '<username>' and password as '<password>' and clicks on login button
		Then User should be able to login to the Website
		And should display a friendly message as "User has successfully logged in"
		Examples:
			| username | password |
			| Admin    | admin123 |
			
	@TC_GX-3449 @TS_GX-3447 @Cucumber @Gherkin
	Scenario Outline: 3447 | TC2: Check user cannot log in with wrong credentials
		When User enters invalid username as '<username>' and password as '<password>' and clicks on login button
		Then User should NOT be able to login to the Website
		And should display an error message as "Please, insert a valid value"
		Examples:
			| username | password  |
			| Admin2   | admin1234 |
