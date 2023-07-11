const { Given,When,Then } = require('@cucumber/cucumber')
const FindDiscountPageObject = require('../pageObjects/findDiscountPageObject')

const findDiscountPageObject = new FindDiscountPageObject()

Given('I am on the studentbeans homepage', async () => {
  await findDiscountPageObject.goToHomePage()
  await findDiscountPageObject.clickAcceptCookies()
  //await simpleSearchPageObject.verifyHomePage()
  await browser.pause(3000)
})

When('I click on "Trending Now"', async () => {
 await findDiscountPageObject.clickTrendingNow()
})

When('I select the sixth discount in the list', async () => {
  await findDiscountPageObject.locateItem()
})

Then('I should be taken to that discount to view more information', async () => {
  await findDiscountPageObject.verifyDiscountPage()
})
