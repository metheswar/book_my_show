import React, { useContext, useEffect, useState } from 'react';
import Context from './Store/Context';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap'; 
const InputForm = () => {
    const { type, setType, noOfSeats, setNoOfSeats, buyHandler, selectedSeats ,setSelectedSeats, setFull} = useContext(Context);
    const [alerts, setAlert] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        setSelectedSeats(new Set())
        setFull(false)
      },[noOfSeats])
    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleNoOfSeatsChange = (e) => {
        setNoOfSeats(parseInt(e.target.value));
    };

    const checkoutHandler = (e) => {
        e.preventDefault();
        if (selectedSeats.size === noOfSeats) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
                navigate('/')
            }, 3000);
            buyHandler();

        }else{
            alert('select seats')
        }
    };

    return (
        <div className="input-form-container">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group" controlId="type">
                            <label className="form-label">Ticket Type</label>
                            <select className="form-select" value={type} onChange={handleTypeChange} required>
                                <option className='form-items' value="">Select Type</option>
                                <option className='form-items' value="Standard">Standard</option>
                                <option className='form-items' value="Premium">Premium</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="form-group" controlId="seats">
                            <label className="form-label">No of Seats</label>
                            <select className="form-select" value={noOfSeats} onChange={handleNoOfSeatsChange} required>
                                <option value="">Select Seats</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <button className="btn btn-primary checkout-button" onClick={checkoutHandler}>
                            Book seats
                        </button>
                    </div>
                </div>
            </div>
            {alerts && ( 
                <Alert variant="success" onClose={() => setAlert(false)} dismissible>
                    Movie tickets bought successfully!
                </Alert>
            )}
        </div>
    );
}

export default React.memo(InputForm);
