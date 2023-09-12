// chapter 6

// Q1

var x = x+1

x = x++

// console.log(x);
 
// Q3

x = x - 1;

// console.log(x);

// Q3

var x = 50;

var y = x++;

// console.log(y);

// Q4

var y = 50;

var z = --y;

// console.log(z);

// Q5

var newNum = --num;

console.log(newNum);

// Q6

var originalValue = 2; 

var newValue = originalValue + 1;

// console.log(newValue);

// Q7

var num = 10 

num++;

alert(num);

// chapter 7
// Q1

var calculatedNum = 2+(2*6);
calculatedNum = 2 * 6 + 2 ;

// console.log(calculatedNum)

// Q2

var calculatedNum = (2 + 2) * 6;

// console.log(calculatedNum)

// Q3

var calculatedNum = (2 + 2) * (4 + 2);

// console.log(calculatedNum)

// Q4

var calculatedNum = ((2 + 2) * 4) + 2;

// console.log(calculatedNum)


// Q5

var cost = 2 + 2 * 4 + 10;

// console.log(cost)

// Q6

var units = 2 + 2 * 4 + 10;

// console.log(units)

// Q7

var pressure = 4 / 2 * 4;

// console.log(pressure)

// Chapter 8

// Q1

var num = "2" + "2";

// console.log(num)

// Q2

var message = ("Hello," + "Dolly");

alert(message);

// Q3

alert("33" + 3);

// Q4

var first = "Pakistan";
var sec = "Zindabad";
var concatenatedString = first + sec;
alert(concatenatedString);

// Q5

var stringValue = "Hello";
var numberValue = 42;
var concatenatedValue = stringValue + numberValue;
alert(concatenatedValue)

//Q6

var firstString = "Hello, ";
var secondString = "world!";
var concatenatedString = firstString + secondString;

// console.log(concatenatedString);

// Chapter 9

// Q1.

var firstName = prompt("Enter first name");

// console.log("First Name: " + firstName);

// Q2.

var country = prompt("Country?", "China");

// console.log("Country: " + country);

// Q3.

var yourName = prompt("Enter Your Name");

// Q4.

var userInput = prompt("Please enter your favorite color:", "Red");

// console.log("User Input: " + userInput);

// Q5.

var promptMessage = "Enter your email:";
var defaultEmail = "example@example.com";

var userEmail = prompt(promptMessage, defaultEmail);

// console.log("User Email: " + userEmail);

// Q6.

var promptMessage = "Please enter your name:";
var defaultName = "Shabbir";

var userName = prompt(promptMessage, defaultName);

alert("You entered: " + userName);


// Chapter 10

// Q1. 

var city = "Karachi";
if (city === "Karachi") {
// console.log("The City Of Lights");
}

// Q2.

if (x === y) {
    var z = prompt("Enter the value of z?")
  }

// Q3.
var ZipCode = "10010";

if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

// Q4.

var x = 1; 

if (x === 1) {
  x = 42;
}

// console.log(x);

// Chapter 11

// Q1.


if (variable1 !== variable2) {
    // Rest of the if statement code goes here
  }

// Q2.

if (variable1 >= variable2) {
    // Rest of the if statement code goes here
  }

// Q3.

var x = 5; // Initialize x with a value

// Check if x is not equal to a particular number, e.g., 10
if (x !== 10) {
  // If the condition is true, assign a new number to x
  x = 20; // Assign a new value to x
}

// console.log(x); // Output the updated value of x

// Q4.
var number1 = 5;
var number2 = 10;

if (number1 !== number2) {
  alert("Congratulations! The numbers are unequal.");
} else {
  alert("The numbers are equal.");
}

// Q5.


var enteredName = prompt("Please enter your first name:");


var otherName = "John"; 


if (enteredName !== otherName) {
  alert("No match");
} else 
  alert("Names match!");
Page 4 of 4