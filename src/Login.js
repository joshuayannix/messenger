import React from 'react'
import './Login.css';
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';
import messenger_logo from './messenger_logo.png'

function Login() {
  const signIn = e => {
    auth.signInWithPopup(provider).catch((error => alert(error.message)));
  };

  return (
    <div className='login'>
      <div className="login__logo">
        <img src={messenger_logo} alt='messenger login'/>
      </div>
      <Button onClick={signIn}>Log In</Button>
    </div>
  )
}

export default Login
