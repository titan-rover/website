import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import App from './App';
import Alumni from './routes/alumni';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="alumni" element={<Alumni />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

