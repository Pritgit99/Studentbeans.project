const { Given,When,Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.clickAcceptCookies()
  //await simpleSearchPageObject.verifyHomePage()
})

When('I open the search bar', async () => {
  await simpleSearchPageObject.clickSearchBar()
})

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.enterSamsung()
})

Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.locateSamsung()
  await simpleSearchPageObject.verifySamsungPage()
})
