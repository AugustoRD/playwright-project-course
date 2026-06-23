import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('my first test', async ({page}) => {

    await page.goto('https://google.com/ncr');


    //Handle popup (like cookie consent) if it appears
    const acceptButton = page.locator('button:has-text("Accept all")');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        console.log('Popup accepted');
    }

    await page.locator('textarea[name="q"]').first().fill('Playwright');

    await page.keyboard.press('Enter');
    
    await page.locator('h3').first().waitFor();
    //await page.waitForTimeout(2000);

    //const results = await page.locator('#search .g').count();

    const results = await page.locator('h3').allTextContents();

    expect(results.length).toBeGreaterThan(0);
 
});
