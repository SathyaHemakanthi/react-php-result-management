import React, { useEffect, useState } from 'react'
import "./teaDash.css";
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
            <h1 className="sturesTopic">Student Results</h1>
        </div>
        <div className="table">
          <table className='resTable'>
            <thead>
            <tr className='raw1'>
              <th id='cl1'>Student_ID</th>
              <th id='cl2'>Name</th>
              <th id='cl3'>Subject</th>
              <th id='cl10'>Status</th>
              <th id='cl11'>''</th>
            </tr>
            </thead>

            <tbody>
              {mark.map((res)=>
            <tr className='rescolumn'>
              <td>{res.stdid}</td>
              <td>{res.f_name}</td>
              <td>{res.marks}</td>
              <td>pass/fail</td>
              <td><a href='/stuProfile'>view profile</a></td>
            </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
