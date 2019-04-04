package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//feature file 
//has to identify the step definition file
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue="stepDefinitions", tags="@SmokeTest, @RegTest", monochrome = true,
		dryRun=false, strict=true, 
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/cukes.xml"})
public class TestRunner {

}
