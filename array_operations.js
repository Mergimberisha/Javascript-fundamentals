/*
Your friend now wants to launch a special promotion. They give you a long list of phone numbers so you can create a small program to text everyone. You notice some lines
 in the file are not phone numbers, but some corrupted data:

1763687364
4763687363
7867867862
AAAA#####AAAA#87@768767382672  <-- not a phone number!
4763687363
4763687363
(...)
However, you realise that most phone numbers on the list are no longer than 10 digits. Maybe you could just implement a JavaScript function to do the filtering for you!

To complete this exercise you will have to use Array's filter method to filter long numbers using this function.

Questions
Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less.
 It should make use of the function checkLength written previously.
Once your function is written, you should be able to type the following code and have the exact same output:


> filterLongNumbers(numbers);
[ '1763687364', '4763687363', '7867867862' ]

> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]
*/

const checkLength = (num) => {
    if (num.length === 10) {
      return true
    } else {
      return false
    }
  };
  
  const filterLongNumbers = (arr) => {
    return arr.filter(checkLength);
  }
  
  // const namesShorterThanThreeLetters = names.filter(isShorterThanThree);
  
   const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
  
  console.log(filterLongNumbers(numbers))