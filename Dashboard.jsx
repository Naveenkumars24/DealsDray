import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [logins, setLogins] = useState([]);

  useEffect(() => {
    fetch('/api/login')
      .then(response => response.json())
      .then(data => {
        setLogins(data);
        console.log(logins);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function handleLogout() {
    window.location.href = "./";
  }
  return (
    <>
      <div className="Header">
        LOGO
        <button id="logout-btn" onClick={handleLogout}>
          <b>Logout</b>
        </button>
      </div>
      <hr></hr>
      <div className="body">
        <p>
          Welcome<span style={{ color: "#D41F30" }}> admin!</span>
        </p>
        <div id="boxes">
          <div id="employee-list" >Employee List</div>
          <div id="create-employee">Create Employee</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
