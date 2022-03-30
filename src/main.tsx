import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import App from './App'
import Result from './routes/Result'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<App />} />
    <Route path="Result" element={<Result />} />
    </Routes>
 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
