import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input.trim()));
            setInput('');
        }
    };

    return (
        <form onSubmit={addTodoHandler} className="flex items-center space-x-4 mt-10 max-w-md mx-auto">
            <input
                type="text"
                className="flex-1 bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-2 px-4 leading-8 transition duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-5 rounded hover:bg-indigo-600 transition duration-200"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
