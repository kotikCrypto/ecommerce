import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='formSign'>
      <div className="formSignDiv">
        <form >
          <h3 className="formSignTitle">Login</h3>

          <div className="formSignGroups">
            <input type="text" placeholder='Your Username' required />
            <input type="password" placeholder='Your Password' required />
          </div>
          <button>Login</button>
          <p>Don't Have an Account? <Link to="/register">Register Here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login