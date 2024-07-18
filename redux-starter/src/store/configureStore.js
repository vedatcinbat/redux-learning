import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from "./tasks"
//import employeeReducer from "./employees";

/* const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employees: employeeReducer
    }
})

export default store;