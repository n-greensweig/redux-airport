import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AirlineForm() {

    const [newAirline, setNewAirline] = useState('');

    const dispatch = useDispatch();

    const handleClick = e => {

        e.preventDefault();
        const action = { type: 'ADD_AIRLINE', payload: newAirline };
        dispatch(action);

    };

    return (
        <form onSubmit={handleClick}>
            <input value={newAirline} onChange={e => setNewAirline(e.target.value)} placeholder='Airline Name' />
            <button onClick={handleClick}>Add Airline</button>
        </form>
    )

}

export default AirlineForm;