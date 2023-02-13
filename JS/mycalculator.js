//these gets the user input
const getnum1 = () => +document.getElementById("num1-el").value;
//these are badly named. numX-el should be numX-input, i should clarify the element when i can.
const getnum2 = () => +document.getElementById("num2-el").value;
const getOperator = () => document.querySelector(`#operator`).value
const getCollatzNum = () => +document.getElementById("collatz-input").value;


//these cahnges the contents of an element
const answer = (text) => document.getElementById("sum-el").textContent = text;
const collatzResult = (text) => document.getElementById("collatz-text").innerHTML = text;

/** @type {HTMLCanvasElement} */
const collatzStepsCanvas = document.getElementById("collatz-steps");
const collatzHighestCanvas = document.getElementById("collatz-highest");
//these would be reference to the elements for event listnesr and such
const getCollatzEl = document.getElementById("collatz-input");
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
        this.highestNum
        this.currentNum
    }
}

let arrayCollatzElements = []
function initCollatzElements(num){
    for (let i = 1; i <= num; i++) {
        arrayCollatzElements.push(new collatzElement)
        arrayCollatzElements[i-1].startingNum = i
        arrayCollatzElements[i-1].currentNum = i
        arrayCollatzElements[i-1].highestNum = i
    }
    theCollatzConjecture(arrayCollatzElements)
}

function theCollatzConjecture(arrayCollatzElements){
    mostStepsObj = arrayCollatzElements[0]
    mostStepsStartingNum = arrayCollatzElements[0].startingNum
    bigNumObj = arrayCollatzElements[0]
    bigIntStartingNum = arrayCollatzElements[0].startingNum
    for (let i = 0; i < arrayCollatzElements.length; i++) {
        while (arrayCollatzElements[i].currentNum > 1){
            arrayCollatzElements[i].currentNum = checkOddEven(arrayCollatzElements[i].currentNum)
            arrayCollatzElements[i].stepsTaken++
            if(arrayCollatzElements[i].currentNum > arrayCollatzElements[i].highestNum){
                arrayCollatzElements[i].highestNum = arrayCollatzElements[i].currentNum
            }
        }
    }
    for (let i = 0; i < arrayCollatzElements.length; i++) {
        if (arrayCollatzElements[i].stepsTaken > mostStepsObj.stepsTaken){
            mostStepsObj = arrayCollatzElements[i]
        }
        if (arrayCollatzElements[i].highestNum > bigNumObj.highestNum){
            bigNumObj = arrayCollatzElements[i]
        }
    }
    result =
    `Running the Collatz procedure on all numbers from 1 to ${arrayCollatzElements.length}. <br>
    The integer with most steps was ${mostStepsObj.startingNum}, with ${mostStepsObj.stepsTaken} total steps. <br>
    The integer with the highest peak was ${bigNumObj.startingNum}, with a peak of ${bigNumObj.highestNum}`
    collatzResult(result)
    collatzvisualized(mostStepsObj, collatzStepsCanvas)
    collatzvisualized(bigNumObj, collatzHighestCanvas)
    arrayCollatzElements.length = 0
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
getCollatzEl.addEventListener("change", function(){
    initCollatzElements(getCollatzNum())
})

//i generate the data i need. the canvas height should be the highest numbered gotten plus and lenght should be steps taken pluss a little padding

function collatzvisualized(obj, canvas){
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height)
    //sets origin bottom left
    ctx.translate(0,canvas.height)
    obj.currentNum = obj.startingNum
    ctx.scale(canvas.width / obj.stepsTaken,(canvas.height / obj.highestNum)*-1)
    ctx.lineWidth = obj.stepsTaken/obj.highestNum
    ctx.beginPath()
    for (let x = 0; x < obj.stepsTaken; x++) {
        ctx.moveTo(x, obj.currentNum)
        obj.currentNum = checkOddEven(obj.currentNum)
        ctx.lineTo(x + 1, obj.currentNum)
        ctx.strokeStyle = "#ff55ff"
        ctx.stroke()
        //need to remember to beign and close path when dealing with lines otherwise it is all 1 big line and it never closes so it never finishes "drawing" and this kills the computer (cannot draw over something that is never done drawn)
    }
    ctx.setTransform(1,0,0,1,0,0)
    ctx.closePath()
}

const names = [ "Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick" ];

const people = [{name: "tom", age: 3, birthyear: 1987, gender: "male"},
{name: "janette", age: 64, birthyear: 1976, gender: "female"},
{name: "odd", age: 46, birthyear: 1984, gender: "male"},
{name: "mary", age: 79, birthyear: 1997, gender: "male"},
{name: "peter", age: 23, birthyear: 1988, gender: "male"},
{name: "laika", age: 19, birthyear: 1981, gender: "female"},
{name: "jimmy", age: 32, birthyear: 1999, gender: "male"},
{name: "kenneth", age: 102, birthyear: 1918, gender: "male"},
{name: "tom", age: 41, birthyear: 1995, gender: "female"},
{name: "tom", age: 28, birthyear: 1945, gender: "male"},
{name: "timmy", age: 12, birthyear: 1989, gender: "female"},
{name: "claire", age: 17, birthyear: 1997, gender: "male"},
{name: "oliver", age: 15, birthyear: 1992, gender: "male"},
{name: "susanne", age: 37, birthyear: 1987, gender: "female"}]

function loopingArrays(array){
    const bang = []
    for (let i = 0; i < array.length; i++) {
        bang.push(array[i].name.substring(1).toUpperCase() + "!")
    }
    return bang
}
console.log(loopingArrays(people)) 