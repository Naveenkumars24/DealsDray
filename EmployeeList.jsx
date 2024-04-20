import React from 'react'
import './EmployeeList.css'

const EmployeeList = () => {
    function handleLogout() {
        window.location.href = "./";
      }
  return (
    <div>
    <div className="Header">
        LOGO
        <button id="logout-btn" onClick={handleLogout}>
          <b>Logout</b>
        </button>
      </div>
    </div>
  )
}

export default EmployeeList