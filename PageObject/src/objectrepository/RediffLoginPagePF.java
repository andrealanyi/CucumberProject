package objectrepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RediffLoginPagePF {
	
	WebDriver driver;
	
	@FindBy(xpath="//input[@name='login']")
	WebElement username;
	
	@FindBy(id="password")
	WebElement password;
	
	@FindBy(xpath = "//input[@title='Sign in']")
	WebElement goButton;
	
	@FindBy(linkText = "Home")
	WebElement homeLink;
	

	public RediffLoginPagePF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement UserName() {
		return username;
	}
	
	public WebElement Password() {
		return password;
	}
	
	public WebElement GoButton() {
		return goButton;
	}
	
	public WebElement HomeLink() {
		return homeLink;
	}
	
}
