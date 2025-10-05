import React from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hoome from './components/UTILITY/Hoome.jsx' 
import MentorLogin from './components/loginpage/MentorLogin.jsx'
import StudentLogin from './components/loginpage/StudentLogin.jsx'
import Mainstudentdashboard from './components/Studentdashboard/Mainstudentdashboard.jsx'
import Mainmentorship from './components/mentorship/mainmentorship.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hoome/>}/>
      <Route path='/mentorlogin' element={ <MentorLogin /> }/>
      <Route path='/studentlogin' element={<StudentLogin />}/>
      <Route path='/mainstudentdashboard' element={<Mainstudentdashboard />}/>
      <Route path='/mainstudentdashboard/mainmentorship' element={<Mainmentorship />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
