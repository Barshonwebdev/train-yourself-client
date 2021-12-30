import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Navigation.css'

const Navigation = () => {

    const {user, logout}= useFirebase();
    return (
        <div className='nav-items'>
            <NavLink className='links' to= "/home" activeStyle={{color : "teal", textDecoration: 'underline'}} >Home</NavLink>
            <NavLink className='links' to= "/explore" activeStyle={{color : "teal", textDecoration: 'underline'}} >Explore</NavLink>
            {user.email && <NavLink className='links' to= "/dashboard" activeStyle={{color : "teal", textDecoration: 'underline'}} >Dashboard</NavLink> }
            
            
            
            {!user.email && 
            <NavLink className="nav-button"  to= "/login" activeStyle={{color : "teal", textDecoration: 'underline'}}><button className="nav-button-div btn-primary">Login </button></NavLink>
             }
            <span className="name mt-3"> {user.displayName} </span>
            
            
        </div>
    );
};

export default Navigation;