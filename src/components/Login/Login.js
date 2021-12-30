import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData]= useState({});
    const {signInUsingGoogle, loginUser, user,isLoading  } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url= location.state?.from;
    console.log(location.state?.from);
 
    
    const handleGoogleLogin = () =>{
      signInUsingGoogle()
      .then(result => {
        console.log(result.user);
        if (redirect_url==undefined){
          history.push("/home")
        }
        else{

        history.push(redirect_url); }
    })
      
    }
    const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
      console.log(newLoginData)
  }

  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
}

    return (
        <div className="mt-5">
            <h2>Please Login</h2>
            <br/>
            <button onClick={handleGoogleLogin} className= "btn-primary">Google Sign In</button>
            <br/>
            <br/>
            <h4>Or,</h4>
            <form onSubmit={handleLoginSubmit}>
              
              
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input name="email" type="email" className="form-control" id="inputEmail3" onBlur={handleOnChange} required/>
              </div>
              </div>
              
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input name="password" type="password" className="form-control" id="inputPassword3" onBlur={handleOnChange} required/>
                </div>
              </div>

             
              
            <button type="submit" className="btn btn-primary">Login </button>
       </form>
       <NavLink className="already-reg" to="/register"> <button className="mt-5 btn-danger"> New User?</button></NavLink>
            </div>
            
            
    );
};

export default Login;