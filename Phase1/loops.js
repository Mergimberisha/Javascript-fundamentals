/*
Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.
*/

const getParity = (number) => {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

for (let i = 0 ; i <= 20 ; i++) {
    const parity = getParity(i);
    console.log(`${i} is ${parity}`);
}

const fizzbuzzUntil = (num) => {
    let x = 1;
    while (x <= num) {
      if (x % 15 == 0) {
        console.log("Fizzbuzz");
        x++;
      } else if (x % 5 == 0) {
        console.log("Buzz");
        x++;
      } else if (x % 3 == 0) {
        console.log("Fizz");
        x++;
      } else {
        console.log(x);
        x++;
      }
    }
  };
  console.log(" ");
  console.log("A FizzBuzz loop from 0 to 10 using a while loop");
  console.log(fizzbuzzUntil(10));