import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { TodoState, TodoItem, AddTodoRequestItem } from "./types";

const initialState: TodoState = {
    todos: [{
        id: 1,
        title: "Another Things",
        isCompleted: false
    }]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<AddTodoRequestItem>) {
            const newTodo: TodoItem = {
                id: state.todos.length + 1,
                title: action.payload.title,
                isCompleted: false
            };
            state.todos.push(newTodo);
        },
        removeTodo(state, action: PayloadAction<number>) {
            const todoItem = state.todos.find(todo => todo.id === action.payload);
            if(!todoItem) return alert('Todo not found');
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        changeTodoStatus(state, action: PayloadAction<number>) {
            const todoItem = state.todos.find(todo => todo.id === action.payload);
            if(!todoItem) return alert('Todo not found');
            todoItem.isCompleted = !todoItem.isCompleted;
        }
    }
})

export const {addTodo, removeTodo, changeTodoStatus} = todoSlice.actions;

export default todoSlice.reducer;


