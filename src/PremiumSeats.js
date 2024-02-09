import React from 'react';
import PremiumTable1 from './PremiumTable1';
import PremiumTable2 from './PremiumTable2';
import PremiumTable3 from './PremiumTable3';

const PremiumSeats = () => {
    const rows = 5;
    const columns = 8;
    const rowNames = Array.from({ length: rows }, (_, index) => String.fromCharCode(65 + index));

    return (
        <div className='app'>
            <h2>Premium Seats</h2>
            <div className="tables-container">
                <div className="row-names-table">
                    {rowNames.map((name, index) => (
                        <div key={index} className="row-name">{name}</div>
                    ))}
                </div>

                <div className="main-table">
                    <PremiumTable1 rows={rows} columns={columns} />
                </div>

                <div className="main-table">
                    <PremiumTable2 rows={rows} columns={columns} />
                </div>
                <div className="main-table">
                    <PremiumTable3 rows={rows} columns={columns} />
                </div>
            </div>
        </div>
    );
}

export default PremiumSeats;
