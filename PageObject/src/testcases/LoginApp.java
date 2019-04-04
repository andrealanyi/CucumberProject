package testcases;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;
import objectrepository.RediffHomePage;
import objectrepository.RediffLoginPagePF;

public class LoginApp {

//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//	}
	
	@Test
	public void Login() {
		System.setProperty("webdriver.chrome.driver", "/Users/Yes/eclipse-workspace/drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("https://mail.rediff.com/cgi-bin/login.cgi");
//		RediffLoginPage rd = new RediffLoginPage(driver);
//		rd.UserName().sendKeys("username");
//		rd.Password().sendKeys("Password");
//		rd.GoButton().click();
//		rd.HomeLink().click();
		
		RediffLoginPagePF rd = new RediffLoginPagePF(driver);
		rd.UserName().sendKeys("username");
		rd.Password().sendKeys("Password");
		rd.GoButton().click();
		rd.HomeLink().click();
		
		RediffHomePage rh = new RediffHomePage(driver);
		WebDriverWait wait = new WebDriverWait(driver, 10);

		rh.SearchLink().click();
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(rh.searchBox));
		rh.SearchBox().sendKeys("rediff");
		rh.SearchButton().click();
	}

}
