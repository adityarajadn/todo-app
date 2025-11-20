import React from 'react';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  return (
    <div className="flex justify-center items-center h-screen min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <TodoList />
    </div>
  );
}

export default App;