$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "bing test",
  "description": "",
  "id": "bing-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Bing test",
  "description": "",
  "id": "bing-test;bing-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open url",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.openBrowser()"
});
formatter.result({
  "duration": 12103397492,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.openUrl()"
});
formatter.result({
  "duration": 1814760108,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.enterInput()"
});
formatter.result({
  "duration": 2569148829,
  "status": "passed"
});
});