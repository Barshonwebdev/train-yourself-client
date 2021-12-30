import React from 'react';
import './Appointment.css'


const Appointment = () => {
   
    return (
        <div className="appoint-box">
            <h2 className="text-primary">Appointment</h2>
            <form className="row g-3">
                    <div className="col-md-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="number" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                   
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Seek Appointment</button>
                    </div>
                </form>
        </div>
    );
};

export default Appointment;