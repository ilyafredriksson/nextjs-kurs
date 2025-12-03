"use client";

import { useState } from "react";

export default function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
        setTodos([...todos,{id:Date.now(),
            text:newTodo,
            completed:false
        }])
        setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
    return (
    <div>
        {/* Lägg till ny todo */}
        <div className="flex gap-2 mb-6">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => {if (e.key === 'Enter') addTodo()}}
                placeholder="Lägg till en ny todo..."
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
            Lägg till
            </button>
        </div>
        {/* Lista över todos */}
        <div className="space-y-2">
            {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Inga todos. Lägg till en</p>

            ) : (
                todos.map((todo) => (
                    <div
                    key={todo.id}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded hover:bg-gray-50 transition"
                    >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="w-5 h-5 cursor-pointer"
                    />
                    {/* Todo text */}
                    <span
                    className={`flex-1 text-lg ${
                        todo.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                    >
                    {todo.text}
                    </span>
                    {/* Radera knapp */}
                    <button
                    onClick={()=>deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 semibold"
                    >
                    Radera
                    </button>
                    </div>
                ))
            )}

            {/*Statistik */}
            <div className="mt-6 text-sm text-gray-600">
                Totalt: {todos.length} |
                Klara: {todos.filter(t => t.completed).length} |
                Ej klara: {todos.filter(t => !t.completed).length}
            </div>
        </div>
    </div>
  );
}