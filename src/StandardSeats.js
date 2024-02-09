import React from 'react';
import StandardTable1 from './StandardTable1';
import StandardTable2 from './StandardTable2';
import StandardTable3 from './StandardTable3';

const StandardSeats = () => {
    const rows = 5;
    const columns =8;
    const rowNames = Array.from({ length: rows }, (_, index) => String.fromCharCode(65 + index));

    return (
        <div className='app'>
            <h2>Standard Seats</h2>
            <div className="tables-container">
                <div className="row-names-table">
                    {rowNames.map((name, index) => (
                        <div key={index} className="row-name">{name}</div>
                    ))}
                </div>

                <div className="main-table">
                    <StandardTable1 rows={rows} columns={columns} />
                </div>

                <div className="main-table">
                    <StandardTable2 rows={rows} columns={columns} />
                </div>
                <div className="main-table">
                    <StandardTable3 rows={rows} columns={columns} />
                </div>
            </div>
        </div>
    );
}

export default StandardSeats;
