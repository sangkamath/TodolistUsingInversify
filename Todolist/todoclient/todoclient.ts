import TodoItem from "../todoitem/todoitem";

export interface TodoClient {
    fetchData(): Promise<Array<TodoItem>>;
}
