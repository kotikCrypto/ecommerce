import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='formSign'>
    <div className="formSignDiv">
      <form >
        <h3 className="formSignTitle">Register</h3>

        <div className="formSignGroups">
          <input type="text" placeholder='Your Username' required />
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
          <input type="password" placeholder='Confirm Your Password' required />
        </div>
        <button>Register</button>
        <p>Don't Have an Account? <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  </div>
  )
}

export default Register