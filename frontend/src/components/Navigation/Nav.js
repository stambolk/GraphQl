import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/Auth-context'

import './MainNav.css'

const mainNav = props => {
    return(
    <AuthContext.Consumer>
        {(context) => {
            return (<header className="main-nav">
                <div className="main-nav-logo">
                    <h1>Eventinaitor</h1>
                </div>
                <nav className="main-nav-items">
                    <ul>
                        {!context.token && <li><NavLink to="/auth">Authenticate</NavLink></li> }
                        <li><NavLink to="/events">Events</NavLink></li>
                        {context.token &&
                         <React.Fragment>
                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                        <li><button onClick={context.logout}>Logout</button></li> 
                        </React.Fragment>
                        }
                    </ul>
                </nav>
            </header>
            )
        }}

    </AuthContext.Consumer>
    )
}
export default mainNav;