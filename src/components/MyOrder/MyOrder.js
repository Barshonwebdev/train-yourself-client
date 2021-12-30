import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const {user} = useAuth();

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        const url = `https://fathomless-reaches-77675.herokuapp.com/myOrder?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then (data=> setUsers(data));
    },[])

    const handleDeleteUser= id =>{
        const proceed= window.confirm('Are you sure you want to remove it?');

        if (proceed){
         const url = `https://fathomless-reaches-77675.herokuapp.com/myOrder/${id}`;
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
            
           <h1 className="text-primary mt-5">Your Current Orders are- </h1>
           <ol className="w-50 mx-auto">
                {
                    users.map(user=> <li className="mb-3" key={user._id}> Client: {user.Name} | Address:{user.address} | Package Name: {user.product} 
                    <button className="btn-danger ms-5" onClick={()=>
                    handleDeleteUser(user._id)}> Remove Order</button></li>)
                }
            </ol>
        </div>
    );
};

export default MyOrder;