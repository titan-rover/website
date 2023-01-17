import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from "react-router-dom";

import Homepage from './routes/Homepage';
import About from './routes/About';
import URC from './routes/URC';
import Rovers from './routes/Rovers'
import Sponsors from './routes/Sponsors';
import Alumni from './routes/Alumni';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="About" element={<About />}/>
        <Route path="URC" element={<URC />}/>
        <Route path="Rovers" element={<Rovers />}/>
        <Route path="Sponsors" element={<Sponsors />} />
        <Route path="Alumni" element={<Alumni />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

