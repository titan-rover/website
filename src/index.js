
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


import App  from './App'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

