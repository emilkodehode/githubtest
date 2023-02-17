const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes", "electronics"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma", "gym"],
    },
    {
      name: "Chris",
      male: true,
      age: 20,
      hobbies: ["cycling", "football", "pool", "tv"],
    },
    {
      name: "Claire",
      male: false,
      age: 27,
      hobbies: ["jogging", "travelling"],
    },
    {
      name: "Stephanie",
      male: false,
      age: 26,
      hobbies: ["writing", "piano", "books", "opera"],
    },
    {
      name: "Herman",
      male: true,
      age: 31,
      hobbies: ["gym", "weights"],
    },
    {
      name: "Trevor",
      male: true,
      age: 19,
      hobbies: ["parkour"],
    },
  ];
  
  
// Complete the .filter method to filter out only the objects that have an age from
// (and including) 26 to (and including) 28 and at least 3 hobbies


  
const filteredPeople = people.filter(people => people.age >= 26 && people.age <= 28 && people.hobbies.length >= 3)

console.log(filteredPeople);


//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Susan', male: false, age: 26, hobbies: Array(5)}
// 1: {name: 'Avery', male: true, age: 28, hobbies: Array(4)}
// 2: {name: 'Stephanie', male: false, age: 26, hobbies: Array(4)}
// length: 3


//////////////////////////////////////////////////////////////////////////////////


//Filter out the objects who are male and have a name of exactly 6 characters


const filteredPeople2 = people.filter(peopl => peopl.male === true && peopl.name.length === 6);


console.log(filteredPeople2);


//this should log:
// (3) [{…}, {…}, {…}]
// 0: {name: 'Thomas', male: true, age: 23, hobbies: Array(3)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// 2: {name: 'Trevor', male: true, age: 19, hobbies: Array(1)}
// length: 3


//////////////////////////////////////////////////////////////////////////////////


//Filter out the objects that have "gym" included in their hobbies


const filteredPeople3 = people.filter(people => people.hobbies.includes("gym"));


console.log(filteredPeople3);


//this should log:
// (2) [{…}, {…}]
// 0: {name: 'Phillip', male: true, age: 24, hobbies: Array(4)}
// 1: {name: 'Herman', male: true, age: 31, hobbies: Array(2)}
// length: 2

const fruits = [
    "Banana",
    "Apple",
    "Pear",
    "Mango",
    "Melon",
    "Pineapple",
    "Grapes",
    "Peach",
];


// Complete the .map method to return 1 random character from each element in uppercase


const mappedFruits = fruits.map(fruit => fruit.charAt(Math.floor(Math.random()*fruit.length)).toUpperCase());


console.log(mappedFruits);


// This should log something like this:


// (8) ['A', 'P', 'E', 'M', 'E', 'E', 'R', 'H']
const numArray = [32, 11, 4, 67, 97, 61, 52, 12, 26, 8, 70, 23];

const mappedArray = numArray.map(num => num >= 50 ? num*5 : num*10);


console.log(mappedArray);


//fullfør .map method funksjonen:
//hvis tallet er over 50, return tallet ganget med 5,
//hvis tallet er under 50, return tallet ganget med 10


// consol skal logge dette hvis du har gjort rett:
// Array(12)
// 0: 320
// 1: 110
// 2: 40
// 3: 335
// 4: 485
// 5: 305
// 6: 260
// 7: 120
// 8: 260
// 9: 80
// 10: 350
// 11: 230

const names = [
    "Bradley",
    "Mae",
    "Oscar",
    "Isac",
    "Alexandra",
    "Margie",
    "Rob",
    "Clay",
    "Timothy",
    "Kennedy",
    "Rita",
    "Scott",
    "Sarah",
    "Felicia",
    "Gill",
    "Gavin",
    "Nellie",
    "Hope",
];


const hobbies = [
    "cycling",
    "football",
    "pool",
    "jogging",
    "travelling",
    "dancing",
    "movies",
    "coffee",
    "skateboarding",
    "guitar",
    "concerts",
    "Dancing",
    "movies",
    "coding",
    "games",
    "Books",
    "memes",
    "electronics",
    "dancing",
    "boxing",
    "wrestling",
    "mma",
    "gym",
    "cycling",
    "football",
    "pool",
    "tv",
    "writing",
    "piano",
    "books",
    "opera",
];


// Use whatever tools you deem necessary to accomplish the following:


// Generate an object for each name in the names array formatted as follows:
// {
//     name: (the name from the name array),
//     age: (generate a random age from 18-50),
//     hobbies: (randomly generate an array of 3 hobbies from the hobbies array. PS make
//               sure the hobbies are 3 unique ones)
// }

const filterdHobbies = hobbies.map(hobby => hobby.toLowerCase())
console.log(filterdHobbies)
function removeDuplicate(data){
    noDuplicate = []
    data.forEach((element) => {
        if (!noDuplicate.includes(element)){
            noDuplicate.push(element)
        }
    });
    return noDuplicate
}
console.log(removeDuplicate(filterdHobbies))

function randomHobby(hobbiesArray, hobbyAmount){
  let rndHobbyArray = []
  while(rndHobbyArray.length < hobbyAmount){
    rndHobby = hobbiesArray[Math.floor(Math.random() * hobbiesArray.length)]
    if(!rndHobbyArray.includes(rndHobby)){
      rndHobbyArray.push(rndHobby)
    }
  }
  return rndHobbyArray
}

// example:

function realHumans(names, array){
    let people = []
    for (let name of names){
        let person = {}
        person["name"] = name
        person["age"] = Math.floor(Math.random() * 32 + 18)
        person["hobbies"] =  randomHobby(array, 3)
        people.push(person)
    }
    return people
}
console.log(realHumans(names, filterdHobbies))
// {
//     name: "Scott"
//     age: 31
//     hobbies: ["books", "electronics", "guitar"]
// }


// PS: The hobbies array has to be cleaned up! Write code to remove duplicates before using it.
// Beware the capitalized duplicates as well.


// Good luck!
//----------------------------------------------------------------  

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}

console.log(rowSumOddNumbers(6))
console.log(rowSumOddNumbers(9))
console.log(rowSumOddNumbers(3))

function descendingOrder(n){
  return n.toString().split("").sort(function(a,b){return b - a}).join("")
}

console.log(descendingOrder(347384))
console.log(descendingOrder(123456789))