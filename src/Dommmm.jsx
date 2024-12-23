import { useState } from "react";
// array object destructure
function Dommmm() {
  const [state, setState] = useState();
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [currOperation, setCurrOperation] = useState("Result");
  const [color, setColor] = useState("normal");

  function demo() {
    const res = value + value2;
    setCurrOperation("Addition");
    setColor("positive");
    setState(res);
  }
  function demo2() {
    const res = value - value2;
    setCurrOperation("Subtraction");
    if (res < 0) {
      setColor("negative");
    } else {
      setColor("positive");
    }
    setState(res);
  }
  function typing(e) {
    const intVal = parseInt(e.target.value);
    setValue(intVal);
  }
  function typing2(e) {
    const intVal = parseInt(e.target.value);
    setValue2(intVal);
  }
  return (
    <>
      <input type="number" onChange={typing} />
      <input type="number" onChange={typing2} />

      <button onClick={demo}>Add</button>
      <button onClick={demo2}>Sub</button>

      <div  className={color}>
        {currOperation} : {state}
      </div>
    </>
  );
}

export default Dommmm;
