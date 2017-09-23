package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags="@HomePage",features={"src\\test\\resources\\feature"},glue={"googleTest"},monochrome=true,format={"pretty","html:report"})
public class RunnerTest {

}
