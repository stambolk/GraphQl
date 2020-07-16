import React from 'react';
import './EventFile.css'

const eventFile = props => (
    <li key={props.eventId} className="events-list-item">
        <div>
            <h1>{props.title}</h1>
            <h2>${props.price} - {new Date(props.date).toLocaleDateString()}</h2>
        </div>
        <div>
            {props.userId === props.creatorId ?
            <p>Youre the owner of this event</p>
            :
            <button className='btn'
            onClick={props.onDetail.bind(this, props.eventId)}
            >View details</button>}
            
        </div>
    </li>
)

export default eventFile