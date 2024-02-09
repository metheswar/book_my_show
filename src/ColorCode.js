import React from 'react';
import Button from 'react-bootstrap/Button';
import chairIcon from './chair.png';


const ColorCode = () => {
    // make the buttons dynamic instead of static
    return (
        <div className="color-code-container">
            <Button
                variant="outline-secondary"
                style={{
                    backgroundColor: 'grey'
                }}
            >
                <img src={chairIcon} alt="Chair Icon" style={{ width: '80%', height: '80%' }} />
            </Button>
            <span>Available</span>
            <Button
                variant="outline-secondary"
                style={{
                    backgroundColor: 'green'
                }}
                disabled={true}
            >
                <img src={chairIcon} alt="Chair Icon" style={{ width: '80%', height: '80%' }} />
            </Button>
            <span>Selected</span>
            <Button
                variant="outline-secondary"
                style={{
                    backgroundColor: 'grey' 
                }}
                disabled={true}
            >
                <img src={chairIcon} alt="Chair Icon" style={{ width: '80%', height: '80%' }} />
            </Button>
            <span>Booked</span>
            <Button
                variant="outline-secondary"
                style={{
                    backgroundColor: 'grey' 
                }}
                disabled={true}
            >
                ❌
            </Button>
            <span>Unavailable</span>
        </div>
    );
}

export default ColorCode;
