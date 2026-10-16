import {test, expect, Locator} from '@playwright/test'
import {faker} from '@faker-js/faker'
import User from '../models/User';
import TodoApi from '../apis/ToDoAPI';
import UserApi from '../apis/UserApi';
import SignUpPage from '../pages/SignUpPage';
test('should be able to add a new TODO', async ({page, request, context}) => {
    const user = new User();

    const signupPage = new SignUpPage()
    await signupPage.signupUsingApi(request, user, context)
    
    await page.goto('/todo/new')
    await page.getByTestId('new-todo').fill('Learn Playwright!');
    await page.getByTestId('submit-newTask').click();

    const todoItem: Locator = page.getByTestId('todo-item')
    expect(await todoItem.innerText()).toEqual('Learn Playwright!');
})

test('should be able to delete TODO', async ({page, request, context}) => {
    const user = new User();
    const signupPage = new SignUpPage()
    await signupPage.signupUsingApi(request, user, context)
    await new TodoApi().addTodo(request, user);

    await page.goto('/todo')
    const deleteItem: Locator = page.getByTestId('delete');
    await deleteItem.click()
    await expect(page.getByText('No Available Todos')).toBeVisible();

    /*await page.goto('/todo/new')
    await page.getByTestId('new-todo').fill('Learn Playwright!');
    await page.getByTestId('submit-newTask').click();*/
    
    /*await page.goto('/signup');
    await page.getByTestId('first-name').fill(faker.person.firstName());
    await page.getByTestId('last-name').fill(faker.person.lastName());
    await page.getByTestId('email').fill(faker.internet.email());
    await page.getByTestId('password').fill('Test1234');
    await page.getByTestId('confirm-password').fill('Test1234');
    await page.getByTestId('submit').click();
    await expect(page.getByTestId('welcome')).toBeVisible();

    await page.getByTestId('add').click();
    await page.getByTestId('new-todo').fill('Learn Playwright!');
    await page.getByTestId('submit-newTask').click();

    const todoItem: Locator = page.getByTestId('todo-item');
    expect(await todoItem.innerText()).toEqual('Learn Playwright!');

    const deleteItem: Locator = page.getByTestId('delete');
    await deleteItem.click()
    await expect(page.getByText('No Available Todos')).toBeVisible();*/

})