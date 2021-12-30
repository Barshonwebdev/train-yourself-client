import React from 'react';
import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { useForm} from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import './ServiceDetails.css'
import axios from 'axios';
const ServiceDetails = () => {
    const{serviceId} = useParams();

    const[detail,setDetail] = useState([])

    const [allData, setAllData]= useState({})

    const {user}= useFirebase();


    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
    data.email=user.email;
    data.Name=user.displayName;
    data.product=allData?.Name
    axios.post('https://fathomless-reaches-77675.herokuapp.com/orders',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('Order Placed successfully');
            reset();
        }
        console.log(res);
        console.log(data);
    })
  };

    useEffect(()=>{
        fetch(`https://fathomless-reaches-77675.herokuapp.com/services`)
        .then(res=> res.json())
        .then(data => setDetail(data) )
    },[reset])

    useEffect(()=>{
      const foundDetail=  detail.find(serviceDetail=> serviceDetail._id == serviceId)
      setAllData(foundDetail);
    },[detail]) 

    

    return (
        
            
            <div className="details-div">
                <h4>Username: {user.displayName}</h4>
                <h4>Email: {user.email}</h4>
                <h2 > <span className="text-primary"> Package Name: </span> {allData?.Name}</h2>
                <img className="img-fluid" src={allData?.image} 
                alt=""/>
                <div className="description">
                    <h4> <span className="text-primary">  Details: </span> {allData?.Description}</h4>
                    <h4> <span className="text-primary">  Price: </span> {allData?.Price}</h4>
                </div>
                <div className="form">
                    <h1>Selected this package? Fill the form!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                               
                                <p>Address</p>
                                <input className="form-box"  {...register("address", { required: true })} />
                                
                                <p>Phone Number</p>
                                <input className="form-box"  {...register("PhoneNumber", { required: true })} />
                                
                                <br/>
                                <input type="submit" className="btn-primary" value="Place Order" />
                    </form>
                </div>
            </div>
        
    );
};

export default ServiceDetails;