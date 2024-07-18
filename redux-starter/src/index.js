import {compose, pipe} from 'lodash/fp';
import {produce} from 'immer';
/* function greeting() {
    return function() {
        return 'Good Morning';
    }
}

let anFunction = greeting();
let message = anFunction();

console.log(message); */

//let message = greeting;

/* function printMessage(anFunction) {
    console.log(anFunction());
}

printMessage(message); */

// Higher Order Function

/* let numbers = [1, 2, 3, 4, 5];

numbers.map(number => number * 10); */


/* let username = '    Vedat  ';
let message = "Hello "+ username.trim() + " Good Morning";

console.log(message); */

// Function Composition

/* const trim = name => name.trim();
const generateMessage = name => `Hello ${name} Good Morning`;
const convertToUpper = name => name.toUpperCase();

const result = generateMessage(convertToUpper(trim(username)));

console.log(result);

// Making code Simple with Compose and Pipe
//const newFunc = compose(generateMessage, convertToUpper, trim);
const newFunc = pipe(trim, convertToUpper, generateMessage);
const res = newFunc(username);
console.log(res); */


// Currying in Functional Programming

/* let username = '    Vedat  ';
let message = "Hello "+ username.trim() + " Good Morning";

const trim = name => name.trim();
const generateMessage = message => name => `Hello ${name}, ${message}`;
const convertToUpper = name => name.toUpperCase();

const newFunc =pipe(trim, convertToUpper, generateMessage('Good Morning'));
const result = newFunc(username);
console.log(result) */
/* 
function multi(a, b) {
    return a * b;
} */
/* function multi(a) {
    return function(b) {
        return a * b;
    }
} */

//const multiple => a => b => a * b;
/* 
let result1 = multi(3)(5);
console.log(result1); */


// Update Object in Functional Programming

/* const employee = {
    name: "Vedat",
    age: 22,
    company: {
        country: "United States",
        city: "San Francisco"
    }
} */

//const newEmp = Object.assign({}, employee, {name: "Alice"});,

/* const newEmp = {
    ...employee, 
    name: 'Alice',
    company: {
        ...employee.company,
        city: 'Los Angeles'
    }
} */


/* const newEmp = produce(employee, (draft) => {
    draft.name = 'Alice';
    draft.company.city = 'Los Angeles';
})


console.log(employee);
console.log(newEmp);
 */



// Immutability in Arrays
// Arrays: Adding Item | Removing Item | Updating Item

/* const numbers = [10, 20, 30, 40];

// Adding Items
const index = numbers.indexOf(30);
const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
//const addedNumbers = [50, ...numbers];

console.log(numbers);
console.log(addedNumbers);

// Update Item
const updated = numbers.map(a => a === 40 ? 80 : a);
console.log(updated);

// Removing Item
const removed = numbers.filter(a => a !== 30);
console.log(removed);
 */

// Exercise: Immutability in Arrays
// From now on dont help me with the code, I will try to solve it myself

// Dont help me with the code, I will try to solve it myself
// Exercise: Immutability in Arrays

/* const book = {
    author: 'Robert Kiyosaki',
    book: {
        name: 'Rich Dad Poor Dad',
        price: "8$",
        rating: 4.7
    }
}

const arrayOfBooks = ["Book1", "Book2", "Book3"]; */

// Change price to 10$ and rating to 4.8

/* const newBook = produce(book, draft => {
    draft.book.price = "10$";
    draft.book.rating = 4.8;
})

console.log(book);
console.log(newBook);

// Replace Book2 with Book4

const newBookArr = arrayOfBooks.map(book => book === "Book2" ? "Book4" : book);

console.log(arrayOfBooks);
console.log(newBookArr); */

import store from './store/configureStore';
import {addTask, removeTask, completeTask, fetchTodo} from './store/tasks';
import { addEmployee } from './store/employees';

/* store.dispatch({
    type: "ADD_TASK",
    payload: {
        task: "Learn Redux"
    }
})

console.log(store.getState());

store.dispatch({
    type: "REMOVE_TASK",
    payload: {
        id: 1
    }
})

console.log(store.getState()); */

/* const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

store.dispatch(addTask({task: "Task 1"}));
store.dispatch(addTask({task: "Task 2"}));

console.log(store.getState()); */

//unsubscribe();

/* store.dispatch(removeTask(1));
console.log(store.getState()); */

/* store.dispatch(completeTask({id: 2}));

console.log(store.getState()); */

/* store.dispatch(fetchTodo());

console.log(store.getState()); */
/* 
store.dispatch(removeTask({id: 1}));

console.log(store.getState()); */

// Add Employee

store.dispatch(addEmployee({name: 'Vedat'}));
store.dispatch(addEmployee({name: 'John'}))
console.log(store.getState())