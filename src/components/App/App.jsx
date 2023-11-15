import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const airlines = useSelector(store => store.airlines);
  const [newAirline, setNewAirline] = useState('');

  const dispatch = useDispatch();
  console.log(airlines);

  const handleClick = e => {

    const action = { type: 'ADD_AIRLINE', payload: newAirline };
    dispatch(action);

  };

  return (
    <div>
      <h1>Redux Airport</h1>
      <input value={newAirline} onChange={e => setNewAirline(e.target.value)} placeholder='Airline Name' />
      <button onClick={handleClick}>Add Airline</button>
      <table>
        <thead>
          <tr>
            <th>Airlines</th>
          </tr>
        </thead>
        {/* Airlines should be listed here */}
        <tbody>
          <tr>
            <td>
              {airlines.map(airline => airline)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
