import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.title}>
                <h1>Hello!</h1>
                <h1>I'm <span className="label">Javier Wong.</span></h1>
                <h1>I design and build things</h1>
            </div>
        </div>
        
    );
}

export default Home;
