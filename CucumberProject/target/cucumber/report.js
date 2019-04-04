$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Application login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page default login - cards are displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to application with \"username\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login - cards are not displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to application with \"username1\" and \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_application_with_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page sign up",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User signs up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "jenny@bcd.com",
        "Australia",
        "+12 34567890"
      ]
    },
    {
      "cells": [
        "bob",
        "pass",
        "bob@bcd.com",
        "America",
        "+1 987654"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_signs_up_with_following_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Homepage default login - parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User logs in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "userparam",
        "passparam"
      ]
    },
    {
      "cells": [
        "user2param",
        "pass2param"
      ]
    },
    {
      "cells": [
        "user3param",
        "pass3param"
      ]
    },
    {
      "cells": [
        "user4param",
        "pass4param"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Homepage default login - parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage default login - parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage default login - parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage default login - parameterization",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.cards_are_displayed_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});