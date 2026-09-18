import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly brandLogo: Locator;
  readonly mainNavigation: Locator;
  readonly headerOrderNowLink: Locator;
  readonly heroHeadline: Locator;
  readonly streetFoodIntroduction: Locator;
  readonly footerAddress: Locator;
  readonly footerPhoneNumbers: Locator;
  readonly footerHours: Locator;

  constructor(page: Page) {
    this.page = page;
    this.brandLogo = page.getByRole('link', { name: 'Canvas Logo' });
    this.mainNavigation = page.getByRole('navigation');
    this.headerOrderNowLink = page.locator('#header-wrap').getByRole('link', {
      name: 'Order Now',
    });
    this.heroHeadline = page.getByRole('heading', {
      name: 'Life is too short for bland food!',
    });
    this.streetFoodIntroduction = page.getByText('Welcome aboard Train to Mumbai');
    this.footerAddress = page.getByRole('heading', {
      name: /11 Town Center Drive, Suite 185 Lovettsville, VA/,
    });
    this.footerPhoneNumbers = page.getByRole('heading', {
      name: /\+1 \(540\) 668-5095 \+1 \(540\) 668-5183/,
    });
    this.footerHours = page.getByRole('heading', {
      name: /Tuesday to Thursday: 11:30am to 2:30pm/,
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.traintomumbai.com/');
  }
}
