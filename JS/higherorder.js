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

// for (let i = 0; i < people.length; i++) {
//     return people[i]
// }
// for (let person of people){
//     return person
// }
// function population(array){
//     persons = []
//     array.forEach(element => {
//         persons.push(element)
//     });
//     return persons
// }
// console.log(population(people))

//just keeping the long version so i can easier see what is going on.
const isAdult = array => array.filter(array => (array.age >= 18))
// const isAdult = array.filter(function(array){
//     if(array.age <= 18){
//         return true
//     }
// })
console.log(isAdult(people))

//sort places a before b, so a>b places a before b if a is larger. if a<b if places a after b. index wise.
//the teranry seemed weird at first and unnecesary but after reading the mozilla doc it is to prevent different broswer from accidently not sorting as expected it seems
const ageSort = array => array.sort((a , b) => (a.age > b.age ? 1 : -1))

console.log(ageSort(people))
