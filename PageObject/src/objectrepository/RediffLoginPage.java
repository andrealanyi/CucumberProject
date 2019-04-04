package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RediffLoginPage {
	
	WebDriver driver;
	By username = By.xpath("//input[@name='login']");
	By password = By.xpath("//input[@id='password']");
	By goButton = By.xpath("//input[@title='Sign in']");
	By homeLink = By.linkText("Home");

	public RediffLoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public WebElement UserName() {
		return driver.findElement(username);
	}
	
	public WebElement Password() {
		return driver.findElement(password);
	}
	
	public WebElement GoButton() {
		return driver.findElement(goButton);
	}
	
	public WebElement HomeLink() {
		return driver.findElement(homeLink);
		
	}
	
}
