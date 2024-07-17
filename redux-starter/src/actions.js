export const addTask = (task) => {
    return {type: "ADD_TASK", payload: {task: task}}
}

export const removeTask = (id) => {
    return {type: "REMOVE_TASK", payload: {id: id}}
}