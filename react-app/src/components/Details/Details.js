import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ListingNavBar from '../Navigation/ListingNavBar';
import { useParams, useHistory } from 'react-router';

import styles from './Details.module.css'

import { deleteOneListing } from '../../store/listing';

import EditForm from './EditForm';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import MapOne from '../Maps/MapOne';

const Details = () => {
    const user = useSelector(state => state.session.user)
    const [listing, setListing] = useState([])
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    
    const [show, setShow] = useState(false)

    useEffect(() => {
        (async function () {
            const res = await fetch(`/api/listings/${id}`)

            if (res.ok) {
                const oneListing = await res.json()
                setListing(oneListing)
            }
        })()
    }, [id, show])

     async function deleteOne() {
    await dispatch(deleteOneListing(id))
    history.push('/')
    }

    function showForm() {
        setShow(true)
    }

    function hide() {
        setShow(false)
    }

    return (
        <div>
            <ListingNavBar />
            <div className={styles.container}>
               <div className={styles.firstContent} > <h1>{listing.title}</h1>
               {user.id == listing.user_id ? <div>
                   <button onClick={deleteOne} className={styles.btn2}>Delete Listing</button>
                   <button onClick={showForm} className={styles.btn2}>Update</button>

               </div> : ''}

               <Rodal closeOnEsc={true}  showCloseButton={false} animation='zoom' visible={show} onClose={hide}>
            <div className={styles.rodal}>
              {show ?<EditForm listing={listing} setShow={setShow}/> : ''}
            </div>
          </Rodal>


               </div>
                <div>{listing.state}, {listing.country}</div>
                <br></br>
                <img className={styles.photo} src={listing.image}></img>
                <div className={styles.bottomContainer}>
                    <div className={styles.left}>
                    <p style={{ color: 'gray' }}>{listing.address}, {listing.state}, {listing.country}</p>
                    <div className={styles.desc}>{listing.description}</div>
                    </div>

                    <div className={styles.right}>
                    <div>
                    <p><b>${listing.price}</b> / Day</p>
                    </div>

                    <div>
                    {/* <div>Check in</div> */}
                    <input className={styles.input} type='datetime-local' placeholder='Choose a date'></input>

                    {/* <span>Check out</span> */}
                    <input className={styles.input} placeholder='Choose a date' type='datetime-local'></input>
                    </div>

                    <button className={styles.btn1}>Reserve this Listing</button>
                    
                    </div>

                </div>
                <input className={styles.input} placeholder='Choose a date' type='datetime-local'></input>

            </div>
            <MapOne listing={listing} />
        </div>
    )
};

export default Details;
