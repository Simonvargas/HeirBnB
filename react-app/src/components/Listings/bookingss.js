// import React, {useEffect} from 'react';
// import { useSelector, useDispatch} from 'react-redux'
// import { getListings } from '../../store/listing';
// import { Link } from 'react-router-dom';

// import styles from './listings.module.css'
// import { getBookings } from '../../store/booking';
// const Bookingss = ({  setShowBookings, showBookings}) => {
//     const user = useSelector(state => state.session.user)
//     const allListings = useSelector((state) => Object.values(state.listing))
//     const dispatch = useDispatch()
//     const bookingss = useSelector((state) => Object.values(state.booking))

//     useEffect(() => {
//         dispatch(getListings())
//         dispatch(getBookings())
//       }, [dispatch])
    
//   return (
//      <div className={styles.container12}>
//          {bookingss.map((book) => {
//             for (let i = 0; i < allListings.length; i++) {
//                 if (user.id === book.userId) {
//                     return (
//                         <Link style={{textDecoration: 'none', color: 'black'}} to={`listing/${allListings[i].id}`}>
//                         <div className={styles.containerbook}>
//                             {allListings[i].title} | {(book.startTime).slice(5, 17)} - {(book.endTime).slice(5, 17)} | {allListings[i].city}, {allListings[i].state}
//                             </div>
//                             </Link>
//                     )
//                 }
//             }
//          })}
//      </div>
//   )
// };

// export default Bookingss;
