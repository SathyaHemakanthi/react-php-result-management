import React, { useEffect, useState } from 'react'
import "./addmark.css"
import profile from './img/profile.png'
import logout from './img/logout.png'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function TeaDash() {


  const[mark,setmark] = useState([]);

  const loadmark =async () =>{
    const result=await axios.get('/api/stdmark.php');
    setmark(result.data.dbresult);
    console.log(result.data.dbresult);
  };

  useEffect(()=>{
    loadmark();
  },[])

  /*function getmarks(){
    axios.post('/api/stdmark.php').then(function(responce){
    
      console.log(responce.data);
  })}*/



  return (
    <div>
        <Link to='/teaProfile'><img src={profile} alt='Profile Icon' id='teaProf'/></Link>
        <Link to='/'><img src={logout} alt='Logout Icon' id='teaLog'/></Link>
      <h1 className="heading">Hi</h1>
        
      <div className="teaIconBox">
        <div className="lbRes">
            <h1 className="sturesTopic">Enter Student Results </h1>
        </div>
        <div id='enter_form'>
            <div id='drop_box'>
                <label id='lbl'>STUDENT</label><br />
                <select name="" id="menu">
                    <option value=""></option>
                </select>
            </div>
            <div id='enter_box'>
                <input type="text" name='marking' placeholder='Marks' />
            </div>
            <div>
                <input type="submit" id='butt'/>
            </div>
        </div>
      </div>
    </div>
  )
}
