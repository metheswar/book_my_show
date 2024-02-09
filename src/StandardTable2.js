import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from './Store/Context';
import chairIcon from './chair.png';

function StandardTable2({ rows, columns }) {
  const { type, selectedMovie, selectedSeats, setSelectedSeats, noOfSeats, full, setFull, alreadyBooked } = useContext(Context);

  const validate = (key) => {
    if (alreadyBooked.has(selectedMovie)) {
      const bookedSeats = alreadyBooked.get(selectedMovie);
      if (bookedSeats.includes(key)) {
        return true;
      }
    }
    if (type === undefined) {
      return false;
    }
    if (!type || type === 'Premium' || !selectedSeats) {
      return true;
    }
    if (selectedSeats.has(key)) {
      return true;
    }
    return false;
  };

  const submitHandler = (key) => {
    if (type === undefined || noOfSeats === undefined) {
      return;
    }
    if (full) {
      selectRemainingSeat(key);
      return;
    }
    if (selectedSeats.size >= noOfSeats) {
      return;
    }

    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);
      newSelectedSeats.add(key);

      if (noOfSeats > 1) {
        const [type, row, seat] = key.split('_');
        const seatNumber = parseInt(seat);

        let consecutiveSeats = 1;
        while (consecutiveSeats < noOfSeats) {
          const nextSeatKey = `${type}_${row}_${seatNumber + consecutiveSeats}`;
          if (!validate(nextSeatKey) && seatNumber + consecutiveSeats <= columns) {
            newSelectedSeats.add(nextSeatKey);
            consecutiveSeats++;
          } else {
            break;
          }
        }
      }
      setFull(true);
      return newSelectedSeats;
    });
  };

  const selectRemainingSeat = (key) => {
    if (selectedSeats.size === noOfSeats) {
      return;
    }
    if (!selectedSeats.has(key)) {
      setSelectedSeats((prevSelectedSeats) => {
        const newSelectedSeats = new Set(prevSelectedSeats);
        newSelectedSeats.add(key);
        return newSelectedSeats;
      });
    }
  };

  const isSeatSelected = (key) => {
    return selectedSeats.has(key);
  };

  const generateTable = () => {
    let table = [];

    for (let i = 0; i < rows; i++) {
      let cells = [];

      for (let j = 0; j < columns; j++) {
        const key = `Standard2_${String.fromCharCode(65 + i)}_${j + 1}`;
        cells.push(
          <td key={key} style={{ textAlign: 'center' }}>
            <Button
              variant='outline-secondary'
              style={{
                width: '40px',
                height: '40px',
                margin: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSeatSelected(key) ? 'green' : 'grey' 
              }}
              onClick={() => submitHandler(key)}
              disabled={validate(key)}
            >
               {type === 'Premium' ? '❌' : <img src={chairIcon} alt="Chair Icon" style={{ width: '80%', height: '80%' }} />}
            </Button>
          </td>
        );
      }
      table.push(<tr key={i}>{cells}</tr>);
    }
    return table;
  };

  return (
    <div>
      <table>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default React.memo(StandardTable2);
