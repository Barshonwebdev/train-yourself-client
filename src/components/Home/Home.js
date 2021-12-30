import React from 'react';
import HomepageServices from '../HomepageServices/HomepageServices';
import './Home.css';
import myImage from '../../Images/banner1.jpg'
import myImage2 from '../../Images/midpic.png'
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
         <div>
            <img className="cover img-fluid" src={myImage} alt=""/>
            <div className="d-flex mt-5">
                <img className="w-50 mx-4 mb-5 img-fluid" src={myImage2} alt=""/>
                <h3 className="welcoming w-50">Your body and your mind are two things that need training in order to stay healthy. Join us in our fitness packages and see for yourself the essential of our service. Train yourself, train your mind , train your body. Be fit!</h3>
            </div>
            <HomepageServices></HomepageServices>
            <Reviews></Reviews>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;