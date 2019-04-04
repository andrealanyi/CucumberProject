package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
//		features="src/test/java/features/Login.feature",<- runs this feature only
		features="src/test/java/features",
		glue="stepDefinitions")//package name
public class TestRunner {
	

}
