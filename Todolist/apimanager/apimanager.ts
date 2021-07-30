import {injectable} from "inversify";
import {TodoClient} from "../todoclient/todoclient";
import fetch from "node-fetch";
import TodoItem from "../todoitem/todoitem";
import API from "../constant/api";

@injectable()
export default  class ApiManager implements TodoClient {

    public async fetchData(): Promise<Array<TodoItem>> {
        const response = await fetch(API.TodoListUrl);
        const data = await response.json();
        return data;
    }
}
