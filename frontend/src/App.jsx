import React from 'react'
import './App.css'
import Hoome from './compoents/UTILITY/Hoome'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import MentorLogin from './compoents/loginpage/MentorLogin.jsx'
import StudentLogin from "./compoents/loginpage/StudentLogin.jsx"




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Hoome/> }/>
      <Route path='/mentorlogin' element={ <MentorLogin /> }/>
      <Route path='/studentlogin' element={<StudentLogin />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
