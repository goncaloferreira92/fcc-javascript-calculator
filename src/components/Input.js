import React from 'react';
import './Input.css'

const Input = ({ currentValue, id }) => (
    <div id={id} className="input">
        {currentValue}
    </div>
)

export default Input;