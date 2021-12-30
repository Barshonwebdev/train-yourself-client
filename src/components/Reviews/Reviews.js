import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Singlereview from '../Singlereview/Singlereview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://fathomless-reaches-77675.herokuapp.com/reviewpost')
        .then(res => res.json())
        .then(data=>setReviews(data)); 
    },[reviews])
    return (
        <div>
            
            <h1 className="text-primary mt-5">Testimonials by our beloved customers</h1>
            <div className="homepage-service-container">
            {  reviews.length===0 ? <Spinner animation="border" variant="success" />
            
            :
            <Row sm={1} md={3} className= "g-4 " > 
               {reviews.map(review=><Singlereview key={review._id} review={review}></Singlereview>) }

               </Row>

            }
            </div>
        </div>
    );
};


export default Reviews;