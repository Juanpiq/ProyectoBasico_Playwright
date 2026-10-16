import {test, expect, Locator} from "@playwright/test";
import User from "../models/User";
import SignUpPage from "../pages/SignUpPage";
import TodoPage from "../pages/ToDoPage";

test('should be able to register our app', async ({page}) =>{
    const user = new User();

    const signupPage = new SignUpPage();

    await signupPage.load(page);
    await signupPage.signup(page, user);

    const todoPage = new TodoPage();

    const welcomeMessage = todoPage.welcomeMessageElement(page);

    await expect(welcomeMessage).toBeVisible();
})