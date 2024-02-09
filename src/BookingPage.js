import React, { useContext, useEffect } from 'react';
import Context from './Store/Context';
import InputForm from './InputForm';
import { useNavigate } from 'react-router-dom';
import StandardSeats from './StandardSeats';
import PremiumSeats from './PremiumSeats';
import ColorCode from './ColorCode';

const BookingPage = () => {
    const { selectedMovie } = useContext(Context);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!selectedMovie){
            navigate('/')
        }
    },[selectedMovie,navigate])

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>{selectedMovie}</h2>
                <InputForm />
                <ColorCode />
            </div>
            
            <StandardSeats />
            <PremiumSeats />
            <h2 className='app' style={{marginTop:'20px'}}>SCREEN</h2>
            <hr className='.app' style={{ marginLeft:'50px',width: '90%', borderTop: '10px solid black', borderRadius:'20px' }} />
        </>
    );
};

export default React.memo(BookingPage);
