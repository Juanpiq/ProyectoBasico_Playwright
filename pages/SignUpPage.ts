import { expect, Locator, Page } from "@playwright/test";
import User from "../models/User";

export default class SignUpPage{
    
    async load(page: Page){
        await page.goto('/signup')
    }

    private firstNameInput(){
        return 'first-name';
    }

    private lastNameInput(){
        return 'last-name';
    }

    private emailInput(){
        return 'email';
    }

    private passwordInput(){
        return 'password';
    }

    private confirmPasswordInput(){
        return 'confirm-password';
    }

    private submitBtn(){
        return 'submit';
    }


    async signup(page: Page, user: User){
        const txtFirstName : Locator = page.getByTestId(this.firstNameInput());
        const txtLastName : Locator = page.getByTestId(this.lastNameInput());
        const txtEmail : Locator = page.getByTestId(this.emailInput());
        const txtPassword : Locator = page.getByTestId(this.passwordInput());
        const txtCPassword : Locator = page.getByTestId(this.confirmPasswordInput());
        const btnSignUp : Locator = page.getByTestId(this.submitBtn())

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
        }
}

