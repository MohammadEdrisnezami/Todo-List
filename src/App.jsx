import React, { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const trimmedTodo = todo.trim();
    
    if (trimmedTodo === '') {
      alert('Please enter a task');
      return;
    }

    setTodos([...todos, trimmedTodo]);
    setTodo('');
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4"
    >
      <div className="todo-container w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">My Todo List</h1>
        </div>

        <div className="p-6 space-y-4">
          <div className="input-container">
            <input 
              type="text" 
              value={todo}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter your todo here..." 
              className="w-full text-xl bg-gray-100 border-2 border-purple-300 rounded-xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>

          <div className="todo-list max-h-64 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-white">
            {todos.map((item, index) => (
              <div
                key={index}
                className="todo-item flex justify-between items-center bg-purple-50 border border-purple-200 rounded-lg p-3 transform transition hover:scale-102 hover:shadow-md"
              >
                <span className="flex-grow mr-2 text-gray-700">{item}</span>
                <button 
                  onClick={() => removeTodo(index)} 
                  className="text-red-500 hover:bg-red-100 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="action-container">
            <button 
              onClick={addTodo}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-101 active:scale-99"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;