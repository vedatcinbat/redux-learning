import React, { useEffect, useState } from 'react'
import { deleteTask, loadTasks } from '../store/tasks'
import { useDispatch, useSelector } from 'react-redux'

const Tasks = () => {
    const { tasks, loading } = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    /* useEffect(() => {
        store.dispatch(loadTasks())
    }, []); */

    useEffect(() => {
        dispatch(loadTasks())
    }, [])

    const deleteTaskWithId = (id) => {
        dispatch(deleteTask(id))
    }


    return (
        <>
            {loading ? <div>Loading...</div> : (
                <>
                    <div>Tasks</div>
                    <ul>
                        {tasks.map(task => (
                            <div key={task.id}>
                                <li key={task.id}>{task.task}</li>
                                <button onClick={() => deleteTaskWithId(task.id)}>Delete</button>
                            </div>
                        ))}
                    </ul>
                </>
            )}

        </>
    )
}

export default Tasks
