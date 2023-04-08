import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import AdminDashboard from './AdminDashboard';

function App() {
  const isAdmin = () => {};
  const isAuthed = () => {
    const accessToken = localStorage.getItem("access-token");
    const refreshToken = localStorage.getItem("refresh-token");
    console.log("Token A:", accessToken);
    console.log("Token B:", refreshToken);
    return accessToken && refreshToken ? true : false
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
