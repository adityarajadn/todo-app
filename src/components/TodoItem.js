import React from 'react';

function TodoItem({task, deleteTask, toggleCompleted}) {
    //fungsi menangani perubahan: memanggil fungsi toogleCompleted
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150 group">
            <input
                type = "checkbox"
                checked = {task.completed}
                onChange = {handleChange}
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <p className={`flex-1 text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.text}
            </p>
            <button 
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1 text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-colors duration-200 font-semibold opacity-0 group-hover:opacity-100"
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem;