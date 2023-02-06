function init(){document.getElementById("yourform").reset();} window.onload = init; //inputbegone

// arrow function that returns
const getAge = () => age = parseInt(document.getElementById("agecheck").value)
const getName = () => userName = document.getElementById("username").value
const getOccupation = () => occupation = document.getElementById("occupation").options[document.getElementById("occupation").selectedIndex].text
const getStatus = () => occupation = document.getElementById("status").options[document.getElementById("status").selectedIndex].value
const getDrink = () => drink = document.querySelectorAll('input[name="drink"]');
//almost forgot to add ' and " to differentiate between information i want template literal would probably work worked for rgba(0,0,0,0)

// arrow functions that receives, declares gets i dunno what to call it
const tooOld = ageRnd => document.getElementById("agecheck").value = ageRnd
const updateAgeText = updateText => document.getElementById("agetext").innerHTML = updateText
const updateNameText = updateText => document.getElementById("nametext").innerHTML = updateText
const updateOccupationText = updateText => document.getElementById("occupationtext").innerHTML = updateText
const updateDrinkText = updateText => document.getElementById("drinktext").innerHTML = updateText
const updateStatusText = updateText => document.getElementById("statustext").innerHTML = updateText

// declaring some elements so i can do stuff them
const ageEl = document.getElementById("agecheck")
const nameEl = document.getElementById("username")
const occuptionEl = document.getElementById("occupation")
const statusEl = document.getElementById("status")

// decalring some div conatiners and starting with the rest of page hidden incase user is bellow 18
const ageGateEl = document.getElementById("agegate")
ageGateEl.style.visibility = "hidden"
const nameGateEl = document.getElementById("namegate")
nameGateEl.style.visibility = "hidden"

// ageEl.addEventListener("change",function testing_age(){
//     getAge()
//     if(age >= 70){
//         tooOld(Math.round(Math.random()*50 + 10))
//         testing_age()//is this only way to call itself?
//     }
//     else if (age === 69){
//         ageText = `giggity`
//     }
//     else if (age > 18){
//         ageText = `${age} nice, then we can carry on.`
//         site_visibility(true)
//     } else if (age === 18){
//         ageText = `${age} ah, good enough. let's carry on.`
//         site_visibility(true)
//     } else if (age < 18 && age > 0){
//         ageText = `now im not endorsing lying on the internett but im just some text not the police`
//         site_visibility(false)
//     }else{
//         ageText = `come on just put som value in max is 69 eyooooo`
//         site_visibility(false)
//     }
//     updateAgeText(ageText)
// })

//this is no different than if else i feel.
ageEl.addEventListener("change",function testing_age(){
    const age = getAge()
    let validAge = true
    switch (true){
        case (age > 69):
            tooOld(Math.round(Math.random()*50 + 5))
            testing_age()//is this only way to call itself?
            break
        case (age === 69):
            ageText = `giggity`
            break
        case (age === 42):
            ageText = `never red it never watched it`
            break
        case (age > 18):
            ageText = `${age} nice, then we can carry on.`
            break
        case (age === 18):
            ageText = `${age} ah, good enough. let's carry on.`
            break
        case (age < 18 && age > 0):
            ageText = `now im not endorsing lying on the internett but im just some text not the police`
            validAge = false
            break
        default:
            ageText = `come on just put som value in max is 69 eyooooo`
            validAge = false
    }
    updateAgeText(ageText)
    div_visibility(validAge, ageGateEl)
})
//switch is for asking one question. so how can i do my age check then? switch age > 18 case but how do i catch my 70 clause.
//i notice i have 6 "questions", how to resolve this without nesting a switch chain. and if so would nesting if be better.
//check for age > 18 then go into that

function div_visibility(visibale, element){
    if(visibale){
        element.style.visibility = "visible"
        element.style.opacity = 1
    } else{
        element.style.opacity = 0
        element.style.visibility = "hidden"
    }
    //order of operation is important. the animation plays wroong if order is not considerd.
    //by initialising a defualt style in css and prepping it by transition and setting a timer i can animate just about anything i belive.
}

nameEl.addEventListener("change", function(){
    getName()
    if (userName){
        nameText = `Hello ${userName}, my name is ${my_name(userName)}`
    }
    else {
        console.log("write a name, just anything goes. also i lied limit is 16.")
    }
    updateNameText(nameText)
    div_visibility(userName, nameGateEl)
})

occuptionEl.addEventListener("change",function(){
    const intrest = getOccupation()
    switch(!intrest.localeCompare("Monster")){
        case true:
        myResponse = `${intrest} wow such a edgy choice`
        //i could loop trough unwated "occupations" but i just wanna compare strings and i cannot do it. or use the value space in html oh well im spent now on this first assignment
        break
        default:
        myResponse = `yoooo! ${intrest} that is good choice`
    }
    updateOccupationText(myResponse)
})

//omg i was so silly the value was always drink so ofc i always got drink returned putting it as desired results fixed it
//also i could use this but i prefer drink[i] for now its more readable for me to keep track. until i understand this more.
for (let i = 0; i < getDrink().length; i++) {
  drink[i].addEventListener("change", function drink_check() {
    let theDrink = drink[i].value;
    hydrate = `always remember to drink good ole ${theDrink} for that pure refreshing hydrated feeling`
    updateDrinkText(hydrate)
    });
}
//if not one thing then the other

function my_name(userName){
    let myName = userName.split("")
    //im taking the users name splits it into an array and reversing the order and joining it to make my own name.
    //i should make verything lowercase and capitalize the first letter it at the end. why lowercase everything first? what if user put more than one big letter.
    myName = myName.reverse()
    //i could just concatinate this but i want more overview of what the process is for myself so this is easier for me for now to keep track of
    myName = myName.join("")
    return myName
}

statusEl.addEventListener("change", function(){
    let condition
    if(getStatus() ? condition = getStatus() : condition = getStatus())
    //working as intended not a cheap way at all. just comparing good old values
    updateStatusText(`you are indeed a ${condition} human, very good.`)
})