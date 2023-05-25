/*
const getNumberSign = (num) => {
  if (num > 0) {
    console.log('positive');
  } else if (num < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  }
};
*/
/*
A colleague just asked you some help to debug their code.

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
When calling this function, something doesn't work as expected. What fix can you suggest to solve the problem?

You'll know the function works if you manage to have the expected output when running in node:

> isValidLength('00');
false

> isValidLength('00112233445');
true
*/

const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.toString().length === validLength) {
     console.log(true);
    } else {
      console.log(false);
    }
  };