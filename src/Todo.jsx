import React from "react"

const Todo = ({ index, task, id, isDone, updateTask, editFlagUpdate, deleteTodo, doneTodo }) => {


    return (
        <>
            <div className="flex justify-center gap-1 mt-1" >
                <label className="content-center font-bold px-2.5 border-solid border-4 border-black focus:outline-none bg-black text-white rounded">
                    {index + 1}
                </label>

                {isDone ?
                    <label className="p-1 w-2/4 line-through decoration-2 border-solid border-4 border-black focus:outline-none break-words text-white bg-gray-800" >{task}</label> :
                    <label  className="p-1 w-2/4 border-solid border-4 border-black focus:outline-none bg-gray-800 break-words text-white rounded">{task}</label >
                }

                <button className="p-1 border-solid border-4 border-black focus:outline-none bg-black rounded" onClick={() => editFlagUpdate(id)}>✏️</button>
                {/* For onClick, arrow function will work, if we direct pass function it will get called immediately when component renders instead of onClick. */}
                {/* const handleClick = () => deleteTodo(id); can also be used*/}
                <button className="p-1 border-solid border-4 border-black focus:outline-none bg-black rounded" onClick={() => deleteTodo(id)}>❌</button>
                {isDone ?
                    <button className="px-2 border-solid border-4 border-black focus:outline-none bg-orange-300 rounded" onClick={() => doneTodo(id)}>↺</button>:
                    <button className="p-1 border-solid border-4 border-black focus:outline-none bg-black text-white rounded" onClick={() => doneTodo(id)}>✔</button>
                }
            </div>
        </>
    )
}

export default Todo
