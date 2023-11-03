import React, { useState } from 'react';

const TodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            return;
        }
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos]
        updatedTodos.splice(index, 1)
        setTodos(updatedTodos);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <div>
                <input 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new item to add"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todoItem, index) => {
                    console.log(`Todo at index ${index}:`, todoItem); 
                    return (
                    <li key={index}>
                        {todoItem}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoComponent;
