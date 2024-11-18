const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let while_i = 1;
while (while_i <= 10) {
  console.log(while_i++); // post-increment means we actually mutate the value after the console.log call
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

myArray.push("mango");
for (const elem of myArray) {
  console.log(elem);
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()
myArray.splice(2, 1);
myArray.forEach((elem) => { console.log(elem) });

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

console.log(myArray.shift());

console.log(myArray.pop());


// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space

let stringMyArray = myArray.join(" ");
console.log(stringMyArray);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
function numberSquared(number) {
  return number ** 2;
}

console.log(numberSquared(2));

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {
  return number % 2 ? "odd" : "even"; // technically this is wrong, 0 should throw illegal argument exception imo
}
//call your function by using one of the options below.
console.log(oddOrEven(prompt()));
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibbonacci(number) { // Normally I'd use a recursive function
  let a, b, c;
  a = 0;
  b = 1;
  for (let i = 1; i < number; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  console.log(c);
}
Fibbonacci(5);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {
  let str = "";
  if (number != 0) {
    str += number % 3 ? "" : "Fizz";
    str += number % 5 ? "" : "Buzz";
  }
  return str;
}

console.log(fizzbuzz(30));

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) { return 1; } else { return factorial(n - 1) * n; }
}
console.log(factorial(5));
