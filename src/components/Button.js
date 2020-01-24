import React from 'react';
import './Button.css'

function isOperator(val) {
    return !isNaN(val) || val === "." || val === "=";
};



const Button = ({ displayValue, handleClick, id }) => (
    <button 
    id={id}
    className={`button ${isOperator(displayValue) ? "" : "operator"}`}
    onClick={() => handleClick(displayValue.toString())}
    >{displayValue}</button>
)

export default Button;