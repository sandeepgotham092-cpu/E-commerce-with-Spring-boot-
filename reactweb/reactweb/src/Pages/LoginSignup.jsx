import React from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='box'>
      <div className='cname'>
        <p id='style'>STYLEWALA</p><br/>
        <p id='sign'>SIGN UP</p>
      </div>
      <div className='form'>
       <p>First Name:<input type='text'placeholder='First name'/></p><br/>
        <p>Last Name:<input type='text' placeholder='Last name'/></p><br/>
        <p>Email<input type='email' placeholder='Email Adress'/></p><br/>
        <p>Password<input type='password'placeholder='Password'/></p><br/>
        <p><input type='checkbox'/> I am 18 years of age or older and agree to the terms of the <b>Stylewala</b> Agreement and the privacy policy</p>
        <div className='continue'>
          <button >CONTINUE</button>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup