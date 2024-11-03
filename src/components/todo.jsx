import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="max-w-lg lg:mx-auto mt-10 mx-4 p-6 bg-gray-400 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Todo List</h3>
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li
                        className="flex justify-between items-center bg-gray-600 px-6 py-3 rounded-lg shadow-md"
                        key={todo.id}
                    >
                        <div className="text-lg text-gray-200">{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-gray-100 bg-red-600 hover:bg-red-700 p-2 px-4 font-bold rounded-lg focus:outline-none"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
