package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import io.cucumber.datatable.DataTable;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class LoginStepDefinition {

	@Given("^Validate the browser$")
	public void validate_the_browser() throws Throwable {
		System.out.println("Prerequisite: Validate the browser");
	}

	@When("^Browser is triggered$")
	public void browser_is_triggered() throws Throwable {
		System.out.println("Prerequisite: Browser is triggered");
	}

	@Then("^Check if browser is started$")
	public void check_if_browser_is_started() throws Throwable {
		System.out.println("Prerequisite: Check if browser is started");
	}

	@Given("^User is on NetBanking landing page$")
	public void user_is_on_netbanking_landing_page() throws Throwable {
		System.out.println("User is on NetBanking landing page");
	}

	@When("^User logs in to application with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_logs_in_to_application_with_something_and_something(String strArg1, String strArg2)
			throws Throwable {
		System.out.println(strArg1);
		System.out.println(strArg2);
	}

	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
		System.out.println("Home page is populated");
	}

	@And("^Cards are displayed \"([^\"]*)\"$")
	public void cards_are_displayed_something(String strArg1) throws Throwable {
		System.out.println(strArg1);
	}

	@When("^User signs up with following details$")
	public void user_signs_up_with_following_details(DataTable data) throws Throwable {
		List<String> list = data.asList();
		for (int i = 0; i < list.size(); i++) {
			System.out.println(list.get(i));
		}

	}

	@When("^User logs in to the application with (.+) and (.+)$")
	public void user_logs_in_to_the_application_with_and(String username, String password) throws Throwable {
		System.out.println(username);
		System.out.println(password);
	}

}