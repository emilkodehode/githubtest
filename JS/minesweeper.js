const canvasEl =  document.getElementById("minesweeper")
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("minesweeper");
const ctx = canvas.getContext("2d");
//ctx.translate(canvas.width/2,canvas.height/2);

/*create grid of element i call them cells objects they hold a position and is either mine or not
then that based on their position this cell checks its neighbours and counts how many mines are their neighbours and repsrent it by a number
the cell start of drawn as a blank sqare and if this cells position is clicked the function ro reveal itself is called done*/

const getSize = () => +document.querySelector("#size").value
const getMines = () => +document.querySelector("#mines").value

let cellsArray = []
let cellToClear = 0

function generateGame(){
    cellsArray = []
    cellToClear = (getSize() * getSize()) - getMines()
    let size = getSize()
    initCells(size)
}

class cell{
    constructor(){
        this.x
        this.y
        this.isMine =  false
        this.isRevealed = false
        this.amountNeighbours = 0
        this.height = canvas.height / getSize()
        this.width = canvas.width / getSize()
        this.cellColor = "#8BBCCC"
    }
}

function tellNeighbours(cellClicked){
    if(!cellClicked.isMine){
        for (let cell of cellsArray) {
            if(cell.isMine === true){
                switch(cell.isMine === true){
                    case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y + 1):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y - 1):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y - 1):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y + 1):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y + 1):
                    cellClicked.amountNeighbours++
                    break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y - 1):
                    cellClicked.amountNeighbours++
                    break
                }
            }
        }
    }
}

function victoryChecker(){
    cellToClear--
    console.log(cellToClear)
    if(cellToClear === 0){
        window.alert("you won")
    }
}
console.log(cellToClear)

function cellRevealer(cellClicked){
    cellReveal(cellClicked)
    if(cellClicked.isMine){
        window.alert("you clicked a mine")
    }
    else if(!cellClicked.isMine && cellClicked.amountNeighbours === 0){
        for (let cell of cellsArray) {
            if(!cell.isMine && !cell.isRevealed && cell.amountNeighbours === 0){
                switch(true){
                    case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y + 1):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y - 1):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y - 1):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y + 1):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y + 1):
                    cellRevealer(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y - 1):
                    cellRevealer(cell)
                    break
                }
            }
            else if(!cell.isMine && !cell.isRevealed){
                switch(true){
                    case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y + 1):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x && cellClicked.y === cell.y - 1):
                    cellReveal(cell)
                break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y - 1):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y + 1):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x + 1 && cellClicked.y === cell.y + 1):
                    cellReveal(cell)
                    break
                case (cellClicked.x === cell.x - 1 && cellClicked.y === cell.y - 1):
                    cellReveal(cell)
                    break
                }
            }
        }
    }
}

function cellRender(cell){
    //this x,y minus this size / 2 widht height this size
    ctx.beginPath()
    ctx.rect(cell.x * cell.width, cell.y * cell.height, cell.width, cell.height);
    ctx.fillStyle = "purple"
    ctx.fill();
    ctx.closePath()
}

function cellReveal(cell){
    cell.isRevealed = true
    //this x,y minus this size / 2 widht height this size
    ctx.beginPath()
    ctx.rect(cell.x * cell.width, cell.y * cell.height, cell.width, cell.height);
    ctx.fillStyle = cell.cellColor
    ctx.fill();
    let fontSize = 500 / getSize()
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "#5C2E7E";
    ctx.fillText(cell.amountNeighbours, cell.x * cell.width + cell.width/2.5, cell.y * cell.height + cell.height/1.5)
    ctx.textAlign = "center"
    ctx.closePath()

    victoryChecker()
}
//cell size is equal to canvas height width / amount - pixelpadding

function initCells(size){
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            let gameCell = new cell
            gameCell.x = x
            gameCell.y = y
            cellsArray.push(gameCell)
        }
    }
    initMines(cellsArray)
    for (let i = 0; i < cellsArray.length; i++) {
        cellRender(cellsArray[i])
        tellNeighbours(cellsArray[i])
    }
}

function initMines(cellsArray){
    let amountMines = 0
    let desiredMines = getMines()
    while (amountMines < desiredMines){
        let rnd = Math.floor(Math.random() * cellsArray.length)
        if(cellsArray[rnd].isMine === false){
            let roll = Math.floor(Math.random() * 4)
            if (roll > 1){
                cellsArray[rnd].isMine = true
                cellsArray[rnd].cellColor = "#333"
                amountMines++
                if(amountMines === desiredMines){
                    return
                }
            }
        }
    }
}

console.log(cellsArray)
function handleUserClick(clickx,clicky){
    for (let i = 0; i < cellsArray.length; i++) {
        cellClicked(clickx,clicky, cellsArray[i])
    }
}

//oh snap what the fuk is this and how the hell does it work and how did i manage to figure it out i think the variables is mirrored and evertyhing works on pure luck
//i know mouseclick is correct and i check if my click is inside the box of a cell. so i go trough every cell and check if my is inside? but why is a cell start doubled and cell end just one
function cellClicked(clickx,clicky, cell){
    let cellxstart = cell.x * cell.width + cell.width
    let cellxend = cell.x * cell.width
    let cellystart = cell.y * cell.height + cell.height
    let cellyend = cell.y * cell.height
    if((clickx <= cellxstart && clickx >= cellxend) && (clicky <= cellystart && clicky >= cellyend)){
        console.log(`mx ${clickx} my ${clicky} cxs ${cellxstart} cxe ${cellxend} cys ${cellystart} cye ${cellyend}`)
        cellRevealer(cell)
    }
}

canvasEl.addEventListener("click", function(event){
    let clickx = (event.offsetX - canvas.width) + canvas.width
    let clicky = (event.offsetY - canvas.height) + canvas.height
    handleUserClick(clickx,clicky)
    console.log(`event clickX ${clickx} clickY ${clicky}`)
})
