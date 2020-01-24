import React, { useState } from 'react';

import './App.css';
import './index.css'
import Button from './components/Button.js'
import Input from './components/Input.js'
import ClearButton from './components/ClearButton.js'


// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import { Container } from '@material-ui/core';


function App() {

  
  
  const [input, setInput] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operator, setOperator] = useState("")


  const reset = () => (
    (setInput(0),
    setPreviousNumber(0),
    setOperator(""))
  )

  const addNumberToInput = ( value ) => (    
    input === 0 && value === "0" ? setInput(0) : // Limit zeros
      input === 0 ? setInput(value) :
        value === "." && input.indexOf(".") === -1 ? setInput(input + value) : //Limit the decimal notation
            Number.isInteger(parseFloat(value)) ? setInput(input + value) :
              null
  )

  // If two or more operators are in sequence, is the LAST that stands (except for the minus sign, that should qualify as minus)
  const division = () => (
    operator === "" ? (setOperator("divide"), setPreviousNumber(parseFloat(input)), setInput("")) :
      operator === "evaluate" ? (setOperator("divide"), setPreviousNumber(Number.parseFloat(input)), setInput("")) :
        (evaluateConst("divide"))
  )

  const addition = () => (
    operator === "" ? (setOperator("plus"), setPreviousNumber(parseFloat(input)), setInput("")) :
      operator === "evaluate" ? (setOperator("plus"), setPreviousNumber(Number.parseFloat(input)), setInput("")) :
        (evaluateConst("plus"))
  )

  const multiplication = () => (
    operator === "" ? (setOperator("multiply"), setPreviousNumber(parseFloat(input)), setInput("")) :
      operator === "evaluate" ? (setOperator("multiply"), setPreviousNumber(Number.parseFloat(input)), setInput("")) :
        (evaluateConst("multiply"))
  )

  const subtraction = () => (
    operator === "" ? (setOperator("subtract"), setPreviousNumber(parseFloat(input)), setInput("")) :
      operator === "evaluate" ? (setOperator("subtract"), setPreviousNumber(Number.parseFloat(input)), setInput("")) :
        (evaluateConst("subtract"))
  )


  const evaluateConst = ( newOperator ) => (
    operator === "plus" ? (setPreviousNumber(parseFloat(previousNumber) + parseFloat(input)), setInput(""), setOperator(newOperator)) :
      operator === "divide" ? (setPreviousNumber(parseFloat(previousNumber) / parseFloat(input)), setInput(""), setOperator(newOperator)) :
        operator === "multiply" ? (setPreviousNumber(parseFloat(previousNumber) * parseFloat(input)), setInput(""), setOperator(newOperator)) :
          operator === "subtract" ? (setPreviousNumber(parseFloat(previousNumber) - parseFloat(input)), setInput(""), setOperator(newOperator)) :
            null
  )

  const evaluate = () => (
    
    operator === "plus" ? setInput(parseFloat(previousNumber) + parseFloat(input), setOperator("evaluate"), setPreviousNumber(0)) :
      operator === "divide" ? setInput(previousNumber / parseFloat(input), setOperator("evaluate"), setPreviousNumber(0)) :
        operator === "multiply" ? setInput(parseFloat(previousNumber) * parseFloat(input), setOperator("evaluate"), setPreviousNumber(0)) :
          operator === "subtract" ? setInput(parseFloat(previousNumber) - parseFloat(input), setOperator("evaluate"), setPreviousNumber(0)) :
            null
  )

  

  
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input id="display" currentValue={input}></Input>
        </div>
        <div className="row">
          <Button displayValue={"7"} handleClick={addNumberToInput} id="seven" />
          <Button displayValue={"8"} handleClick={addNumberToInput} id="eight" />
          <Button displayValue={"9"} handleClick={addNumberToInput} id="nine" />
          <Button displayValue={"/"} handleClick={division} id="divide" />
        </div>
        <div className="row">
          <Button displayValue={"4"} handleClick={addNumberToInput} id="four" />
          <Button displayValue={"5"} handleClick={addNumberToInput} id="five" />
          <Button displayValue={"6"} handleClick={addNumberToInput} id="six" />
          <Button displayValue={"*"} handleClick={multiplication} id="multiply" />
        </div>
        <div className="row">
          <Button displayValue={"1"} handleClick={addNumberToInput} id="one" />
          <Button displayValue={"2"} handleClick={addNumberToInput} id="two" />
          <Button displayValue={"3"} handleClick={addNumberToInput} id="three" />
          <Button displayValue={"+"} handleClick={addition} id="add" />
        </div>
        <div className="row">
          <Button displayValue={"."} handleClick={addNumberToInput} id="decimal" />
          <Button displayValue={"0"} handleClick={addNumberToInput} id="zero" />
          <Button displayValue={"="} handleClick={evaluate} id="equals" />
          <Button displayValue={"-"} handleClick={subtraction} id="subtract" />
        </div>
        <div className="row">
          <ClearButton displayValue={"Clear"} handleClick={reset} id="clear"/>
        </div>
      </div>
    </div>
  );
}

export default App;








