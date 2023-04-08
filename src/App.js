import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  const isAdmin = () => {};
  const isAuthed = () => {
    localStorage.getItem("access-token");
    localStorage.getItem("refresh-token");
    localStorage.getItem("username");
    const role = localStorage.getItem("role");
    console.log("ROLE:", role);
    return true
  };

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/admin"
              element={isAdmin() ? <AdminDashboard /> : <Navigate to="/" />}
            />
            <Route 
              path="/"
              element={isAuthed() ? <Home /> : <Navigate to="/login" />}
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
