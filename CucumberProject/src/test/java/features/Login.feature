Feature: Application login 

@RegTest
Scenario: Home page default login - cards are displayed 
	Given User is on NetBanking landing page 
	When User logs in to application with "username" and "12345" 
	Then Home page is populated 
	And Cards are displayed "true" 

@SmokeTest	
Scenario: Home page default login - cards are not displayed 
	Given User is on NetBanking landing page 
	When User logs in to application with "username1" and "1234" 
	Then Home page is populated 
	And Cards are displayed "false" 
	
@SmokeTest
Scenario: Home page sign up 
	Given User is on NetBanking landing page 
	When User signs up with following details 
		| jenny | abcd | jenny@bcd.com | Australia | +12 34567890 |
		| bob | pass | bob@bcd.com | America | +1 987654 |
	Then Home page is populated 
	And Cards are displayed "false" 
	
@RegTest
Scenario Outline: Homepage default login - parameterization 
	Given User is on NetBanking landing page 
	When User logs in to the application with <username> and <password> 
	Then Home page is populated 
	And Cards are displayed "true" 
	Examples: 
		| Username		| Password 		|
		| userparam 	| passparam 	|
		| user2param 	| pass2param 	|
		| user3param 	| pass3param 	|
		| user4param 	| pass4param 	|