import React from "react";
import Student_dashboard from './Student_dashboard.jsx'
import Student_dashboard_navbar from './Student_dashboard_navbar.jsx' 
import QuickStats from './Quick_stats.jsx'
import RepositoriesImpact from './Dashboard_stats.jsx'

function Mainstudentdashboard() {
  return (
    <>
      <Student_dashboard_navbar/>
      <Student_dashboard/>
      <QuickStats/>
      <RepositoriesImpact/>
    </>
  )
}

export default Mainstudentdashboard;
