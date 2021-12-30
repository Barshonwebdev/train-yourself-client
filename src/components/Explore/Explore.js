import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HomepageSingleService from '../HomepageSingleService/HomepageSingleService';
import "./Explore.css"

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-reaches-77675.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data)); 
    },[])
    return (
        <div>
            <h1 className="homeservice-title text-primary mt-5">Package Collections</h1>
            <h4 className="text-success"> Here you can see all the available packages </h4>
            <div className="homepage-service-container">
            {  services.length===0 ? <Spinner animation="border" variant="success" />
            
            :
            <Row sm={1} md={2} className= "g-4 " > 
               {services.slice(10,20).map(service=><HomepageSingleService key={service._id} service={service}></HomepageSingleService>) }

               </Row>

            }
            </div>
        </div>
    );
};

export default Explore;