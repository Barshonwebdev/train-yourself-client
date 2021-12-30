import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Dashboard.css';



const Dashboard = () => {
    const {admin} = useAuth()
    const {user, logout}= useFirebase();
    return (
        <div className="mt-2 ">
            <div className=" w-25 bg-dark text-white p-5">
                <h2 className=" bg-dark text-white">Dashboard</h2>
                <ol className="bg-dark p-5 list  ">
                    
                    <br/>
                    {user.email && admin && <NavLink className='bg-dark text-white' to= "/allOrders"activeStyle={{color : "teal", textDecoration: 'underline'}}>Manage All Orders</NavLink>}
                    <br/>
                    <br/>
                    {user.email && !admin && <NavLink className="bg-dark text-white"  to= "/pay"activeStyle={{color : "teal", textDecoration: 'underline'}}> Pay</NavLink>}
                    <br/>
                    <br/>
                    {user.email && admin && <NavLink className='bg-dark text-white' to= "/makeadmin"activeStyle={{color : "teal", textDecoration: 'underline'}}>Make an Admin</NavLink>}
                    <br/>
                    <br/>
                    {user.email && !admin && <NavLink className="bg-dark text-white"  to= "/myOrder"activeStyle={{color : "teal", textDecoration: 'underline'}}> My Orders</NavLink>}
                    <br/>
                    <br/> 
                    {user.email && admin && <NavLink className='bg-dark text-white' to= "/addProduct"activeStyle={{color : "teal", textDecoration: 'underline'}}>Add new package</NavLink>}
                    <br/>
                    <br/>
                    {user.email && !admin && <NavLink className="bg-dark text-white"  to= "/reviewpost"activeStyle={{color : "teal", textDecoration: 'underline'}}> Review</NavLink>}
                    <br/>
                    <br/>
                    {user.email && <button  onClick={logout} className="nav-button-div ">  Log Out
            </button> }

                </ol>
            </div>
        </div>
    );
};

export default Dashboard;