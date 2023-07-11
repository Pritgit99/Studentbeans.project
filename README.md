# StudentBeans_QA_Tech_Test

## This repo is set up as a tech test to be used during the QA recruitment process

The framework has already been set up running asynchronously using a page object model(POM) with a parent page object that other page objects inherit from, this is representative of the set up we use in our tests within Student Beans

### The task for our QA candidates is as followed

1. Make the scenario that has already been written in simpleSearch.feature run and pass
&emsp; The first step of the scenario has been done for you to show how we are using the set up
&emsp;
2. You will need to create all of the step definitions in the simpleSearchStepDef.js file
&emsp;
3. You will also need to create all the corresponding methods in the the simpleSearchPageObject.js (Keep all interactions with the webpage in the page object file)
&emsp;
4. Go to <https://www.studentbeans.com/uk> and write your own test in the cucumber format that does the following
    - Opens the website
    - Takes the user to the Trending Now offers
    - Open the 6th discount within the Trending Now offers list
5. Write one last scenario, A scenario outline that goes to <https://www.studentbeans.com/uk> and does the following
    - Open the log in function
    - Use the credentials email: test@test.com password: testingStuff
    - Trigger the user and password error messages
    - Confirm that the error messages display &emsp;

**Please write your scenarios in your own appropriately named feature files and create all the needed stepdefs and pageobjects**

***Before submitting your solution please consider the following:***
- The solution needs to be able to execute the tests and have them pass
- Focus on attention to detail - we are looking to see how polished and confident you are in the basics before you show flair, with solid code structure and quality.
- Ensure your solutions are clean and easy to follow/read with a clear thought process/logic
- Take careful note of the instructions provided and show us what you can do!

### Steps to get started

1. Fork the repo
&emsp;
2. Create your own branch to make your changes (Ensure your changes are in Javascript as any other language will not be reviewed)
&emsp;
3. To run the tests in their current state run the following
    - yarn install
    - yarn run tests
&emsp;
4. Make your changes and make sure the test runs and passes
&emsp;
5. When you are ready push your changes in your branch back to your forked github repo
&emsp;
6. Send confirmation with your branch name back to our recruitment team.
