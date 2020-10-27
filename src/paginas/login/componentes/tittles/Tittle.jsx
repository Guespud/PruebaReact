import React from 'react';
import './Tittle.css'

const tittle = ({text}) => {
    return (
        <div className = "tittle-container">
            <label className = "tittle-label">{text}</label>
        </div>
    );
}

export default tittle;