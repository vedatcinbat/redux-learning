import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
        completeTask: (state, action) => {
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })
        }
    }
})

export const {addTask, removeTask, completeTask} = taskSlice.actions;
export default taskSlice.reducer;



// ActionTypes
/* export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK"; */

// Action Creators
/* export const addTask = createAction("ADD_TASK")
export const removeTask = createAction("REMOVE_TASK")
export const completeTask = createAction("TASK_COMPLETED") */

/* export const addTask = (task) => {
    return {type: ADD_TASK, payload: {task: task}}
}

export const removeTask = (id) => {
    return {type: REMOVE_TASK, payload: {id: id}}
}

export const completeTask = (id) => {
    return {type: COMPLETE_TASK, payload: {id: id}}
} */

/* export const fetchTodo = () => async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const task = await response.json();
    dispatch(addTask(task.title));
}
*/
// Reducer
/* let id = 0;

export default createReducer([], {
    [addTask.type]: (state, action) => {
        state.push({
            id: ++id,
            task: action.payload.task,
            completed: false
        })
    },
    [removeTask.type]: (state, action) => {
        return state.filter(task => task.id !== action.payload.id);
    },
    [completeTask.type]: (state, action) => {
        return state.map(task => {
            if (task.id === action.payload.id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        })
    }
}) */

/* export default function reducer(state = [], action) {
    switch (action.type) {
        case addTask.type:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ]
        case removeTask.type:
            return state.filter(task => task.id !== action.payload.id);

        case completeTask.type:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })
        default:
            return state;
    }
}
 */