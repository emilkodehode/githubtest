/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("collision-el")
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

class vertex{
    constructor(){
        this.x = (Math.random() - 0.5) * canvas.width
        this.y = (Math.random() - 0.5) * canvas.height
        this.vx = rnd_velocity()
        this.vy = rnd_velocity()
        this.radius = 20
        this.color = random_color()
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
    }
    vertex_collide(collision, self){
        if(vertexContainer[collision] !== vertexContainer[self]){
            this.x += this.vx
            this.y += this.vy
            if ((this.x <= collision.x + collision.radius && this.x >= collision.x + collision.radius) && (this.y <= collision.y + collision.radius && this.y >= collision.y + collision.radius)){
                this.vx *= -1
                this.vy *= -1
                console.log("im colliding")
            }
        }
    }
    vertex_draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const vertexAmount = 6
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
        for (let coll = 0; coll < vertexContainer.length; coll++) {
            vertexContainer[i].vertex_collide(vertexContainer[coll], vertexContainer[i])
        }
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