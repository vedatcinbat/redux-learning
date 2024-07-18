import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/tasks';
import Tasks from './Tasks';

const AddTask = () => {
    const [newTask, setNewTask] = useState(''); 
    const dispatch = useDispatch();

    const addNewTaskWithValue = (e) => {
        e.preventDefault();
        dispatch(addNewTask({ task: newTask }));
        setNewTask(''); // Reset the input field
    }

    return (
        <div>
            <h2>Add Task</h2>
            <div>
                <input
                    value={newTask}
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addNewTaskWithValue} type="submit">Add Task</button>
            </div>
            <Tasks />
        </div>
    );
}

export default AddTask;
