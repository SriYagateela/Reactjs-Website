import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Account=()=>{
    const[vendorname, pickName]=useState("");
    const[vendoremail, pickEmail]=useState("");
    const[vendorpassword, pickPassword]=useState("");
    const[vendormobile, pickMobile]=useState("");
    const[message, updateMessage]=useState("");
    const register=()=>{
        alert("ok")
        var newitem={
          "name": vendorname,
          "email": vendoremail,
          "password": vendorpassword,
          "mobile": vendormobile
        };
      //---------Post Function Goes here----------------
        var url="http://localhost:1234/vendor";
        axios.post(url, newitem)
        .then(response=>{
          updateMessage(`Register Successfully!`);
      //-----To Clear Text box-----------------------
          pickName("");
          pickEmail("");
          pickPassword("");
          pickMobile("");
        })
      }

  return(
    <div className="container mt-4">

      <div className="row">
          <div className="Col-lg-12 text-center mb-4">
              <h3 className='text-primary'> Vendor Account </h3>
              <p> <Link to="../">Back To Home </Link></p>
          </div>
      {/* --------------------------- */}
      <div className="col-2"></div>

      {/* --------Login Card--------------- */}
      <div className="col-3">
      <div className="card">
        <div className="card-body bg-info shadow rounded">
          <h5 className="card-title mb-3">Login</h5>
            <form>
              <div className="mb-3">
                <label>E-Mail</label>
                <input type="email" className="form-control"/>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control"/>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-success">Login</button>
              </div>
            </form>
        </div>
          </div>
      </div>

      {/* ------------------------ */}
      <div className="col-1"></div>

      {/* -------------Register Card--------------- */}
      <div className="col-3">
          <div className="card">
        <div className="card-body bg-light shadow rounded">
          <h5 className="card-title mb-3">Register</h5>
          <p className='text-center'> {message} </p>
          <div className="mb-3">
                <label>Vendor Name</label>
                <input type="text" className="form-control"
                onChange={obj=>pickName(obj.target.value)}
                value={vendorname}//To Clear The TExt Box
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control"
                onChange={obj=>pickEmail(obj.target.value)}
                value={vendoremail}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control"
                onChange={obj=>pickPassword(obj.target.value)}
                value={vendorpassword}
                />
              </div>

              <div className="mb-3">
                <label>Mobile No</label>
                <input type="number" className="form-control"
                onChange={obj=>pickMobile(obj.target.value)}
                value={vendormobile}
                />
              </div>

              <div className="mb-3 text-center">
                <button className="btn btn-primary" onClick={register}>Register</button>
              </div>
        </div>
          </div>
      </div>

      {/* --------------------------- */}
      <div className="col-2"></div>

    </div>
    </div>
  )
}

export default Account;


/**
 * Login- Email , Password
 * register- vendor name, email, password, mobile no
 */