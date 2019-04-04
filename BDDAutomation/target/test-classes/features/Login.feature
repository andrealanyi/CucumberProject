Feature: Application Login

Scenario: Home page default login
Given User is on NetBanking landing page
When User logs in into application with user name and password
Then Home page is populated
And Cards are displayed

Scenario: Home page default login
Given User is on NetBanking landing page
When User logs in into application with user name "jin" and password "1234"
Then Home page is populated
And Cards are displayed "true"

Scenario: Home page default login
Given User is on NetBanking landing page
When User logs in into application with user name "john" and password "4321"
Then Home page is populated
And Cards are displayed "false"