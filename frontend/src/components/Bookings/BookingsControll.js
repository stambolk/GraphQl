import React from 'react';

import './BookingsControll.css'

const bookingsControl = props => {
    return (
        <div className='bookings-controll'>
        <button className='btn' onClick={props.onChange.bind(this, 'list')}>Booking List</button>
        <button className='btn' onClick={props.onChange.bind(this, 'chart')}>Chart</button>
    </div>
    )
}

export default bookingsControl