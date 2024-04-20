import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<App/>} />
    <Route path='/dashboard' element= {<Dashboard/>} />
  </Routes>
  </BrowserRouter>
)
