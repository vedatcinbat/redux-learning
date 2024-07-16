import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddTodoRequest, TodoState } from './types'

const initialState: TodoState = {
    todos: [{
        id: 1,
        title: 'First Todo',
        description: 'This is the first todo',
        completed: false
    
    }]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<AddTodoRequest>) {
            state.todos.push({
                id: state.todos.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            });
        },
        changeTodoCompleteStatus(state, action: PayloadAction<number>) {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if(!todo) return alert('Todo not found');
            todo.completed = !todo.completed;
        },
        deleteTodoItem(state, action: PayloadAction<number>) {
            const todoItem = state.todos.find(todo => todo.id === action.payload);
            if(!todoItem) return alert('Todo not found');
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});

export const { addTodo, deleteTodoItem, changeTodoCompleteStatus } = todoSlice.actions;

export default todoSlice.reducer;