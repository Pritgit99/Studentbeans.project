const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async clickAcceptCookies() {
    const acceptCookies = await browser.$('#onetrust-accept-btn-handler')
    await acceptCookies.click()
  }

  async clickSearchBar(){
    const clickSearch = await browser.$('#__next > div > main > div > div.css-12xz4cg > div > div > button')
    await clickSearch.waitForClickable()
    await clickSearch.click()
    await browser.pause(3000)
  }

  async enterSamsung(){
    const sendKeys = await browser.$('body > div.ReactModalPortal > div > div > div > div.css-md9l25 > div > input')
    await browser.keys('Samsung')
    await browser.pause(3000)
  }

  async locateSamsung() {
    const fourthElement = await browser.$('/html/body/div[6]/div/div/div/div[2]/div/div/div[4]/a/div[2]')
    await fourthElement.waitForExist()
    await browser.pause(3000)
    // Get the text of the fourth element
    const text = await fourthElement.getText()
    fourthElement.click()
    // Check if the text contains "Samsung"
    return text.includes('Samsung')
  }

  async verifySamsungPage(){
    await browser.pause(3000)
    const h1Element = await $('h1=Samsung Student Discounts')

    // Check if the element exists
    const isElementExists = await h1Element.isExisting()
  
    // Return true if the element exists, otherwise false
    return isElementExist
  }
  
}

module.exports = SimpleSearchPageObject
