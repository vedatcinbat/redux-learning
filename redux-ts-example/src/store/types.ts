export interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface CounterState {
    value: number;
}

export interface TodoState {
    todos: Todo[];
}

export interface AddTodoRequest {
    title: string;
    description: string;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
    type: typeof INCREMENT
}

interface DecrementAction {
    type: typeof DECREMENT
}

export type CounterActionTypes = IncrementAction | DecrementAction;