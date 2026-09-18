import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// spec: specs/traintomumbai-ui-test-plan.md
// seed: tests/seed.spec.ts

test.describe('Core user journeys', () => {
  test('Homepage loads and core navigation is discoverable', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Open the homepage at https://www.traintomumbai.com/
    await homePage.goto();
    await expect(page).toHaveTitle('Train to Mumbai');
    await expect(homePage.brandLogo).toBeVisible();
    await expect(homePage.mainNavigation).toBeVisible();
    await expect(homePage.headerOrderNowLink).toBeVisible();

    // 2. Review the initial hero section and suggested content blocks
    await expect(homePage.heroHeadline).toBeVisible();
    await expect(homePage.streetFoodIntroduction).toBeVisible();

    // 3. Scan the footer details
    await expect(homePage.footerAddress).toBeVisible();
    await expect(homePage.footerPhoneNumbers).toBeVisible();
    await expect(homePage.footerHours).toBeVisible();
  });
});
