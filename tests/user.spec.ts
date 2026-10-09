import {test, expect, Locator} from "@playwright/test";
import {faker} from '@faker-js/faker';
import User from "../models/User";

test('should be able to register our app', async ({page}) =>{
    const user = new User(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        'Test#1234'
    );

    await page.goto("/signup");
    const txtFirstName : Locator = page.getByTestId('first-name');
    const txtLastName : Locator = page.getByTestId('last-name');
    const txtEmail : Locator = page.getByTestId('email');
    const txtPassword : Locator = page.getByTestId('password');
    const txtCPassword : Locator = page.getByTestId('confirm-password');
    const btnSignUp : Locator = page.getByTestId('submit')

    await expect(txtFirstName).toBeVisible;
    await txtFirstName.fill(user.getFirstName());

    await expect(txtLastName).toBeVisible;
    await txtLastName.fill(user.getLastName());

    await expect(txtEmail).toBeVisible;
    await txtEmail.fill(user.getEmail());

    await expect(txtPassword).toBeVisible;
    await txtPassword.fill(user.getPassword());

    await expect(txtCPassword).toBeVisible;
    await txtCPassword.fill(user.getPassword());

    await expect(btnSignUp).toBeVisible;
    await btnSignUp.click();

    await expect(page.getByTestId('welcome')).toBeVisible();
})