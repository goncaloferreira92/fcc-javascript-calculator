import React from 'react';
import './ClearButton.css'


const ClearButton = ({ displayValue, handleClick, id }) => (
    <button
    id={id}
    className="clear-btn"
    onClick={handleClick}
    >{displayValue}</button>
)

export default ClearButton;