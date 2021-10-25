import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getListings } from '../../store/listing';
import { Link, Redirect } from 'react-router-dom';

import styles from './listings.module.css'
import { getBookings } from '../../store/booking';
import ListingNavBar from '../Navigation/ListingNavBar';
import { deleteOneBooking } from '../../store/booking';

const Bookingss = ({   }) => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const bookingss = useSelector((state) => Object.values(state.booking))
    const [allBooks, setAllBooks] = useState([])
    const [deleteBooking, setDeleteBooking] = useState(false)

    useEffect(() => {
        (async function () {
        const res = await fetch(`/api/auth/bookings`)
        const allBookings = await res.json();
        setAllBooks(allBookings)
        })()
      }, [deleteBooking])
      const listing = Object.values(allBooks).flat()
      const books1 = allBooks?.booking?.map(book => book)

      async function deleteOne(e) {
          await dispatch(deleteOneBooking(e.target.id))
            setDeleteBooking(!deleteBooking)
      }
     

  return (
      <div>
         <ListingNavBar />
     <div className={styles.container12}>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <div className={styles.container13}>
         <h1 style={{textAlign : 'center'}}>My Bookings</h1>

         {bookingss?.map((book, idx) => {
                if (user.id === book.userId) {
                    return (
                        <div className={styles.cont}>
                        <Link style={{textDecoration: 'none', color: 'black', zIndex: '1'}} to={`listing/${book.listingId}`}>
                        <div className={styles.containerbook}>
                            
                           <b className={styles.b1} >({idx + 1})</b> {book.title}  | {(book.startTime).slice(5, 17)} - {(book.endTime).slice(5, 17)} | {book.city}, {book.state}, {book.country} | Total price: ${Math.ceil(Math.abs((new Date(book.endTime)) - (new Date(book.startTime))) / (1000 * 60 * 60 * 24)) * book.price} 
                            </div>
                            
                            </Link>
                            <span className={styles.items}><i onClick={deleteOne} id={book.id} className="icon fas fa-trash fa-lg"></i></span>

                            </div>
                    )
            }
         })}
</div>

     
     </div>
     </div>
  )
};

export default Bookingss;
