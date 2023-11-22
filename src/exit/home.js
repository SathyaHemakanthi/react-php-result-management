import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import bgimg from './img/background.jpeg'
import logo from './img/logo.png'
import std from './img/student.png'

export default function home() {
  return (
    <div>
        <img src={bgimg} alt="background" id='bgimg'/>
        <div className='background'>
        
            <div className='button_box'>
            <img src={logo} alt="background" id='logo1'/>
            <img src={logo} alt="background" id='logo2'/>
                <div id='title'><h1>Student Management System</h1></div>
                <div id='imgbox'>
                    <img src={std} alt="background" id='logo3'/>
                </div>
                <div id='buttonbox'>
                    <div id='title_box'><h1>Lets Start</h1></div>
                    <div id='login_box'><Link to="/login"><button className='button' type='submit'>Sign In</button></Link></div>
                    <div id='signup_box'><Link to="/reg"><button className='button'>Sign UP</button></Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}
