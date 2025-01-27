import React from 'react';

const FirstProblem = () => {

  const printNumbers = () => {
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
      numbers += i + (i < 10 ? ', ' : ''); // Adds a comma except after the last number
    }
    return numbers;
  };

  const numbers = printNumbers();

  return (
    <div>
      <h3>Challenge 1: Print Numbers from 1 to 10</h3>
      <p>{numbers}</p>

      <h4>printNumbers Function Code:</h4>
      <pre>
        {`const printNumbers = () => {
  let numbers = '';
  for (let i = 1; i <= 10; i++) {
    numbers += i + (i < 10 ? ', ' : ''); // Adds a comma except after the last number
  }
  return numbers;
};`}
      </pre>
    </div>
  );
}

export default FirstProblem