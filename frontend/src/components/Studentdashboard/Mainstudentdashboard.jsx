import React from "react";
import Student_dashboard from './Student_dashboard.jsx'
import Student_dashboard_navbar from './Student_dashboard_navbar.jsx' 
import Quick_Stats from './Quick_stats.jsx'
import RepositoriesImpact from './Dashboard_stats.jsx'

function mainstudentdashboard() {
  return (
    <>
      <Student_dashboard_navbar/>
      <Student_dashboard/>
      <Quick_Stats/>
      <RepositoriesImpact/>
    </>
  )
}

export default mainstudentdashboard;
