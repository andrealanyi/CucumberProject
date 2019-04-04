package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinition {

    @Given("^User is on NetBanking landing page$")
    public void user_is_on_netbanking_landing_page() throws Throwable {
        System.out.println("User is on NetBanking landing page");
    }

    @When("^User logs in into application with user name and password$")
    public void user_logs_in_into_application_with_user_name_and_password() throws Throwable {
    	System.out.println("Logged in");
    }
    
    @When("User logs in into application with user name {string} and password {string}")
    public void user_logs_in_into_application_with_user_name_and_password(String string, String string2) {
    	System.out.println(string + string2);
    }
    
    /* Tidy Gherking chrome plugin
    @When("^User logs in into application with user name \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_logs_in_into_application_with_user_name_something_and_password_something(String strArg1, String strArg2) throws Throwable {
        throw new PendingException();
    }*/

    @Then("^Home page is populated$")
    public void home_page_is_populated() throws Throwable {
//        throw new PendingException();
    	System.out.println("Home page is populated");
    }

    @Then("Cards are displayed")
    public void cards_are_displayed() {
        // Write code here that turns the phrase above into concrete actions
    	System.out.println("Cards are displayed without parameters");
    }

    @Then("Cards are displayed {string}")
    public void cards_are_displayed(String string) {
        // Write code here that turns the phrase above into concrete actions
    	System.out.println("Cards are displayed: " + string);
    }

}