import React from 'react';

const OneThroughTen = () => {
  // Challenge 1
  const printNumbers = () => {
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
      numbers += i + (i < 10 ? ', ' : ''); // Adds a comma except after the last number
    }
    return numbers;
  };

  const numbers = printNumbers();

  // Challenge 2

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

      <h3>Challenge 2: Print Odd Numbers Less Than 100</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 3: Print Multiplication Table with 7</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 4: Print All Multiplication Tables (1 to 10)</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 5: Calculate Sum of Numbers from 1 to 10</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 6: Calculate 10!</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 7: Sum of Odd Numbers (10 to 30)</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 8: Celsius to Fahrenheit Conversion</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 9: Fahrenheit to Celsius Conversion</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 10: Sum of Numbers in an Array</h3>
      <h4>Answer Code:</h4>
    </div>
  );
}

export default OneThroughTen