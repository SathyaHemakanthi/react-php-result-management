import React from "react";
import "./stuDash.css";
import stuViewRes from './img/viewResults.png';
import profile from './img/profile.png'
import logout from './img/logout.png'
import {Link} from 'react-router-dom'

export default function stuDash() {
  return (
    <div className="background">
        <Link to='/stuProfile'><img src={profile} alt='Profile Icon' id='stuProf'/></Link>
        <Link to='/'><img src={logout} alt='Logout Icon' id='stuLog'/></Link>
      <h1 className="heading">Hi</h1>
        
      <div className="stuIconBox">
        <div className="stuViewRes">
          <img src={stuViewRes} id="viewRes" alt='' />
        </div>
        <div className="lbRes">
            <h1 className="resTopic">Results</h1>
        </div>
        <div className="resultSheet">
          <p className="sub1">Combined Mathematics</p>
          <p className="sub1Res">10</p>
          <p className="stat1">status</p>
          <p className="sub2">Physics</p>
          <p className="sub2Res">20</p>
          <p className="stat2">status</p>
          <p className="sub3">Chemistry</p>
          <p className="sub3Res">30</p>
          <p className="stat3">status</p>
          <p className="sub4">General English</p>
          <p className="sub4Res">20</p>
          <p className="stat4">status</p>
          <p className="sub5">ICT</p>
          <p className="sub5Res">30</p>
          <p className="stat5">status</p>
          <p className="total">total</p>
          <p className="avg">average</p>
        </div>
      </div>
    </div>
  );
}
