// import React from 'react'
import { faBed, faPlane, faTaxi, faCar, faMonument, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer"> 
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stay</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car rentals</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faMonument} />
          <span>Attractions</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">Get reward for yout travels - Unlock Instant savings of 10% or more with a free BoomBoom account
        </p>
        <button className="headerBtn">SignIn/ Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
