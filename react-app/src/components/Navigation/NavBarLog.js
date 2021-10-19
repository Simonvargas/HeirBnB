import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import styles from './splash.module.css'

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
    return (
        <nav className={styles.nav}>
            <div className={styles.btnContainer}>
                <div>
                    <h2>HeirBnB</h2>
                </div>
                <div>
                    <h2>Find Your Next Adventure</h2>
                </div>
              <button className={styles.btn1}>Profile</button>
            </div>


        </nav>
    );
}

export default NavBarSplash;