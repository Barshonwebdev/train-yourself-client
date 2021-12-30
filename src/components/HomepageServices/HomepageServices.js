import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HomepageSingleService from '../HomepageSingleService/HomepageSingleService';
import "./HomepageServices.css"

const HomepageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-reaches-77675.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data)); 
    },[services])
    return (
        <div>
            <h1 className="homeservice-title text-primary">Our Best Packages</h1>
            <h4 className="text-success">Have a look around what we are mostly famous for!</h4>
            <div className="homepage-service-container">
            {  services.length===0 ? <Spinner animation="border" variant="success" />
            
            :
            <Row sm={1} md={3} className= "g-4 " > 
               {services.slice(10,13).map(service=><HomepageSingleService key={service._id} service={service}></HomepageSingleService>) }

               </Row>

            }
            </div>
        </div>
    );
};

export default HomepageServices;