export default class TodoItem {
    constructor(
        public userid: number,
        public id: number,
        public title: string,
        public completed: boolean
    ) { }
}
