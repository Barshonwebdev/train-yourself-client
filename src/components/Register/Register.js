import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; 

import './Register.css'

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
}

const handleLoginSubmit = e => {
 
  registerUser(loginData.email, loginData.password, loginData.name, history);
  e.preventDefault();
  
}
    return (
        <div className="mt-5">
            <h2>Please Register</h2>
            <br/>
            

            <form onSubmit={handleLoginSubmit}>
              
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input name="name" onBlur={handleOnBlur} type="text" className="form-control"   required/>
              </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input name="email" type="email" className="form-control" id="inputEmail3" onBlur={handleOnBlur} required/>
              </div>
              </div>
              
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input name="password" type="password" className="form-control" id="inputPassword3" onBlur={handleOnBlur} required/>
                </div>
              </div>

              
            <button type="submit" className="btn btn-success">Register  </button>
       </form>
       <br/>
       <br/>
       <NavLink className="already-reg" to="/login"> <button className="btn-danger mt-5"> Already Registered?</button></NavLink>
        </div>
    );
    }

export default Register;