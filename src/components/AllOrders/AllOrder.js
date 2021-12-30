import React, { useEffect, useState } from 'react';

import './AllOrder.css'

const AllOrder = () => {
    const [users, setUsers]= useState([]);

    useEffect(()=>{
        fetch('https://fathomless-reaches-77675.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then (data=> setUsers(data));
    },[])

    const handleDeleteUser= id =>{
        const proceed= window.confirm('Are you sure you want to remove it?');

        if (proceed){
         const url = `https://fathomless-reaches-77675.herokuapp.com/allOrders/${id}`;
         fetch(url,{
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('deleted successfully');
                 const remainingUsers= users.filter(user => user._id !== id)
                 setUsers(remainingUsers);
             }
         })
        }
 }
    return (
        <div>
            
            <h1 className="text-primary mt-5">All Orders are listed below-</h1>
            <ol className="w-50 mx-auto">
                {
                    users.map(user=> <li className="mb-3" key={user._id}>Client:{user.Name} | Address:{user.address} | Product Name: {user.product} 
                    <button className="btn-danger ms-5" onClick={()=>
                    handleDeleteUser(user._id)}> Remove Order</button></li>)
                }
            </ol>
        </div>
    );
};

export default AllOrder;