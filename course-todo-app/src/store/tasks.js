import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http";
import { apiCallBegan } from "./api";

let id = 0;
const initialState = {
    tasks: [],
    loading: false,
    error: null
}

/* export const fetchTasks = createAsyncThunk('fetchTasks', async () => {
    try {
        const response = await axios.get("/tasks");
        return {
            tasks: response.data
        }
    } catch (error) {
        return rejectWithValue({ error: error.message })
    }
}) */

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if(!task) return;
            task.completed = action.payload.completed;
        }
    },
    /* extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload.tasks;
                state.loading = false;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
    } */
})

export const { apiRequested, apiRequestFailed, getTasks, addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;

// Action Creators
const url = "/tasks";

export const loadTasks = () => apiCallBegan({
    url,
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type
})

export const addNewTask = (task) => apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
})

export const updateTaskCompleted = (id, completed) => apiCallBegan({
    url: `${url}/${id}`,
    method: 'PATCH',
    data: {completed},
    onSuccess: completeTask.type
})

export const deleteTask = (id) => apiCallBegan({
    url: `${url}/${id}`,
    method: 'DELETE',
    onSuccess: removeTask.type
})

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