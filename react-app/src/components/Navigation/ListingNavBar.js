import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styles from './ListingNavBar.module.css'
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddListing from '../AddListing/AddListing';
import { useHistory } from 'react-router';
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./searchbox.css"

import Bookingss from '../Listings/bookingss';

import { getBookings } from '../../store/booking';

const ListingNavBar = ({}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false)
    const listings = useSelector((state) => Object.values(state.listing))
    const bookingss = useSelector((state) => Object.values(state.booking))
    
    const [ searchInput, setSearchInput ] = useState('')
    const sessionUser = useSelector(state => state.session.user)
    
    const filter = (place, query) => {
        return place.filter((spot) => {
          const sneakerName = spot.title.toLowerCase()
          const sneakerBrand = spot.city.toLowerCase()
          if (sneakerName.includes(query)) return sneakerName.includes(query) + spot.city
          if (sneakerBrand.includes(query)) return sneakerBrand.includes(query) 
        })
      }

      useEffect(() => {
        dispatch(getBookings())
      }, [dispatch])

    // window.addEventListener('click', e => {
    //     e.preventDefault()
    //     setSearchInput('')
    //   })

    const lists = filter(listings, searchInput)
    let searchbar = null
    
    if (searchInput) {
        searchbar = (
          <>
            {sessionUser ?
            <div className="search-cover">
                <div className='searchfield'>
                  {lists.map(list => (
                      <Link className='search-link' to={`/listing/${list.id}`}>
                        <div className='searchfield-container'>
                          <p  className='search-link'>{list.title}  <span style={{color: 'lightgray', float: 'right'}}>{list.city}, {list.state}</span></p>
                        </div>
                      </Link>
                  ))}
            </div>
             
            </div>
            : null}
          </>
        )
      }

      const [showBookings, setShowBookings] = useState(false)

    function show() {
        setShowModal1(true)
    }

    function hide() {
        setShowModal1(false)
    }

    function myBookings() {
      setShowBookings(true)
    }
    function hideBookings() {
      setShowBookings(false)
    }

    
    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
      };
    return (
        <nav className={styles.nav}>
            <div className={styles.btnContainer}>
                <div>
                <NavLink style={{color : 'black', textDecoration: 'none'}} to='/' ><h2>HeirBnB</h2></NavLink>
                </div>
                <div>
                    <input 
                    className={styles.input} 
                    placeholder='Search for a spot by city or title'
                    value={searchInput}
                    // className={styles.searchBar}
                    onChange={(e) => setSearchInput((e.target.value).toLowerCase())}
                    ></input> <i class="fas fa-search fa-lg"></i>
                </div>
                <div>
              <button  className={styles.btn4}><NavLink className={styles.link} to='/profile'>bookings</NavLink></button>
              <button className={styles.btn3} onClick={show}>Host a spot</button>

              <Rodal closeOnEsc={true} clasName={styles.ro} showCloseButton={false} animation='zoom' visible={showModal1} onClose={hide}>
            <div className={styles.rodal}>
              <AddListing showModal1={showModal1} setShowModal2={setShowModal2} setShowModal1={setShowModal1}/>
            </div>
          </Rodal>

             <button className={styles.btn2}> <NavLink className={styles.link} to='/'>Listings</NavLink></button>
              <Link to='/'><button className={styles.btn2} onClick={onLogout}>Logout</button></Link>
              {/* <i class="fas fa-id-badge"></i> */}
              </div>
            </div>

            {/* <Rodal closeOnEsc={true} className={styles.ro} showCloseButton={false} animation='zoom' visible={showBookings} onClose={hideBookings}>
            <div className={styles.rodal1}>
              <Bookingss  setShowBookings={setShowBookings} showBookings={showBookings} bookingss={bookingss}/>
            </div>
          </Rodal> */}

        {searchbar}
        </nav>
    );
}


export default ListingNavBar;