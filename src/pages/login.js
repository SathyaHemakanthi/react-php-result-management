import React from "react";
import "./login.css";
import homeIcon from './img/Home.png'
import {Link} from 'react-router-dom'

export default function login() {
  return (
    <div className="background">
      <div className="homeIcon">
        <Link to='/'><img src={homeIcon} alt='Home Icon' id='home'/></Link>
      </div>
      <div id="log_box">
        <div id="heading">
          <h1 id='login'>Log in</h1>
        </div>
        <div id="inputset">
          <form>
          <lable className='log_lb' id="log_Role" for="JobRole">
              Job Role
            </lable>
            <div>
            <input
              type="radio"
              className="log_input"
              id="logJrole"
              name="jRole"
              value="student"
            />
            Student
            <input
              type="radio"
              className="log_teach"
              id="logJrole"
              name="jRole"
              value="teacher"
            />
            Teacher
            </div>
            <lable className="log_lb" id="log_NIC" for="NIC">
              NIC
            </lable>
            <input
              type="text"
              className="log_input"
              id="logNIC"
              placeholder="NIC"
              required
            />
            <lable className="log_lb" id="log_Pass" for="Password">
              Password
            </lable>
            <input
              type="password"
              className="log_input"
              id="logPass"
              placeholder="Password"
              required
            />       
            <button className='logbutton' type='submit'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
