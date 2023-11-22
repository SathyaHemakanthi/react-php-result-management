import React from 'react'
import './Prof.css'
import homeIcon from './img/Home.png'
import profile from './img/profile.png'
import {Link} from 'react-router-dom'

export default function stuProf() {
  return (
    <div>
      <p className='wel'>Welcome</p> 
      <img src={profile} alt="Profile" id='prof'/>
        <Link to='/stuDash'><img src={homeIcon} alt='Home Icon' id='ho'/></Link>
      <div className="stuProfile">
      <label className="lab" id="role">
          Job Role
        </label>
        <label className="inp" id="in_role">
          .......
        </label>

        <label className="lab" id="nati">
          NIC
        </label>
        <label className="inp" id="in_nati">
          .......
        </label>

        <label className="lab" id="fnam">
          First Name
        </label>
        <input type="text" className="inp" id="in_fnam" />

        <label className="lab" id="lnam">
          Last Name
        </label>
        <input type="text" className="inp" id="in_lnam" />

        <label className="lab" id="add">
          Address
        </label>
        <input type="text" className="inp" id="in_add" />

        <label className="lab" id="num">
          Phone Number
        </label>
        <input type="text" className="inp" id="in_num" />

        <label className="lab" id="mail">
          Email
        </label>
        <input type="text" className="inp" id="in_mail" />

        <label className="lab" id="pwd">
          Password
        </label>
        <input type="text" className="inp" id="in_pwd" />

        <button type='update' className="btnupdate" id='stuupdate' name='Update' value='Update'>Update</button>
      </div>
    </div>
  )
}
