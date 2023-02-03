const getnum1 = () => num1 = +document.getElementById("num1-el").value;
const getnum2 = () => num2 = +document.getElementById("num2-el").value;
const add = document.getElementById("add-el")
const subtract = document.getElementById("subtract-el")
const divide = document.getElementById("divide-el")
const multiply = document.getElementById("multiply-el")

add.addEventListener("click", function(){
    getnum1()
    getnum2()
    const sum = num1 + num2;
    answer(sum);})
subtract.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 - num2;
    answer(sum);})
divide.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 / num2;
    answer(sum);})
multiply.addEventListener("click", function (){
    getnum1()
    getnum2()
    const sum = num1 * num2;
    answer(sum);})
function answer (text){
    document.getElementById("sum-el").textContent = text;
    console.log(text)}

/*modulo i want t understand this. the % operator gives me remainder if it is any it returns 1.
i see this used in many examples for odds and even but also to jump from 3 or 5 steps*/

// let numbers = []
// for (let i = 0; i < 100; i++) {
//     numbers.push(i)
// }
// function modulo(manynumbers){
//     let modulonumberlist = []
//     let modulo = 5
//     for (let i = 0; i < manynumbers.length; i++) {
//         let number = manynumbers[i] % modulo
//         if(number){
//             console.log(number)
//             modulonumberlist.push(i)
//         }
//     }
//     console.log(modulonumberlist)
// }
// modulo(numbers)

// const numberstest = []
// const offset = 4
// for (let i = 0 ; i < 100; i++) {
//   if (i % 5 === offset) numberstest.push(i)
// }
// console.log(numberstest)


// teacher gave me this example and now im gonna do the fizzbuzz challenge
// const getNthNumbers = (n, range) => {
//     let nthNumbers = [];
//     for (let num of [...Array(range).keys()]) {
//         if (!(num % n)) nthNumbers.push(num);
//     }
//     return nthNumbers;
// };
// console.log(getNthNumbers(5, 100));

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


