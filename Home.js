import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>If You are already Registered Go For LogIn</h3>
        <Link to='/Login'>Login</Link>
        <br></br>
        <br></br>
        <h3>Firstly Register here</h3>
        <Link to='/Signup'>SignUp</Link>
    </div>
  )
}
