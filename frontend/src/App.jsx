import React from 'react'
import './App.css'
import Hoome from './compoents/UTILITY/Hoome'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Dashboard from './compoents/dashboad/student_dashboard.jsx'
import MentorLogin from './compoents/loginpage/mentorLogin.jsx'
import StudentLogin from './compoents/loginpage/studentLogin.jsx'




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Hoome/> }/>
      <Route path='/mentorlogin' element={ <MentorLogin /> }/>
      <Route path='/studentlogin' element={<StudentLogin />}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
