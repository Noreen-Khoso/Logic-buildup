import React, { useState } from "react";

const Arithmetic = () => {
  const operations = ["-", "+", "*", "/", "%"];
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(" ");

  const handleNumOneChange = (event) => {
    setNumOne(event.target.value);
  };

  const handleNumTwoChange = (event) => {
    setNumTwo(event.target.value);
  };

  const calculateResult = (event) => {
    setOperator(event);
    let expression = `${numOne} ${event} ${numTwo}`;
    setResult(eval(expression));
    console.log(expression);
    console.log(result);
  };

  return (
    <div className="flex flex-col items-center gap-4">
        
      <input type="number" value={numOne} onChange={handleNumOneChange} />
      <input type="number" value={numTwo} onChange={handleNumTwoChange} />
      
      {operations.map((item) => (
        <button  onClick={() => calculateResult(item)}>
          {item}
        </button>
      ))}
      
      <h1>{`${numOne} ${operator} ${numTwo} = ${result}`}</h1>
    </div>
  );
};

export default Arithmetic;