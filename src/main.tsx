import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import './index.css'
import Login from './pages/LoginPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
<Route path='/login' element= {<Login></Login>}></Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)