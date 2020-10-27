import React from 'react';
import './Inputs.css';

const Input = ({attribute,handlechage,param}) =>{
    return (
        <div>
            <input 
            id = {attribute.id}
             name = {attribute.name}
              placeholder = {attribute.placeholder} 
              type={attribute.type}
              onChange ={(e) => handlechage(e.target.name, e.target.value)} 
              className =" regular-style"/>
        </div>
    );
}

export default Input;