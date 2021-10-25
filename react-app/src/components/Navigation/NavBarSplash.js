import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import styles from './splash.module.css'
import { NavLink } from 'react-router-dom';
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
                <NavLink style={{color : 'black', textDecoration: 'none'}} to='/' ><h2>HeirBnB</h2></NavLink>
                </div>
                <div>
                    <h2>Find Your Next Adventure</h2>
                </div>
                <div>
                    <button className={styles.btn2} onClick={show}>Log In</button>

                    <Rodal closeOnEsc={true} clasName={styles.ro} showCloseButton={false} animation='zoom' visible={showModal1} onClose={hide}>
            <div className={styles.rodal}>
              <LoginForm showModal1={showModal1} setShowModal2={setShowModal2} setShowModal1={setShowModal1}/>
            </div>
          </Rodal>

                    <button className={styles.btn2} onClick={show1}>Sign Up</button>
                    <Rodal showCloseButton={false} animation='zoom' visible={showModal2} onClose={hide1}>
                        <div className={styles.rodal}>
                            <SignUpForm showModal2={showModal2} setShowModal2={setShowModal2} setShowModal1={setShowModal1} />
                        </div>
                    </Rodal>

                </div>
            </div>


        </nav>
    );
}

export default NavBarSplash;
