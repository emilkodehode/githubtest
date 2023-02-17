const canvasEl =  document.getElementById("minesweeper")
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("minesweeper");
const ctx = canvas.getContext("2d");
//ctx.translate(canvas.width/2,canvas.height/2);

/*create grid of element i call them cells objects they hold a position and is either mine or not
then that based on their position this cell checks its neighbours and counts how many mines are their neighbours and repsrent it by a number
the cell start of drawn as a blank sqare and if this cells position is clicked the function ro reveal itself is called done*/

let cellsArray = []
let row = 10
let collumn = 10
let desiredMines = 25


class cell{
    constructor(){
        this.x
        this.y
        this.isMine =  false
        this.amountNeighbours = 0
        this.height = canvas.height / collumn
        this.width = canvas.width / row
        this.cellColor = "green"
    }
    tellNeighbours(theCellsArray){
        let amIBomb = this.isMine
        if(!amIBomb){
            for (let cell of theCellsArray) {
                if(cell.isMine === true){
                    switch(cell.isMine === true){
                        case (this.x === cell.x + 1 && this.y === cell.y):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x - 1 && this.y === cell.y):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x && this.y === cell.y + 1):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x && this.y === cell.y - 1):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x - 1 && this.y === cell.y - 1):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x + 1 && this.y === cell.y - 1):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x - 1 && this.y === cell.y + 1):
                        this.amountNeighbours++
                        break
                    case (this.x === cell.x + 1 && this.y === cell.y + 1):
                        this.amountNeighbours++
                        break
                    }
            }
            }
        }
    }
    // tellNeighbours(theCellsArray){
    //     let amIBomb = this.isMine
    //     for (let i = 0; i < theCellsArray.length; i++){
    //         let px = theCellsArray[i].x
    //         let py = theCellsArray[i].y
    //         let hasMine = theCellsArray[i].isMine
    //         switch(!(amIBomb)){
    //             case (this.x === px + 1 && this.y === py && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px - 1 && this.y === py && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px && this.y === py + 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px && this.y === py - 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px - 1 && this.y === py - 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px + 1 && this.y === py - 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px - 1 && this.y === py + 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //             case (this.x === px + 1 && this.y === py + 1 && hasMine):
    //                 this.amountNeighbours++
    //                 break
    //         }
    //     }
    // }
    cellRender(){
        //this x,y minus this size / 2 widht height this size
        ctx.beginPath()
        ctx.rect(this.x * this.width, this.y * this.height, this.width, this.height);
        ctx.fillStyle = this.cellColor
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.textAlign = "center"
        ctx.fillStyle = "red";
        ctx.fillText(this.amountNeighbours, this.x * this.width + this.width/2, this.y * this.height + this.height/2)
        ctx.closePath()
    }
    //cell size is equal to canvas height width / amount - pixelpadding
}


function initCells(){
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < collumn; y++) {
            let gameCell = new cell
            gameCell.x = x
            gameCell.y = y
            cellsArray.push(gameCell)
        }
    }
    initMines(cellsArray)
    for (let i = 0; i < cellsArray.length; i++) {
        cellsArray[i].tellNeighbours(cellsArray)
        cellsArray[i].cellRender()
    }
}

function initMines(cellsArray){
    let amountMines = 0
    while (amountMines < desiredMines){
        let rnd = Math.floor(Math.random() * cellsArray.length)
        if(cellsArray[rnd].isMine === false){
            let roll = Math.floor(Math.random() * 4)
            if (roll > 1){
                cellsArray[rnd].isMine = true
                cellsArray[rnd].cellColor = "blue"
                amountMines++
                if(amountMines === desiredMines){
                    return
                }
            }
        }
    }
}

initCells()
console.log(cellsArray)
function handleUserClick(clickx,clicky){
    
}

canvasEl.addEventListener("click", function(event){
    let clickx = event.offsetX - canvas.width/2
    let clicky = event.offsetY - canvas.height/2
})


function update(){
    requestAnimationFrame(update);
}
