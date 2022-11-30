import React from 'react'
import './login.css'
import Google from '../images/google.png'
import GitHub from '../images/github.png'
import login from '../images/login.png'

import {Link} from 'react-router-dom'
const Login = () => {


const googleAuthLogin = () =>{
  window.open("http://localhost:5000/auth/google", "_self")
}

  return (
    <div className="login">
      <h1 className="loginTitle"><Link to="/" className="link">Login Please</Link></h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginBtn google" onClick={googleAuthLogin}>
             <img src={Google} alt="google"  className="icon"/>
             Google
            </div>
            <div className="loginBtn github">
             <img src={GitHub} alt="google" className="icon"/>
             GitHub
            </div>
          </div>

          <div className="center">
            <div className="line"></div>
            <div className="or">OR</div>
          </div>

          <div className="right">
              <img src={login} alt="loginimg" />
          </div>
        </div>
    </div>
  )
}

export default Login