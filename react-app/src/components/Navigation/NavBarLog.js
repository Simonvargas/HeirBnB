import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styles from './splash.module.css'
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';
const NavBarSplash = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false)


    function show() {
        setShowModal1(true)
    }

    function hide() {
        setShowModal1(false)
    }

    function show1() {
        setShowModal2(true)
    }

    function hide1() {
        setShowModal2(false)
    }
    const dispatch = useDispatch()
    const onLogout = async (e) => {
        await dispatch(logout());
      };
    return (
        <nav className={styles.nav}>
            <div className={styles.btnContainer}>
                <div>
                    <h2>HeirBnB</h2>
                </div>
                <div>
                    <h2>Find Your Next Adventure</h2>
                </div>
                <div>
              <button className={styles.btn1}>Profile</button>
              <button className={styles.btn1} onClick={onLogout}>Logout</button>
              </div>
            </div>


        </nav>
    );
}

export default NavBarSplash;