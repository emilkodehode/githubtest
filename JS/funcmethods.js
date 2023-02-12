// Functions and Methods assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/
//const odd_even_check = (number) => (answer = !(number % 2) ? "even" : "odd");
//kept my old one just to have it since that is my submited original answer. redid the function name to better fit with the check first for searchability
const checkOddEven = (number) => (!(number % 2) ? "even" : "odd");
console.log(checkOddEven(2130));
console.log(checkOddEven(2213));
console.log(checkOddEven(5349057));
console.log(checkOddEven(10));
/*
2.

Write a function that takes in a string as a parameter and returns the string in upper
case with an exclamation mark at the end. Use the non-arrow function syntax (function keyword).

Example: console.log(yourFunction("this is cool")) should console log THIS IS COOL!
Console log the function a few times to show that it's working.
*/
//const stringBangified = (string) => string.toUpperCase() + "!";
const userName = "emil";
function stringBangified(string) {
  bangified = string.toUpperCase() + "!";
  return bangified;
}
console.log(stringBangified("i am not screaming"));
console.log(stringBangified(`${userName} where are you`));
console.log(stringBangified("what is happening"));
/*
3.

Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/
function userGreeterWtihTime(name, time) {
  clock = time.toFixed(2).toString().replace(".", ":");
  if (name) {
    if (time < 6) {
      greeting = `${name}! It is ${clock}! why are you not sleeping? turn off the computer at once!`;
    } else if (time < 12) {
      greeting = `Rise and shine ${name}, It's ${clock}o'clock time to get ready for the day! :3`;
    } else if (time < 18) {
      greeting = `Good day ${name}, its ${clock} so get some food`;
    } else if (time < 24) {
      greeting = `Good evening ${name}, ${clock} that means bedtime soon`;
    } else {
      greeting = `invalid time! plz ${name} there is only 24 hours on earth not ${time}`;
    }
  }
  return greeting;
}
console.log(userGreeterWtihTime("emil", 3000));
console.log(userGreeterWtihTime("bjørn", 2));
console.log(userGreeterWtihTime("siri", 6));
console.log(userGreeterWtihTime("marte", 15));
console.log(userGreeterWtihTime("jhonny", 22.3245));
/*
4.

Use string methods on the text variable to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 - Split the string into an array where each word is an element

 Console log each method used.
*/
const text = "  Javascript is hard   ";

const stringNoHardshipAndSplitter = (text) =>
  text.trim().replace("hard", "fun").split(" ");

console.log(stringNoHardshipAndSplitter(text));
/*
5.

Use array methods to do the following:
 - Add a new hero to the end of the array
 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Thanos"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
*/
const marvelHeroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man"
];

function roosterUpdater(rooster) {
  rooster.push("The Amazing IT Person");
  rooster.shift();
  rooster.splice(0, 2);
  rooster.unshift("Captain America");
  //rooster[1] = "Thanos";
  rooster = rooster.join("|space|");
  rooster = rooster.replace("Doctor Strange", "Thanos");
  rooster = rooster.split("|space|");
  return rooster;
}
/*what changes old data and what makes new is tricky.
after going much back and forth i guess this shows some understanding kinda. */
console.log(roosterUpdater(marvelHeroes));

/*
5.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

/*i started with switch statement and ternary and i got stuck on boolean.
when it was true it printed just true while false printed 😎Chill😎 and i did not understand why false worked and true did not.
when i did it with if it works so im confuzed about that switch issue. but this works im happy. 
i dont see right now how to make it a arrow function.
beside having a starter arrow that checks type and then just send it to another that deals with the arguments and then back with the answer*/

/*
function coolMaker(primitive) {
  if (typeof primitive === "boolean") {
    primitive = primitive ? `😎Yeah😎` : `😎Chill😎`;
  } else if (typeof primitive === "string") {
    primitive = "😎" + primitive + "😎";
  } else if (typeof primitive === "number") {
    primitive *= 2;
    toString(primitive);
    primitive = "😎" + primitive + "😎";
  } else {
    primitive = `😎Primitive values only😎`;
  }
  return primitive;
}
console.log(coolMaker(true));
console.log(coolMaker(false));
console.log(coolMaker("yoyo"));
console.log(coolMaker(23123));
console.log(coolMaker(marvelHeroes));
*/

/*

*/

function coolSwitch(primitive) {
  switch (typeof primitive) {
    //if this is Boolean it goes false, if it is "boolean" its true.
    case "boolean":
      return primitive ? `😎Yeah😎` : `😎Chill😎`;
    case "string":
        return "😎" + primitive + "😎";
    case "number":
        primitive *= 2;
        toString(primitive);
        return "😎" + primitive + "😎";
    default:
      return `😎Primitive values only😎`;
  }
}
console.log(coolSwitch(true));
console.log(coolSwitch(false));
