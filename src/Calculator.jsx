import { useState } from "react";
import './index.css'

function Calculator() {
    const [state, setState]=useState(" ");
    const [value, setValue]=useState(" ");
    const [value1, setValue1]=useState(" ");
   
   
    function add(){
        const result=value + value1;
        setState(result);
    }
    function sub(){
        const result=value - value1;
        setState(result);
    }
    function mul(){
        const result=value * value1;
        setState(result);
    }
    function div(){
        const result=value / value1;
        setState(result);
    }



    function firstNumber(a){
        const numFirst=parseInt(a.target.value);
        setValue(numFirst);
    }
    function secondNumber(a){
        const numSecond=parseInt(a.target.value);
        setValue1(numSecond);
    }
    function reset(){
        setState(" ");
        setValue(" ");
        setValue1(" ");
    }




  return (

    <div className="main">
    <div className="resultDisplay">: {state}</div>
    <div className="input">
    <input type="number" value={value} onChange={firstNumber}/>
    <input type="number" value={value1} onChange={secondNumber}/>
    </div>
    <div className="operationFlex">
    <button onClick={add}>ADD</button>
    <button onClick={sub}>SUB</button>
    </div>
    <div className="operationFlex">
    <button onClick={mul}>MUL</button>
    <button onClick={div}>DIV</button>
    </div>
    <button onClick={reset} >AC</button>
    
    </div>
  )
}

export default Calculator