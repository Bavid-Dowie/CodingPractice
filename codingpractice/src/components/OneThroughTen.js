import React from 'react';

const OneThroughTen = () => {
  // Challenge 1: Print Numbers from 1 to 10
  const printNumbers = () => {
    let num1 = '';
    for (let i = 1; i <= 10; i++) {
      num1 += i + (i < 10 ? ', ' : ''); // Adds a comma except after the last number
    }
    return num1;
  };

  const num1 = printNumbers();

  // Challenge 2: Print Odd Numbers Less Than 100
  const printNums2 = () => {
    let num2 = '';
    for (let i = 1; i < 100; i += 2) {
      num2 += i + (i < 100 ? ', ' : '');
    }
    return num2;
  };

  const num2 = printNums2();

  // Challenge 3: Print Multiplication Table with 7

  // Challenge 4: Print All Multiplication Tables (1 to 10)

  return (
    <div>
      <h3>Challenge 1: Print Numbers from 1 to 10</h3>
      <p>{num1}</p>

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
      <p>{num2}</p>
      <h4>Answer Code:</h4>
      <pre>
        {`  const printNums2 = () => {
    let num2 = '';
    for (let i = 1; i < 100; i += 2) {
      num2 += i + (i < 100 ? ', ' : '');
    }
    return num2;
  };`}
      </pre>

      <h3>Challenge 3: Print Multiplication Table with 7 (safe to just look up, the question makes not sense)</h3>
      <h4>Answer Code:</h4>

      <h3>Challenge 4: Print All Multiplication Tables (1 to 10) - this one also makes no sense</h3>
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