import React,{useEffect, useState} from 'react'
import axios from 'axios'

import './regi.css'
import reg from './img/reg.png'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Reg() {

  let navigate=useNavigate();

  const [choserole, setChoserole] = useState();
  const [issubmit,setissubmit]=useState(false);
  //const [stdinput,setstdinput]=useState({})

  /*const std_input = (event) =>{
      const name=event.target.name;
      const value=event.target.value;
      setstdinput(values =>({...values,[name]:value}));
  }*/

  
  const[Fname,setfname]=useState();
  const[Lname,setlname]=useState();
  const[Address,setaddress]=useState();
  const[Mobile,setmobile]=useState();
  const[Email,setemail]=useState();
  const[Pass,setpass]=useState();
  const[Sub,setsub]=useState();
  const[repass,setrepass]=useState();


  
  //const [errors,seterrors]=useState({});

  const Std_register = (e) =>{
    e.preventDefault();
    if(!(Pass==repass)){
      console.log("no name");
    }
    if(Pass<6){
      console.log("small password");
    }
    else{
    
    //setissubmit=(true);
    const sendData={
      fname:Fname,
      lname:Lname,
      address:Address,
      jrole:choserole,
      mobile:Mobile,
      email:Email,
      pass:Pass,
      repass:repass,
      sub:Sub
    }
    console.log(Fname,Lname,Address,Mobile,Email,Pass,repass,Sub);



    //seterrors(validate(sendData.fname,sendData.lname,sendData.address,sendData.jrole,sendData.mobile,sendData.email,sendData.pass,sendData.repass,sendData.sub));

    axios.post('/api/reg.php',sendData).then((result)=>{
      if(result.data.Status=='Invalid'){
      alert('Invalid User');}
      else{
        console.log(result.data)}
    })}

    /*useEffect(()=>{
      console.log(errors);
      if(Object.keys(errors).length===0 && issubmit){
        console.log(Fname,Lname,Address,Mobile,Email,Pass,repass,Sub);
      }
    })



    const validate=(fname,lname,address,jrole,mobile,email,pass,repass,sub) =>{
        const error= {}
        const regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!fname){
          error.fname="First Name is Required";
        }
        if(!lname){
          error.lname="Last Name is Required";
        }
        if(!address){
          error.address="Address is Required";
        }
        if(!jrole){
          error.jrole="Job Role is Required";
        }
        if(!mobile){
          error.mobile="Phone Number is Required";
        }
        if(!email){
          error.email="Email is Required";
        }
        if(!pass){
          error.pass="Password is Required";
        }
        if(!repass){
          error.repass="Re-Password is Required";
        }
        else{
          if(jrole=="teacher"){
            if(!sub){
              error.sub="Subject is Required";
            }
          }
          if(!(pass==repass)){
            error.passmatch="password not match"
          }
          
        }
        return error;*/
    
  }
  return (
    <div>
      <div id='background'>
        <h1 id='heding'>User Registation</h1>
        <div id='reg_box'>
          {/*image box*/}
          <div id='img_box'>
            <img src={reg} alt="" id='img'/>
          </div>
          <div id='full_reg_box'>
              {/*selection*/}
              <div className='chooce' id='box'>
               <div id="tech_div"><p>SIGN UP</p></div>
              </div>

              {/*registation form*/}
              
              <div>

                <form action="" onSubmit={Std_register}>
                  <div id='formw'>
                    <div>
                      <label className='lable' >Job Role</label><br />
                      <div className='inputs' id='rad'>
                        <span>Student</span><input type="radio" name='job' value="student" onClick={()=>setChoserole("student")} />
                        <span>Teacher</span><input type="radio" name='job' value="teacher" onClick={()=>setChoserole("teacher")} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className='lable' id='lbl_fname'>NIC</label>
                      <input type="text" className='inputs' id='f_name' placeholder='NIC' name='nic' required onChange={(e)=>setfname(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_fname'>First Name</label>
                      <input type="text" className='inputs' id='f_name' placeholder='First Name' name='fname' required onChange={(e)=>setfname(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_lname'>Last Name</label>
                      <input type="text" className='inputs' id='l_name' placeholder='Last Name'name='lname' required onChange={(e)=>setlname(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_address'>Address</label>
                      <input type="text" className='inputs' id='address' placeholder='Address' name='add' required onChange={(e)=>setaddress(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_mobile'>Phone Number</label>
                      <input type="text" className='inputs' id='mobile' placeholder='Phone Number' name='mobile' required onChange={(e)=>setmobile(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_email'>Email</label>
                      <input type="email" className='inputs' id='email' placeholder='Email Address' name='email' required onChange={(e)=>setemail(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_pass'>Password</label>
                      <input type="password" className='inputs' id='password' placeholder='Password' name='pass' required onChange={(e)=>setpass(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="" className='lable' id='lbl_repass'>Re Enter Password</label>
                      <input type="password" className='inputs' id='re_password' placeholder='Confirm Your Password' name='repass'required onChange={(e)=>setrepass(e.target.value)}/>
                    </div>

                    <div id='subrow' style={choserole === "teacher" ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                      <label className='lable'>Subject</label>
                      <select name="subject" id="sub" className='inputs' onChange={(e)=>setsub(e.target.value)}>
                        <option value="">select</option>
                        <option value="sub1" >sub1</option>
                        <option value="sub2">sub2</option>
                        <option value="sub3">sub3</option>
                        <option value="sub4">sub4</option>
                      </select>
                    </div>
                    

                    <div>
                      <input type="submit" value="Register" id="button"/>
                    </div>
                  </div>
                  

                </form>

              </div>



              

            
              
          </div>

        </div>
      </div>
    </div>
  )
}
