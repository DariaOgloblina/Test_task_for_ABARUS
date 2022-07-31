import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loaderDiv}>
            <img
                src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif'
                alt='Loading'
            />
        </div>
    );
};

export default Loader;