import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoRequestItem, TodoItem } from '../store/types';
import { AppDispatch, RootState } from '../store/store';
import { addTodo, changeTodoStatus, removeTodo } from '../store/todoSlice';

const TodoForm: React.FC = () => {

    const allTodos: TodoItem[] = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch<AppDispatch>();

    const [todoInput, setTodoInput] = useState<string>('');

    const addNewTodo = () => {
        dispatch(addTodo({ title: todoInput }));
    }

    const changeTodoStatusWithId = (id: number) => {
        dispatch(changeTodoStatus(id))
    }

    const removeTodoWithId = (id: number) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
            <div>TodoForm</div>
            <h2>Add Todo</h2>
            <div>
                <input onChange={(e) => setTodoInput(e.target.value)} type="text" placeholder="Add Todo..." />
                <button onClick={addNewTodo}>Add Todo</button>
            </div>
            <h2>All Todos</h2>
            {allTodos.map((todo: TodoItem) => (
                <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.isCompleted}</div> 
                    <button onClick={() => changeTodoStatusWithId(todo.id)}>{todo.isCompleted ? 'Not Done' : 'Done'}</button>
                    <button onClick={() => removeTodoWithId(todo.id)}>Delete Todo</button>
                </div>
            ))}
        </>
    )
}

export default TodoForm
