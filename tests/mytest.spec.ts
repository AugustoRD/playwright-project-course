import {test, expect} from '@playwright/test';

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

test('meu primeiro teste sem bloqueios', async ({ page }) => {
    
    // 1. Acessa a Wikipedia (um site livre para testes)
    await page.goto('https://pt.wikipedia.org/');

    // 2. Encontra a barra de pesquisa pelo atributo 'name' e digita
    await page.locator('input[name="search"]').fill('Playwright');

    // 3. Pressiona Enter
    await page.keyboard.press('Enter');

    // 4. O Playwright vai esperar sozinho a página carregar.
    // Agora validamos se o Título principal da página (h1) contém o que pesquisamos!
    await expect(page.locator('h1#firstHeading')).toContainText('Playwright');
    
    console.log('Teste passou com sucesso e sem robôs!');
});