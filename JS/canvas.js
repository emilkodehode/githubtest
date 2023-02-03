const canvasBtn = document.getElementById("canvas-btn");
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas-el");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2,canvas.height/2);

function random_color(){
    const rndnum1 = Math.random() * 255;
    const rndnum2 = Math.random() * 255;
    const rndnum3 = Math.random() * 255;
    const rndcolor = `rgba(${rndnum1},${rndnum2},${rndnum3},100)`
    return rndcolor;
}

// classes are versatile and i like them i want to understand them.
// i tried this without a class and adding this to an array and calling them was hard without the use of a class
class ball{
    // if i understand this is just data i feed it. like a car needs wheels engine roof color and such.
    constructor(){
        this.color = random_color();
        this.x = 0,
        this.y = 0,
        this.size = 25,
        this.spdx = 3 * (Math.random() * 3 - 1.5),
        this.spdy = 5 * (Math.random() * 3 - 1.5)
    }
    // this is a behavior i can call i can probably place this outside and feed it arguments or have it in here and call it directly i think.
    // i culd probably have functions outside and feed it var from this i think i can see a scenario that works.
    ball_move(){
        this.x += this.spdx;
        this.y += this.spdy;
        if (this.x + this.size /2 > canvas.width/2){
            this.spdx *= -1;
        }
        if (this.x - this.size /2 < -canvas.width/2){
            this.spdx *= -1;
        }
        this.y += this.spdy;
        if (this.y + this.size /2 > canvas.height/2){
            this.spdy *= -1;
        }
        if (this.y - this.size /2 < -canvas.height/2){
            this.spdy *= -1;
        }
    }
    ball_render(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


function ball_color_on_bounce(item){
    const {size,x,y} = item;
    if (x + size/2  > canvas.width/2 || x - size/2 < -canvas.width/2){
        let newcolor = random_color();
        //console.log("i hit edge" + " " + newcolor);
        //console.log(x + " " + canvas.width/2 +" "+ -canvas.width/2)
        item.color = newcolor;
    }
    if (y + size/2  > canvas.width/2 || y - size/2 < -canvas.width/2){
        let newcolor = random_color();
        //console.log("i hit edge" + " " + newcolor);
        //console.log(x + " " + canvas.width/2 +" "+ -canvas.width/2)
        item.color = newcolor;
    }
}

let moreballs = [];
function balls_on_balls(){
    for (let i = 0; i < ball.length; i++){
        balls.push(new ball());
    }
}

canvas.addEventListener("click", function(event){
    let x = event.offsetX - canvas.width/2
    let y = event.offsetY - canvas.height/2
    console.log(x + " " + y)
    userball = new ball
    userball.x = x
    userball.y = y
    balls.push(userball)
})

const startAmount = 1;
let balls = [];
function initial_ball_count(){
    for (let i = 0; i < startAmount; i++){
        balls.push(new ball());
    }
}
initial_ball_count();
function handle_balls(){
    for (let i =0 ; i < balls.length;i++){
        balls[i].ball_move();
        ball_color_on_bounce(balls[i]);
        balls[i].ball_render();
    }
}


//const trailNum = +document.getElementById("trail-input").value;
const get_trail_input = () => trailNum = document.getElementById("trail-input").value; 
// 0-1 = 0-10  1/10 = 0.1
const trailEl = document.getElementById("trail-input");
function trail_lenght(){
    const lenght = `rgba(0,0,0,${get_trail_input() / 10})`;
    return lenght;
}
trailEl.addEventListener("change", function(){
    trail_lenght();
})

function update(){
    ctx.fillStyle = trail_lenght();
    ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
    handle_balls();
    //console.log(balls[0].x)
    requestAnimationFrame(update);
}
update();

//button switch statement maybe?!!?