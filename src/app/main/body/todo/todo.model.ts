export class ToDo {
    todoId: number;
    todoTitle: string;
    createDate: string;
    updateDate?: string;

    // having ? means OPTIONAL
    constructor(todoId: number, todoTitle: string, createDate: string, updateDate?: string) {
        this.todoId = todoId;
        this.todoTitle = todoTitle;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }

}
