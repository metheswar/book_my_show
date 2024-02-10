import React from 'react';
import Button from 'react-bootstrap/Button';
import chairIcon from './chair.png';

const ColorCode = () => {
    return (
        <div className="color-code-container">
            <Button className="available" variant="outline-secondary">
                <img src={chairIcon} alt="Chair Icon" className="icon" />
            </Button>
            <span>Available</span>
            <Button className="selected" variant="outline-secondary" disabled>
                <img src={chairIcon} alt="Chair Icon" className="icon" />
            </Button>
            <span>Selected</span>
            <Button className="booked" variant="outline-secondary" disabled>
                <img src={chairIcon} alt="Chair Icon" className="icon" />
            </Button>
            <span>Booked</span>
            <Button className="unavailable" variant="outline-secondary" disabled>
                ❌
            </Button>
            <span>Unavailable</span>
        </div>
    );
}

export default ColorCode;
