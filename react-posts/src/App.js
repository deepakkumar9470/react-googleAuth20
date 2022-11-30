import React, { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AddPost from './components/Add';
import EditPost from './components/EditPost';

function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {

    const fetchLoginSuccess = async () => {
      try {
        const res = await fetch('http://localhost:5000/auth/login/success', {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        });
        const resObj = await res.json()
        setUser(resObj.user)

      } catch (error) {
        console.log(error)
      }
    }

    fetchLoginSuccess()

  }, [])

  return (
    <>

      <div>
        <Navbar user={user} />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/add' element={user ? <AddPost /> : <Navigate to="/login" />} />
          <Route path='/edit/:id' element={user ? <EditPost /> : <Navigate to="/login" />} />

          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />

        </Routes>
      </div>


    </>
  );
}

export default App;
