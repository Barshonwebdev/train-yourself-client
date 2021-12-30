import React from 'react';
import { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    const [success, setSuccess]= useState(false);
    const handleOnBlur= e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://fathomless-reaches-77675.herokuapp.com/users', {
            method: 'PUT',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then (res => res.json())
        .then (data=> {
            if (data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
           
            
        })
        e.preventDefault();
    
    }
    return (
        <div>
            
            <h2 className="text-primary mt-5"> Make an Admin!</h2>
            <form onSubmit={handleAdminSubmit} >
            <input placeholder="email" onBlur={handleOnBlur} type="email"/>
            <br/>
            <input className="mt-4 btn-primary" type="submit" value="Make Admin" />
            </form>
            {success && <p className="mt-4">Successfully added admin.</p>}
        </div>
    );
};

export default MakeAdmin;