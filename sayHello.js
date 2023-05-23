/* 
Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.

Require and call that function in node - you should get the following result:

> sayHello();
'Hello'
Example solution

Debugging question
Your colleague is trying to call the function sayHello and print its result using console.log — however, it doesn't work as expected: why? Make the fix so it prints the return value of the function, as expected.

console.log(sayHello);
*/

const sayHello = (name) => {
    console.log(`hello ${name}`);
  };
  sayHello('sarah');
  sayHello();
  
  /* Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah') displays a personalised message:
  
  > sayHello('Sarah');
  'Hello Sarah'
  Bonus: can you find another way to write the sayHello function, without using the sign + to concatenate the strings?
  
  > sayHello();
  'Hello'
  
  */
  