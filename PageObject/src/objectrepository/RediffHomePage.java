package objectrepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RediffHomePage {

	WebDriver driver;
	public By searchLink = By.xpath("//u[contains(text(),'Search')]");
	public By searchBox = By.id("srchword");
	public By searchButton = By.xpath("//input[@value='Search']");
	
	public RediffHomePage(WebDriver driver) {
		this.driver = driver;
	}
	
	public WebElement SearchLink() {
		return driver.findElement(searchLink);
	}
	
	public WebElement SearchBox() {
		return driver.findElement(searchBox);
	}
	
	public WebElement SearchButton() {
		return driver.findElement(searchButton);
	}
}
