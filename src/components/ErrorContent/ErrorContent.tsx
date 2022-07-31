import React from 'react';
import classes from './ErrorContent.module.css';

interface ErrorContentProps{
    error: string
}

const ErrorContent = ({error} :ErrorContentProps) => {
    return (
        <div className={classes.errorDiv}>
            {error}
        </div>
    );
};

export default ErrorContent;