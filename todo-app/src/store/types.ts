export interface TodoItem {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoState {
    todos: TodoItem[];
}

export interface AddTodoRequestItem {
    title: string;
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';