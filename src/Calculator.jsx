import { useState } from "react"


function Calculator() {
    const [state, setState] = useState(" ");
    const [value, setValue]=useState(" ");
    const [value2, setValue2] = useState(" ");

    function add(){
        const result= value + value2;
        setState(result);
    }
    function sub(){
        const result= value - value2;
        setState(result);
    }
    function mul(){
        const result= value * value2;
        setState(result);
    }
    function division(){
        const result= value / value2;
        setState(result);
    }
    function firstNumber(a){
        const firstnum= parseInt(a.target.value);
        setValue(firstnum);
    }
    function secondNumber(a){
        const secondnum= parseInt(a.target.value);
        setValue2(secondnum);
    }
    function reset() {
        setState(" ");
        setValue(" ");
        setValue2(" ");
    }


  return (  
    <>
    <div className="flex">
    <input type="number" value={value} onChange={firstNumber}/>
    <input type="number" value={value2} onChange={secondNumber}/>
    </div>
    <div className="flex">
    <button onClick={add}>ADD</button>
    <button onClick={sub}>SUB</button>
    </div>
    <div className="flex">
    <button onClick={mul}>MUL</button>
    <button onClick={division}>Div</button>
    </div>
    <button onClick={reset}>AC</button>
    <div className="result">RESULT:{state}</div>
    </>
  )
}

export default Calculator