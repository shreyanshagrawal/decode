import React from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hoome from './components/UTILITY/Hoome.jsx' 
import MentorLogin from './components/login/MentorLogin.jsx'
import StudentLogin from './components/login/StudentLogin.jsx'
import Mainstudentdashboard from "./components/Studentdashboard/Mainstudentdashboard.jsx"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hoome/>}/>
      <Route path='/mentorlogin' element={ <MentorLogin /> }/>
      <Route path='/studentlogin' element={<StudentLogin />}/>
      <Route path='/mainstudentdashboard' element={<Mainstudentdashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
