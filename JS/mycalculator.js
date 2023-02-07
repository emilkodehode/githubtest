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