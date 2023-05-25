/*
Exercise - personalised messages
Your friend now would like you to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:

To complete this exercise you'll have to:

create a function that takes a single name and generate the correct message for it.
use Array's map method to generate the list of personalised messages using this function.
Questions
Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, 
the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string 
'Hi Laura! 50% off our best candies for you today!', and so on.
Once your function is written, you should be able to type the following code and have the exact same output:

> const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

> generateMessages(names);
[
  'Hi Anna! 50% off our best candies for you today!',
  'Hi Laura! 50% off our best candies for you today!',
  'Hi Josh! 50% off our best candies for you today!',
  'Hi Min! 50% off our best candies for you today!',
  'Hi Karla! 50% off our best candies for you today!'
]
*/

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];
  
  const automatedMessage = (name) => {
    return (`Hi ${name.name}! ${name.discount}% off our best candies for you today!`);
  }
  
  const generateMessages = (arr) => {
    console.log(arr.map(automatedMessage));
  }
  
  generateMessages(namesAndDiscounts)
  /*
  
  Let's go back to our candy promotion texts. Your friend now wants to have a specific discount percentage for each customer. After processing the list you're given,
  you end up with the following array:
  
  // An array of objects!
  > const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];
  To complete this exercise, you'll have to:
  
  use Array's map method again.
  access the properties of an object as seen previously.
  Questions
  Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.
  Once your function is written, you should be able to type the following code and have the exact same output:
  
  
  > generateMessages(namesAndDiscounts);
  [
    'Hi Anna! 50% off our best candies for you today!',
    'Hi Laura! 40% off our best candies for you today!',
    'Hi Josh! 30% off our best candies for you today!',
    'Hi Min! 50% off our best candies for you today!',
    'Hi Karla! 60% off our best candies for you today!'
  ]
  
  */