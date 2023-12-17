import React, { useState } from 'react'
import './LoginSigup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup = () => {
    const [action,setAction]=useState("login")
  return (
    <div className='container'>
   <div className="header">
      <div className="text">{action}</div> 
      <div className="underline"></div>
   </div>
   <div className="inputs">
    {action==="login"?<div></div>:
        <div className="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder='Name'/>
    </div>
    }
    <div className="input">
    <img src={email_icon} alt="" />
        <input type="email" placeholder='Email' />
    </div>

    <div className="input">
        <img src={password_icon} alt="" />
        <input type="password"  placeholder='Password'/>
    </div>

   </div>
   {action==="Sign up"?<dv></dv>:
   <div className="forgot-password">Lost password?<span>click here</span></div>}
   <div className="submit-container">
    <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
    <div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>{setAction("login")}}>login</div>
   </div>
    </div>
  )
}

export default LoginSignup
