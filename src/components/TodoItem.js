// Import library React untuk membuat komponen
import React from 'react';

// Deklarasi komponen TodoItem yang menerima props: task, deleteTask, dan toggleCompleted
function TodoItem({task, deleteTask, toggleCompleted}) {
    // Fungsi menangani perubahan checkbox: memanggil fungsi toggleCompleted dengan id task
    function handleChange() {
        // Panggil fungsi toggleCompleted dari parent untuk toggle status completed task
        toggleCompleted(task.id);
    }

    // Return JSX untuk render komponen
    return (
        // Container utama dengan flexbox, padding, background, rounded corners, hover effect, dan group class untuk child elements
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-150 group">
            {/* Input checkbox untuk menandai task sebagai completed/incomplete */}
            <input
                type = "checkbox" // Tipe input checkbox
                checked = {task.completed} // Status checked berdasarkan properti task.completed
                onChange = {handleChange} // Event handler saat checkbox diklik
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" // Styling: ukuran 5x5, warna biru, border abu, rounded, focus ring, cursor pointer
            />
            {/* Paragraph untuk menampilkan text task dengan conditional styling */}
            <p className={`flex-1 text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {/* flex-1 untuk mengisi space, warna abu tua, jika completed: line-through dan warna abu muda */}
                {task.text} {/* Tampilkan text dari task */}
            </p>
            {/* Button untuk menghapus task */}
            <button 
                onClick={() => deleteTask(task.id)} // Event handler untuk delete task berdasarkan id
                className="px-3 py-1 text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-colors duration-200 font-semibold opacity-0 group-hover:opacity-100"
                // Styling: padding horizontal 3, vertical 1, text merah, hover: text putih & bg merah, rounded, transisi warna, font bold, opacity 0 (muncul saat parent di-hover)
            >
                X {/* Text button */}
            </button>
        </div>
    )
}

// Export komponen TodoItem agar bisa digunakan di file lain
export default TodoItem;