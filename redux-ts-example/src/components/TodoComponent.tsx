import React from 'react'
import { AddTodoRequest, Todo } from '../store/types'
import { AppDispatch, RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, changeTodoCompleteStatus, deleteTodoItem } from '../store/todoSlice';

const TodoComponent = () => {
    const allTodos: Todo[] = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch<AppDispatch>();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const addNewTodo = () => {
        const newTodo: AddTodoRequest = {
            title,
            description
        }
        dispatch(addTodo(newTodo));
    }


    return (
        <>
            <div>Add New Todo</div>
            <div>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                <button onClick={addNewTodo}>Add</button>
            </div>
            <div>All Todos</div>
            {allTodos.map((todo: Todo) => (
                <div key={todo.id}>
                    <h3>{todo.id} {todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                    <button
                        onClick={() => dispatch(
                            changeTodoCompleteStatus(todo.id)
                        )}
                    >{todo.completed ? 'undone' : 'done'}</button>
                    <button
                        onClick={() => dispatch(deleteTodoItem(todo.id))}
                    >Delete Todo</button>
                </div>
            ))}

        </>
    )
}

export default TodoComponent
