const getnum1 = () => +document.getElementById("num1-el").value;
const getnum2 = () => +document.getElementById("num2-el").value;
const getOperator = () => document.querySelector(`#operator`).value
const answer = (text) => document.getElementById("sum-el").textContent = text;

const num1El = document.getElementById("num1-el")
const num2El = document.getElementById("num2-el")
const addEl = document.getElementById("add-el")
const subtractEl = document.getElementById("subtract-el")
const divideEl = document.getElementById("divide-el")
const multiplyEl = document.getElementById("multiply-el")
const operatorEl = document.getElementById("operator")



function mathOperation(){
    switch (getOperator()){
        case ("+"):
            answer(getnum1() + getnum2())
            break
        case ("-"):
            answer(getnum1() - getnum2())
            break
        case("/"):
            answer(getnum1() / getnum2())
            break
        case("*"):
            answer(getnum1() * getnum2())
            break
        default:
            answer("something went wrong")
}
}

num1El.addEventListener("keyup", mathOperation)
num2El.addEventListener("keyup", mathOperation)
operatorEl.addEventListener("change", mathOperation)
addEl.addEventListener("click", function(){answer(getnum1() + getnum2());})
subtractEl.addEventListener("click", function(){answer(getnum1() - getnum2())})
divideEl.addEventListener("click", function (){answer(getnum1() / getnum2())})
multiplyEl.addEventListener("click", function (){answer(getnum1() * getnum2());})

//i want to make my calculator take in operator from a dropdown menu that sits between the numbers awww yisss

/*modulo i want t understand this. the % operator gives me remainder if it is any it returns 1.
i see this used in many examples for odds and even but also to jump from 3 or 5 steps*/

function fizzbuzz(){
    for (let i = 1; i <= 100; i++) {
        if (!(i % 5) && !(i % 3)){
            console.log("fizzbuzz")
        }
        else if (!(i % 5)){
            console.log("buzz")
        }
        else if (!(i % 3)){
            console.log("fizz")
        }
        else{
            console.log(i)
        }
    }
}

function adding(num1,num2,allowed){
sum = num1 + allowed +num2
console.log(sum)
}

function oddeven(number){
    if (!(number % 2)){
        answer = "even"
    }else{
        answer = "odd"
    }
    return answer
}
//console.log(oddeven(2130))

let oddest = true;
const number = oddest ? "0" : "1";
console.log(number);

/*
COLLATZ CONJECTURE

The Collatz conjecture in mathematics asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.

It works like this:

- Start with any positive number
- If the number is odd, multiply it by 3 and add 1
- If the number is even, divide it by 2
- Repeat the above process on the resulting number

The Collatz conjecture has shown that any positive number
will eventually reach 1, which will result in a loop where
no further progress can be made

Use Javascript to test the Collatz conjecture:

Write a function that takes in a number, and run the collatz operation on every number from 1 to the number received as a parameter.

Include code that finds which number took the most amount of steps to reach 1, and how many steps it took.

Include code that finds which number that reached the highest number in its sequence, and what that peak value was.

Output the following console.log from your function:

“Running the Collatz procedure on all numbers from 1 to (number received):”

“The integer with most steps was (number), with (number of steps) total steps”

“The integer with the highest peak was (number), with a peak of (highest peak value)”
*/

class collatzElement{
    constructor(){
        this.startingNum
        this.stepsTaken = 0
        this.highestNumber
        this.currentNumber
    }
}

let arrayCollatzElements = []
function initCollatzElements(number){
    for (let i = 1; i <= number; i++) {
        arrayCollatzElements.push(new collatzElement)
        arrayCollatzElements[i-1].startingNum = i
        arrayCollatzElements[i-1].currentNumber = i
        arrayCollatzElements[i-1].highestNumber = i
    }
    theCollatzConjecture(arrayCollatzElements)
}

function theCollatzConjecture(arrayCollatzElements){
    mostStepsNum = arrayCollatzElements[0].stepsTaken
    mostStepsStartingNum = arrayCollatzElements[0].startingNum
    bigInt = arrayCollatzElements[0].highestNumber
    bigIntStartingNum = arrayCollatzElements[0].startingNum
    for (let i = 0; i < arrayCollatzElements.length; i++) {
        while (arrayCollatzElements[i].currentNumber > 1){
            arrayCollatzElements[i].currentNumber = checkOddEven(arrayCollatzElements[i].currentNumber)
            arrayCollatzElements[i].stepsTaken++
            if(arrayCollatzElements[i].currentNumber > arrayCollatzElements[i].highestNumber){
                arrayCollatzElements[i].highestNumber = arrayCollatzElements[i].currentNumber
            }
        }
    }
    for (let i = 0; i < arrayCollatzElements.length; i++) {
        if (arrayCollatzElements[i].stepsTaken > mostSteps){
            mostSteps = arrayCollatzElements[i].stepsTaken
            mostStepsStartingNum = arrayCollatzElements[i].startingNum
        }
        if (arrayCollatzElements[i].highestNumber > bigNumber){
            bigNumber = arrayCollatzElements[i].highestNumber
            bigIntStartingNum = arrayCollatzElements[i].startingNum
        }
    }
    result = 
    `Running the Collatz procedure on all numbers from 1 to (${arrayCollatzElements.lenght}):”
    
    “The integer with most steps was (number), with (number of steps) total steps”
    
    “The integer with the highest peak was (number), with a peak of (highest peak value)`
    return result
}
function checkOddEven(num){
    if (num >= 1){
        if (!(num % 2)){
            num /= 2
        } else{
            num *= 3
            num ++
        }
    }
    return num
}
console.log(initCollatzElements(20))
console.log(arrayCollatzElements)
