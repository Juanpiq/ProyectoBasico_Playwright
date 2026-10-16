import { expect, Locator, Page } from "@playwright/test";
export default class TodoPage{
    
    private welcomeMessage(){
        return 'welcome';
    }

    welcomeMessageElement(page:Page){
        return page.getByTestId(this.welcomeMessage())
    }
}