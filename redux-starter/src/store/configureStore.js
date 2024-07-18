import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from "./tasks"
//import log from "../middleware/log"
import logger from "redux-logger";
import error from "../middleware/error"


const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employees: employeeReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(), 
        logger, 
        error
    ]
})

export default store;