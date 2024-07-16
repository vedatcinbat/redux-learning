import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todo from './components/TodoComponent';
import TodoComponent from './components/TodoComponent';

const App: React.FC = () => {
  return (
    <>
      {/* <div className="App">
      <header className="App-header">
        <h1>React Redux Toolkit TypeScript Example</h1>
        <Counter />
      </header>
    </div> */}
      <div>
        <TodoComponent />
      </div>
    </>
  );
};

export default App;
