import React, { useState } from 'react';
import styles from './home.module.css'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const HomePage = () => {

    return (
        <div className={styles.overallContainer}>
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h1 className={styles.h2}>Welcome to HeirBnb. Search your next travel destination</h1>
                <div className={styles.cont}>
                    <input placeholder='Search for spot...'type="search" className={styles.search} />
                    <button class={styles.searchBtn} type="submit">
                        <span>Search</span>
                    </button>
                </div>
            </div>
            
        </div>


    </div>
    )
};

export default HomePage;