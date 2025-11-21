// Import React dan hook useState untuk state management
import React, { useState } from 'react';
// Import komponen TodoItem untuk menampilkan setiap task
import TodoItem from './TodoItem';

// Deklarasi komponen TodoList sebagai komponen utama untuk mengelola daftar todo
function TodoList() {
  // State untuk menyimpan array tasks, diinisialisasi dengan 2 task default
  const [tasks, setTasks] = useState([
    { 
        id: 1, // ID unik untuk task pertama
        text: 'Tugas 1', // Text deskripsi task
        completed: true }, // Status task sudah selesai
    { 
        id: 2, // ID unik untuk task kedua
        text: 'tugas 2', // Text deskripsi task
        completed: false }, // Status task belum selesai
  ]);

  // State untuk menyimpan input text dari user, diinisialisasi dengan string kosong
  const [text, setText] = useState('');

  // Fungsi untuk menambahkan task baru ke dalam list
  function addTask(text) {
    // Validasi: jika input kosong atau hanya spasi, tidak melakukan apa-apa
    if (text.trim() === '') return;

    // Membuat object task baru
    const newTask = {
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
      text, // Text dari parameter (shorthand untuk text: text)
      completed: false, // Task baru default belum selesai
    };

    // Update state tasks: spread operator untuk copy tasks lama + tambah newTask
    setTasks([...tasks, newTask]);
    // Reset input field menjadi kosong setelah task ditambahkan
    setText('');
  }

  // Fungsi untuk menghapus task berdasarkan ID
  function deleteTask(id) {
    // Filter tasks: hanya ambil task yang id-nya tidak sama dengan parameter id
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Fungsi untuk toggle status completed task berdasarkan ID
  function toggleCompleted(id) {
    // Update state tasks dengan map untuk mengubah task tertentu
    setTasks(
      tasks.map((task) => {
        // Jika task.id sama dengan parameter id
        if (task.id === id) {
          // Return task baru dengan spread operator dan toggle completed
          return { ...task, completed: !task.completed };
        }
        // Jika bukan task yang dicari, return task asli tanpa perubahan
        return task;
      })
    );
  }

  // Return JSX untuk render komponen
  return (
    // Container utama: max width medium, center, background putih, rounded, shadow, padding
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header/judul todo list dengan styling: ukuran besar, bold, warna abu tua, margin bottom, center */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Todo List</h1>
      
      {/* Container untuk list tasks dengan space antar items dan margin bottom */}
      <div className="space-y-2 mb-6">
        {/* Loop melalui array tasks dan render TodoItem untuk setiap task */}
        {tasks.map((task) => (
          <TodoItem
            key={task.id} // Key unik untuk React list rendering
            task={task} // Pass object task sebagai prop
            deleteTask={deleteTask} // Pass fungsi deleteTask sebagai prop
            toggleCompleted={toggleCompleted} // Pass fungsi toggleCompleted sebagai prop
          />
        ))}
      </div>

      {/* Container untuk input dan button dengan flexbox dan gap */}
      <div className="flex gap-2">
        {/* Input field untuk menambah task baru */}
        <input
          value={text} // Controlled component: value dari state text
          onChange={(e) => setText(e.target.value)} // Event handler: update state text saat user mengetik
          placeholder="Add new task..." // Placeholder text
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          // Styling: flex-1 untuk mengisi space, padding, border, rounded, focus ring biru
        />
        {/* Button untuk submit/add task */}
        <button 
          onClick={() => addTask(text)} // Event handler: panggil addTask dengan value text saat diklik
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
          // Styling: padding, background biru, text putih, bold, rounded, hover effect, transition, shadow
        >
          Add {/* Text button */}
        </button>
      </div>
    </div>
  );
}

// Export komponen TodoList agar bisa digunakan di file lain
export default TodoList;
