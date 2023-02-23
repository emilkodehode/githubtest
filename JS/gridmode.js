/* 
i got 9 cells i want to click 2 different ones and swap them. the cells are divs with grid area.
should i target the class and change those or target the styling itself and change it.
most likely does not matter what i do need is a to make presets i think
cause i want t make a little game the cells are scrambled and place them in order. so 1-9
i need to have a condition that checks what is the correct and that needs to compare to what?
loop trough each cell check if cell and class match up is something i can do
so funct that on two clicks swaps 2 cells and when all cells are in desired order victory

how do i test for victory condition well i arange each child in gridcontainer an id with a number wich should be 0 to N
and when i want to test for victory i can just refer to id sequences cause if i check what children container has and compare it to user current list of id items
if list is not the desired order no win

it works

gradient puzzle cause colors

so you can win but it is impossible i need to lock the corners so user can have some way to navigate what color goes into and toward what graident and such

locking top left easy first child last child easy cause that would be top left and bottom right they should alwasy stay locked none movable

top lleft is ofc elemnt number detirmend by collumn wanted and bottom right is totalt lenght minus collum wanted and i am done
just to give them the none movable class i hope
*/

const cellContainer = document.querySelector("#gridcontainer")
const getRows = document.querySelector("#rows")
const getCollumns = document.querySelector("#collumns")
const getCellAmount = document.querySelector("#cells")
const colorCellsBtn = document.querySelector("#colorcells")

let colorCellsArray = []
let solution = []
let userSolution = []

colorCellsBtn.addEventListener("click", () =>{
    colorCellInit()
})

/* 
i want to send in a template literal looking like
cell1 cell2 cell3 cell4
cell5 cell6 cell7 cell8
cell9 cell10 cell11 cell12
*/
function colorCellInit(){
    cellContainer.replaceChildren();
    let collumnsWantedTL = ``
    let num = 0
    let rndNum1 = Math.random()*10 + 4
    let rndNum2 = Math.random()*10
    let rndNum3 = Math.random()*10 + 2
    let makeSolution = []

    for (let row = 0; row < +getRows.value; row++) {
        collumnsWantedTL += `"`
        for (let i = 0; i < +getCollumns.value; i++) {
            collumnsWantedTL += `gridcell${num} `
            num++
        }
        collumnsWantedTL += `"`
    }
    cellContainer.style.gridTemplateAreas = collumnsWantedTL
    for (let i = 0; i < +getCellAmount.value; i++) {
        let div = document.createElement("div")
        div.className = `gridcell${i} gridcell `
        div.id = `${i}`
        cellContainer.append(div)
    }
    for (const cell of cellContainer.children) {
        let rect = cell.getBoundingClientRect()
        let left = rect.left / rndNum2
        let top = rect.top / rndNum1
        let right = rect.right /  rndNum3
        cell.style.backgroundColor = `rgba(${left}, ${top}, ${right},1)`
        makeSolution.push(cell.id)
    }
    let number = cellContainer.childElementCount
    cellContainer.children[0].className += "nomove"
    cellContainer.children[+getCollumns.value - 1].className += "nomove"
    cellContainer.children[number - +getCollumns.value].className += "nomove"
    cellContainer.children[number - 1].className += "nomove"
    solution = makeSolution.toString()
    scrambleColors()
}


function scrambleColors(){
    let scrambleCycle = (+getCollumns.value * +getRows.value) / 2
    let scrambleIterator = 0
    while(scrambleIterator < scrambleCycle){
        let cell1 = cellContainer.children[Math.floor(Math.random() * cellContainer.childElementCount)]
        let cell2 = cellContainer.children[Math.floor(Math.random() * cellContainer.childElementCount)]
        if(!cell1.classList.contains("nomove") && !cell2.classList.contains("nomove")){
            cellSwap(cell1,cell2)
        }
        scrambleIterator++
    }
}

let firstClick = undefined
let secondClick = undefined
//if clicking in the container the cointainer gets gridded
cellContainer.addEventListener("click",function(e){
    if(e.target.id !== "gridcontainer" && !e.target.classList.contains("nomove")){
        if(!firstClick){
            firstClick = e.target
            e.target.classList.toggle("rocking");
        }
        else if(firstClick){
            secondClick = e.target
            e.target.classList.toggle("rocking");
        }
        if(firstClick && secondClick){
            cellSwap(firstClick, secondClick)
            firstClick = undefined
            secondClick = undefined
            updateUserSolution()
        }
    }
    console.log(userSolution)
    if(solution === userSolution){
        window.alert("you have won")
        console.log("you did it")
    }
}, true)

function updateUserSolution(){
    userSolution = ""
    let makingUserSolution = []
    for (let i = 0; i < cellContainer.children.length; i++) {
        makingUserSolution.push(cellContainer.children[i].id)
    }
    userSolution = makingUserSolution.toString()
}

function cellSwap(firstCell, secondCell){
    let id1 = firstCell.id
    let id2 = secondCell.id
    firstCell.id = id2
    secondCell.id = id1
    let className1 = firstCell.className
    let className2 = secondCell.className
    firstCell.className = className2
    secondCell.className = className1
    let color1 = firstCell.style.backgroundColor
    let color2 = secondCell.style.backgroundColor
    firstCell.style.backgroundColor = color2
    secondCell.style.backgroundColor = color1
    firstCell.classList.remove("rocking")
    secondCell.classList.remove("rocking")

}