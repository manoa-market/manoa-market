import { Selector } from 'testcafe';

class FAQPage {
  constructor() {
    this.pageId = '#faq';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const faqPage = new FAQPage();
