import {
  controller, httpGet
} from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../constant/types';
import {TodoClient} from "../todoclient/todoclient";
import TodoItem from "../todoitem/todoitem";

@controller('/todolist')
export class TodoListController {

  constructor(@inject(TYPES.TodoClient) private todoClient: TodoClient) { }

  @httpGet('/')
  public fetchData(): Promise<Array<TodoItem>> {
    return this.todoClient.fetchData();
  }

}
