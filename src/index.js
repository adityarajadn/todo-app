// Import library React untuk membuat komponen
import React from 'react';
// Import ReactDOM untuk render React ke DOM browser
import ReactDOM from 'react-dom/client';
// Import file CSS global untuk styling seluruh aplikasi (termasuk Tailwind directives)
import './index.css';
// Import komponen App sebagai root component
import App from './App';
// Import fungsi reportWebVitals untuk mengukur performa aplikasi
import reportWebVitals from './reportWebVitals';

// Membuat root untuk React 18+ menggunakan createRoot API
// document.getElementById('root') mencari element dengan id="root" di index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render aplikasi React ke dalam root element
root.render(
  // StrictMode adalah wrapper untuk mengaktifkan pengecekan tambahan di development mode
  // Membantu menemukan potential bugs dan deprecated APIs
  <React.StrictMode>
    {/* Render komponen App sebagai entry point aplikasi */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Memanggil fungsi reportWebVitals untuk mengukur dan melaporkan performa aplikasi
// Bisa diisi dengan console.log atau dikirim ke analytics service
reportWebVitals();
