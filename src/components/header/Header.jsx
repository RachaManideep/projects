// import React from 'react'
import { faBed, faPlane, faTaxi, faCar, faMonument, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Children, useState } from 'react';
import { format } from 'date-fns';
const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setIptions] = useState({
    adult: 1,
    Children: 0,
    room: 1
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }
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
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className="headerSearchText">{`${options.adult} adult .${options.Children} children .${options.room} room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOption("adult", 'd')}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={() => handleOption("adult", 'i')}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOption("Children", 'd')}>-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton" onClick={() => handleOption("Children", 'i')}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={() => handleOption("room", 'd')}>-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton" onClick={() => handleOption("room", 'i')}>+</button>
                </div>
              </div>
            </div>
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
