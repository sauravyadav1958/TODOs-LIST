import React, { useState, useEffect } from "react";
import Todo from './Todo.jsx'
import EditTask from './EditTask.jsx'
import { v4 as uuidv4 } from "uuid";



const Header = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    
    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, { id: uuidv4(), task: value, isDone: false, isEditing: false }])
        setValue("")

    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const doneTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const updateTask = (id, newTask) => {
        console.log(id, newTask);
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, task: newTask} : todo))
        editFlagUpdate(id)
    }

    const editFlagUpdate = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))

    }


    return (
        <>
            <div className="bg-gray-700 h-screen">
                <div className="h-32 content-center text-center bg-black">
                    <h1 className="font-bold text-2xl text-white">TODOs LIST </h1>
                </div>


                {/* Alternative: (e) =>  addTodo(e) */}
                <form onSubmit={addTodo} className="mt-20 mb-20 gap-2">
                    <div className="grid grid-cols-1 justify-items-center space-y-5">
                        <textarea className="rounded p-1 h-32 w-2/4 resize border-solid border-4 border-black focus:outline-none bg-gray-800 text-white" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter any task" ></textarea>
                        <button tybe="submit" className="bg-gray-800 hover:bg-black px-3 py-0 h-9 border-solid border-4 text-white border-black rounded font-bold ">Save</button>
                    </div>
                </form>
                <div>

                    {todos.map((T) => T.isEditing ? <EditTask index = {todos.indexOf(T)} key={T.id} task={T.task} id={T.id} isDone={T.isDone} updateTask={updateTask} deleteTodo={deleteTodo} doneTodo={doneTodo} /> :
                        <Todo index = {todos.indexOf(T)} key={T.id} task={T.task} id={T.id} isDone={T.isDone} updateTask={updateTask} editFlagUpdate={editFlagUpdate} deleteTodo={deleteTodo} doneTodo={doneTodo} />)}
                </div>

            </div>

        </>
    )
}

export default Header;