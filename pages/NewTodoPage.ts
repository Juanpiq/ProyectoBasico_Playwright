import { APIRequestContext, Locator, Page } from "@playwright/test";
import TodoApi from "../apis/ToDoAPI";
import User from "../models/User";

export default class NewTodoPage{

    private newTodoUnput(){
        return 'new-todo'
    }
    
    private newTodoSubmit(){
        return 'submit-newTask';
    }

    private todoItemlocator(){
        return 'todo-item'
    }

    async load(page:Page){
        await page.goto('/todo/new');
    }

    async addTodo(page:Page, task:string){
        await page.getByTestId(this.newTodoUnput()).fill(task);
        await page.getByTestId(this.newTodoSubmit()).click();
    }

    async todoItem(page:Page){
        const todoItem: Locator = page.getByTestId(this.todoItemlocator())
        return todoItem
    }

    async addTodoUsingAPi(request: APIRequestContext, user: User){
        await new TodoApi().addTodo(request, user);
    }
}