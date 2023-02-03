/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("zaxis-el")
const ctx = canvas.getContext("2d")
ctx.translate(canvas.width/2,canvas.height/2)

function random_color(){
    const rndnum1 = Math.random() * 255;
    const rndnum2 = Math.random() * 255;
    const rndnum3 = Math.random() * 255;
    const rndcolor = `rgba(${rndnum1},${rndnum2},${rndnum3},100)`
    return rndcolor;
}

const maxv = 2
function rnd_velocity(){
    veloctiy = Math.random() * maxv + 0.5
    return veloctiy
}

let PROJECTION_CENTER_X = canvas.width / 2; // x center of the canvas
let PROJECTION_CENTER_Y = canvas.height / 2; // do i need this i already have 0,0 in the middle
let PERSPECTIVE = canvas.width * 0.8; // The field of view of our 3D scene

class vertex{
    constructor(){
        this.x = (Math.random() - 0.5) * canvas.width
        this.y = (Math.random() - 0.5) * canvas.height
        this.z = (Math.random() * 30)+ this.radius
        this.vx = rnd_velocity()
        this.vy = rnd_velocity()
        this.vz = rnd_velocity()
        this.radius = 10
        this.color = random_color()

        this.xProjected = 0
        this.yProjected = 0
        this.scaleProjected = 0
    }
    vertex_project(){
        // The scaleProjected will store the scale of the element based on its "perspective" is more pseud depth
        this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
        // The xProjected is the x position on the 2D world
        this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
        // The yProjected is the y position on the 2D world
        this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
    }
    vertex_move(){
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
        this.z += this.radius
        if (this.z > PERSPECTIVE/2){
            this.radius *= -1
        }
        if (this.z < -PERSPECTIVE/2){
            this.radius *= -1
        }
    }
    vertex_draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const vertexAmount = 4
let vertexContainer = []
function vertex_init(){
    for (let i = 0; i < vertexAmount; i++) {
        vertexContainer.push(new vertex)
    }
}

vertex_init()
function vertex_handler(){
    for (let i = 0; i < vertexContainer.length; i++) {
        vertexContainer[i].vertex_move()
        //vertexContainer[i].vertex_project()
        vertexContainer[i].vertex_draw()
    }
}


function update(){
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height)
    vertex_handler()
    //console.log(pointBox[0].x)
    requestAnimationFrame(update)
}
update()