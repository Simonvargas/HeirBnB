import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styles from './ListingNavBar.module.css'
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddListing from '../AddListing/AddListing';
import { useHistory } from 'react-router';

const ListingNavBar = () => {
    const history = useHistory()
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false)


    function show() {
        setShowModal1(true)
    }

    function hide() {
        setShowModal1(false)
    }

    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
      };
    return (
        <nav className={styles.nav}>
            <div className={styles.btnContainer}>
                <div>
                    <h2>HeirBnB</h2>
                </div>
                <div>
                    <input className={styles.input} placeholder='Search for a spot'></input> <i class="fas fa-search fa-lg"></i>
                </div>
                <div>
              <button className={styles.btn3} onClick={show}>Host a spot</button>

              <Rodal closeOnEsc={true} clasName={styles.ro} showCloseButton={false} animation='zoom' visible={showModal1} onClose={hide}>
            <div className={styles.rodal}>
              <AddListing showModal1={showModal1} setShowModal2={setShowModal2} setShowModal1={setShowModal1}/>
            </div>
          </Rodal>

             <button className={styles.btn2}> <NavLink className={styles.link} to='/listings'>Listings</NavLink></button>
              <button className={styles.btn2} onClick={onLogout}>Logout</button>
              {/* <i class="fas fa-id-badge"></i> */}
              </div>
            </div>


        </nav>
    );
}

export default ListingNavBar;