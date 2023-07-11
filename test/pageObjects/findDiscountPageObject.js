const ParentPageObject = require('./parentPageObject')

class FindDiscountPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    //await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async clickAcceptCookies() {
    const acceptCookies = await browser.$('#onetrust-accept-btn-handler')
    await acceptCookies.click()
  }

  async clickTrendingNow(){
    const clickTrendingNow = await browser.$('#__next > div > header > div > div.css-5kov97 > div > nav > ul > li:nth-child(1) > a')
    await clickTrendingNow.waitForClickable()
    await clickTrendingNow.click()
    await browser.pause(3000)
  }


  async locateItem() {
    const sixthItem = await browser.$('//*[@id="__next"]/div/main/div/div/div/div/section/div/div[6]')
    await sixthItem.waitForExist()
    await browser.pause(3000)
    sixthItem.click()

  }

  async verifyDiscountPage(){
    await browser.pause(3000)
    const getCodeText = await $('Get code & open site')

    // Check if the element exists
    const isElementExists = await getCodeText.isExisting()
  
    // Return true if the element exists, otherwise false
    return isElementExists
  }
  
}

module.exports = FindDiscountPageObject
