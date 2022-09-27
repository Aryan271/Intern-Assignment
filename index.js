/**
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

Constraint
1. Do not use for or while loop
2. Only .map() or .forEach() is allowed
*/

let a = 0, b = 0, N = 100, s = "";
let arr = Array(N).fill().map((_, i) => i + 1);

arr.forEach(e => {
  a++;
  b++;

  if(a === 3){
    s += "Fizz";
    a = 0;
  }

  if(b === 5){
    s += "Buzz";
    b = 0;
  }

  if(s.length === 0){
    console.log(e);
  } else {
    console.log(s);
  }

  s = "";
})
