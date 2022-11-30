import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }
  return (
    <div className="navbar">

      <span className="logo"><Link to="/" className='link'>DeepakAuth</Link></span>
      {
        user ?
          (
            <ul className="lists">
              <li className="listItem">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="myimg" className="avataar" />
              </li>

              <Link className="link" to="/add">
                Add
              </Link>
              <li className="listItem">
                Deepak Kumar
              </li>
              <li className="listItem" onClick={logout}>
                Logout
              </li>

            </ul>)
          :
          (
            <Link to="/login" className="link">Login</Link>
          )
      }


    </div>
  )
}

export default Navbar