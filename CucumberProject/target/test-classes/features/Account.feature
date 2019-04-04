Feature: Portal login 

Background:
Given Validate the browser
When Browser is triggered
Then Check if browser is started

@PortalTest
Scenario: Home page default login - cards are displayed 
	Given User is on NetBanking landing page 
	When User logs in to application with "username" and "12345" 
	Then Home page is populated 
	And Cards are displayed "true" 
	