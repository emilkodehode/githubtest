/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("fancylines-el")
const ctx = canvas.getContext("2d")
ctx.translate(canvas.width/2,canvas.height/2)

const maxv = 5
function rnd_velocity(){
    veloctiy = Math.random() * maxv + 0.5
    return veloctiy
}
class points{
    constructor(){
        this.x = 0
        this.y = 0
        this.vx = rnd_velocity()
        this.vy = rnd_velocity()
        this.gravity = rnd_velocity()
    }
    point_move(){
        this.x += this.vx
        if (this.x > canvas.width/2){
            this.vx *= -1
        }
        if (this.x < -canvas.width/2){
            this.vx *= -1
        }
        this.y += this.vy
        if (this.y > canvas.height/2){
            this.vy *= -1
        }
        if (this.y < -canvas.height/2){
            this.vy *= -1
        }
    }
}

const pointAmount = 4
let pointBox = []
function point_init(){
    for (let i = 0; i < pointAmount; i++) {
        pointBox.push(new points)
    }
}
point_init()
function point_handler(){
    for (let i = 0; i < pointBox.length; i++) {
        pointBox[i].point_move()
        point_to_point_render()
    }
}


function point_to_point_render(){
    ctx.beginPath()
    for (let i = 0; i < pointAmount; i++) {
        const {x,y} = pointBox[0]
        ctx.moveTo(x, y)
        const temp = pointBox.shift()
        pointBox.push(temp)
        const nx = pointBox[0].x
        const ny = pointBox[0].y
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = "#ff55ff"
        ctx.stroke()
        //need to rmember to beign and close path when dealing with lines otherwise it is all 1 big ling and it never closes so it can be done and get passed or something fancy
    }
    ctx.closePath()
}

function update(){
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height)
    point_handler()
    //console.log(pointBox[0].x)
    requestAnimationFrame(update)
}
update()
//i want to create points that have lines betwen them ill start with just making pa to pb