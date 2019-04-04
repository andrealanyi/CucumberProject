package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before("@RegTest")
	public void beforeValidation() {
		System.out.println("Regression before hook");
		//open browser
	}
	
	@After("@RegTest")
	public void afterValidation() {
		System.out.println("Regression after hook");
		//close browser
	}
	
	@Before("@SmokeTest")
	public void beforeSmokeValidation() {
		System.out.println("Smoke before hook");
		//open browser
	}
	
	@After("@SmokeTest")
	public void afterSmokeValidation() {
		System.out.println("Smoke after hook");
		//close browser
	}
	
	@Before
	public void before() {
		System.out.println("Just a before");
		//open browser
	}
	
	@After
	public void after() {
		System.out.println("Just an after");
		//close browser
	}
}
