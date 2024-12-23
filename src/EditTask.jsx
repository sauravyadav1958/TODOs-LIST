import React, { useState } from "react"

const EditTask = ({index, task, id, isDone, updateTask, editFlagUpdate, deleteTodo, doneTodo }) => {
    const [value, setValue] = useState(task)
    const handleSubmit = (e) => {
        // prevent default action like page reload, navigating to a new URL.
        e.preventDefault();
        // edit todo
        updateTask(id, value)
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center gap-1 mt-1">
                <label className="content-center font-bold px-2.5 border-solid border-4 border-black focus:outline-none bg-black text-white rounded">
                    {index + 1}
                </label>
                <textarea type="text" className="p-1 h-10 w-2/4 resize border-solid border-4 border-black focus:outline-none bg-gray-950 text-white rounded" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
                <button type="submit" className="p-1 border-solid border-4 border-black focus:outline-none bg-black rounded">💾</button>
            </form>
        </>
    )
}

export default EditTask
