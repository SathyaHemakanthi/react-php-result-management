import React, { useState } from "react";

//import "./reg.css";
import reg from "./img/reg.png";

export default function Reg() {
  const [choseMethod, setChoseMethod] = useState(true);

  const std_register = (event) => {
    event.preventDefault();
  };
  return (
    <div className="background">
        <h1 id="heding">User Registation</h1>
        <div id="reg_box">
          {/*image box*/}
          <div id="img_box">
            <img src={reg} alt="" id="img" />
          </div>
          <div id="full_reg_box">
            {/*selection*/}
            <div className="chooce" id="box">
              <div
                id="std_div"
                className={
                  choseMethod === true ? "Student selected" : "Student"
                }
                onClick={() => setChoseMethod(true)}
                style={
                  choseMethod === true
                    ? { background: "white" }
                    : { background: "black" }
                }
              >
                <p>STUDENT</p>
              </div>
              <div
                id="tech_div"
                className={
                  choseMethod === false ? "Teacher selected" : "Teacher"
                }
                onClick={() => setChoseMethod(false)}
                style={
                  choseMethod === false
                    ? { background: "white" }
                    : { background: "black" }
                }
              >
                <p onClick={() => setChoseMethod(false)}>TEACHERS</p>
              </div>
            </div>
            {/*student registation*/}
            <div
              id="std_reg"
              style={
                choseMethod === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <form action="" onSubmit={std_register} id="regf">
                <label htmlFor="" className="lable" id="lbl_fname">
                  First Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="f_name"
                  placeholder="First Name"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_lname">
                  Last Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="l_name"
                  placeholder="Last Name"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_address">
                  Address
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="address"
                  placeholder="Address"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_mobile">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="mobile"
                  placeholder="Phone Number"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_email">
                  Email
                </label>
                <input
                  type="email"
                  className="inputs"
                  id="email"
                  placeholder="Email Address"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_pass">
                  Password
                </label>
                <input
                  type="password"
                  className="inputs"
                  id="password"
                  placeholder="Password"
                  required
                />

                <label htmlFor="" className="lable" id="lbl_repass">
                  Re Enter Password
                </label>
                <input
                  type="password"
                  className="inputs"
                  id="re_password"
                  placeholder="Confirm Your Password"
                  required
                />

                <input type="submit" value="Register" id="button" />
              </form>
            </div>

            {/*teachers registation*/}
            <div
              id="tech_reg"
              style={
                choseMethod === false
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <form action="">
                <label htmlFor="" className="lable" id="lbl_fname">
                  First Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="f_name"
                  placeholder="First Name"
                />

                <label htmlFor="" className="lable" id="lbl_lname">
                  Last Name
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="l_name"
                  placeholder="Last Name"
                />

                <label htmlFor="" className="lable" id="lbl_address">
                  Address
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="address"
                  placeholder="Address"
                />

                <label htmlFor="" className="lable" id="lbl_mobile">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="mobile"
                  placeholder="Phone Number"
                />

                <label htmlFor="" className="lable" id="lbl_email">
                  Email
                </label>
                <input
                  type="text"
                  className="inputs"
                  id="email"
                  placeholder="Email Address"
                />

                <label htmlFor="" className="lable" id="lbl_pass">
                  Password
                </label>
                <input
                  type="password"
                  className="inputs"
                  id="password"
                  placeholder="Password"
                />

                <label htmlFor="" className="lable" id="lbl_repass">
                  Re Enter Password
                </label>
                <input
                  type="password"
                  className="inputs"
                  id="re_password"
                  placeholder="Confirm Your Password"
                />

                <input type="submit" value="Register" id="button" />
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}
