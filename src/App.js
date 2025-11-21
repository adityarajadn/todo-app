// Import library React untuk membuat komponen
import React from 'react';
// Import komponen TodoList dari folder components
import TodoList from './components/TodoList';
// Import file CSS untuk styling tambahan (jika ada)
import './App.css'

// Deklarasi komponen App sebagai root component aplikasi
function App() {
  // Return JSX untuk render komponen
  return (
    // Container utama dengan flexbox untuk center content, full screen height, gradient background, padding
    // flex: aktifkan flexbox
    // justify-center: center horizontal
    // items-center: center vertical
    // h-screen & min-h-screen: tinggi minimal full viewport
    // bg-gradient-to-br: gradient dari top-left ke bottom-right
    // from-blue-50 to-indigo-100: warna gradient dari biru muda ke indigo
    // py-8: padding vertical
    // px-4: padding horizontal
    <div className="flex justify-center items-center h-screen min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {/* Render komponen TodoList di tengah layar */}
      <TodoList />
    </div>
  );
}

// Export komponen App agar bisa digunakan di file lain (index.js)
export default App;