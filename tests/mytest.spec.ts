import {test, expect} from '@playwright/test';


test('meu primeiro teste sem bloqueios', async ({ page }) => {
    
    // 1. Acessa a Wikipedia (um site livre para testes)
    await page.goto('https://pt.wikipedia.org/');

    // 2. Encontra a barra de pesquisa pelo atributo 'name' e digita
    //await page.locator('input[name="search"]').first().fill('Playwright');
    //await page.locator('#searchInput').fill('Qualidade de software');
    await page.locator('input[name="search"]:visible').fill('Qualidade de software');
    
    // 3. Pressiona Enter
    await page.keyboard.press('Enter');

    // 4. O Playwright vai esperar sozinho a página carregar.
    // Agora validamos se o Título principal da página (h1) contém o que pesquisamos!
   // await expect(page.locator('h1#firstHeading')).toContainText('Playwright');
    await expect(page.locator('h1#firstHeading')).toContainText('Qualidade de software');

    console.log('Teste passou com sucesso e sem robôs!');
});