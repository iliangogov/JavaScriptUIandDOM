var context;
var myCanvas;
var x=100;
var y=200;
var dx=5;
var dy=5;
var radius=20;
var image;

function init()
{
    myCanvas=document.querySelector('#myCanvas');
    context= myCanvas.getContext('2d');
    image=new Image();
    image.src='images/ball.png';


   // setInterval(draw,15);
    window.requestAnimationFrame(draw);
}

function draw()
{
    context.clearRect(0,0,300,300);
    context.beginPath();
    context.drawImage(image, x-radius, y-radius,radius*2,radius*2);
   // context.fillStyle="#0000ff";
   // context.arc(x,y,radius,0,Math.PI*2,true);
    context.closePath();
    //context.fill();
    // Boundary Logic
    if( x<radius || x>300-radius) dx=-dx;
    if( y<radius || y>300-radius) dy=-dy;
    x+=dx;
    y+=dy;
    window.requestAnimationFrame(draw);
}


