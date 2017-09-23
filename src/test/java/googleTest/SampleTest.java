package googleTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SampleTest {

	WebDriver wd;
	@Given ("^open browser$")
	public void openBrowser(){
		
		System.setProperty("webdriver.chrome.driver", "browser\\chromedriver.exe");
		wd=new ChromeDriver();
	}
	@Then ("^open url$")
	public void openUrl(){
		wd.get("http://www.bing.com/");
	}
	@Then ("^enter input$")
	public void enterInput(){
		
		wd.findElement(By.name("q")).sendKeys("abc");
		wd.findElement(By.name("q")).submit();
	}
}
