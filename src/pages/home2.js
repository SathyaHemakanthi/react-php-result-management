import React from 'react'
import { Link } from 'react-router-dom'
import "./home2.css"

export default function home2() {
  return (
    <div>
        <div className='background'>
            <h1 className='heading'>Student Management System</h1>
            <div id='buttonbox'>
                    <div id='title'><h1>Lets Start</h1></div>
                    <div id='login_box'><Link to="/Login"><button className='button' type='submit'>Sign In</button></Link></div>
                    <div id='signup_box'><Link to="/reg"><button className='button'>Sign UP</button></Link></div>
            </div>
            </div>
    </div>
  )
}
