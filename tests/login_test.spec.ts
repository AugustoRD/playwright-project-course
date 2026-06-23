import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test('Login Test', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.expectLoginSuccess();

});