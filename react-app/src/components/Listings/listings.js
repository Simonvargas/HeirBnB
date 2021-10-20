import React, { useEffect } from 'react';
import ListingNavBar from '../Navigation/ListingNavBar';
import { getListings } from '../../store/listing';
import { useDispatch, useSelector } from 'react-redux';
import styles from './listings.module.css'
import { Link } from 'react-router-dom';
const Listings = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const allListings = Object.values(useSelector(state => state.listing))

    useEffect(() => {
        dispatch(getListings())
    }, [dispatch])
    
    console.log(allListings)
  return (
      <>
     
      <ListingNavBar />
      <div className={styles.overall}>
      {allListings.map(listing => {
          return (
              <Link className={styles.link} to={`/listings/${listing.id}`}>
              <div className={styles.listingContainer}>
                  <img className={styles.img} src={listing.image}></img>
                  <div className={styles.words}>

                  <p><b>{listing.address}</b> <span className={styles.span}>$ {listing.price} / Day</span></p>   
                  </div>
                  <p className={styles.address}>{listing.city}, {listing.state}, {listing.country}</p>            
                  </div>
                  </Link>
          )
      })}
      </div>
       </>
  )
};

export default Listings;
