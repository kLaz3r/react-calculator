import React, { useState } from 'react';
import Keypad from '../../components/Keypad/Keypad';
import Operators from '../../components/Operators/Operators';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [decimal, setDecimal] = useState(false);
  const checkOperator = () => {
    if (
      display[display.length - 1] === '+' ||
      display[display.length - 1] === '-' ||
      display[display.length - 1] === '*' ||
      display[display.length - 1] === '/'
    ) {
      return true;
    } else {
      return false;
    }
  };
  const keyPressed = (e) => {
    let newDisplay = display;
    switch (e.target.name) {
      case '.':
        if (!decimal) {
          newDisplay = display + e.target.name;
          setDecimal(true);
        } else {
          break;
        }
        break;
      case '+':
        if (checkOperator()) {
          let arr = newDisplay.split('');
          arr[arr.length - 1] = e.target.name;
          newDisplay = arr.join('');
          console.log(newDisplay);
        } else {
          setDecimal(false);
          newDisplay = display + e.target.name;
        }
        break;
      case '-':
        if (checkOperator()) {
          let arr = newDisplay.split('');
          arr[arr.length - 1] = e.target.name;
          newDisplay = arr.join('');
          console.log(newDisplay);
        } else {
          setDecimal(false);
          newDisplay = display + e.target.name;
        }
        break;
      case '/':
        if (checkOperator()) {
          let arr = newDisplay.split('');
          arr[arr.length - 1] = e.target.name;
          newDisplay = arr.join('');
          console.log(newDisplay);
        } else {
          setDecimal(false);
          newDisplay = display + e.target.name;
        }
        break;
      case '*':
        if (checkOperator()) {
          let arr = newDisplay.split('');
          arr[arr.length - 1] = e.target.name;
          newDisplay = arr.join('');
          console.log(newDisplay);
        } else {
          setDecimal(false);
          newDisplay = display + e.target.name;
        }
        break;

      default:
        if (display === '0') {
          newDisplay = e.target.name;
        } else {
          newDisplay = display + e.target.name;
        }
        break;
    }
    setDisplay(newDisplay);
  };

  const clear = () => {
    setDisplay('0');
    setDecimal(false);
  };
  const backspace = () => {
    setDisplay(display.slice(0, -1));
    if (display.length === 1) {
      clear();
    }
  };
  const evaluateExpression = () => {
    let result = display;
    try {
      setDisplay(eval(result));
    } catch (error) {
      console.log(error);
      setDisplay('error');
    }
    setDecimal(false);
  };
  return (
    <div className='Calculator'>
      <div key={display} id='display' className='Display'>
        {display}
      </div>
      <div className='FlexContainer'>
        <Keypad keyPressed={keyPressed}></Keypad>
        <Operators
          evaluateExpression={evaluateExpression}
          backspace={backspace}
          clear={clear}
          keyPressed={keyPressed}
        ></Operators>
      </div>
    </div>
  );
};

export default Calculator;
