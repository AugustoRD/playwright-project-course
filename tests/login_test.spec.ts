import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test('Valid Login Test', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    //await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


});

test('Invalid Login Test', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    //await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();


});