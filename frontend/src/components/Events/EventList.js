import React from 'react';
import './EventList.css'
import EventFile from './EventFile'

const eventList = props => {
    const events = props.events.map( event =>{
        return(
            <EventFile 
            key={event._id} 
            eventId={event._id} 
            title={event.title} 
            userId={props.authUserId} 
            creatorId ={event.creator._id} 
            price = {event.price} 
            date ={event.date}
            onDetail = {props.onViewDetail}
            />
        )
    })
    return(
    <ul className="event-list">
    {events}   
   </ul>
   )
}

export default eventList;