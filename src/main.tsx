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
        <Route path="/" element={<App />} >
          
        </Route>
        <Route path="result/:id" element={<Result />} >
          
            </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
