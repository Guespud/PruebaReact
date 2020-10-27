import React from 'react';
import './Label.css';

const Label = ({text}) =>{
    return(
        <div>
            <label>{text}</label>
        </div>
    );
}

export default Label;