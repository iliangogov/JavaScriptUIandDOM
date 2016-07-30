function init() {
    var myCanvas = document.querySelector('#myCanvas');
    var context = myCanvas.getContext('2d');
    var width=myCanvas.width;
    var height=myCanvas.height;
    var x = 100;
    var y = 200;
    var dx = 4;
    var dy = 4;
    var radius = 20;
    var image;
    image = new Image();
    image.src = 'images/ball.png';
    var ball ={
        'x':x,
        'y':y,
        'img':image
    };
    var balls=[];
    balls.push(ball);

    /*var myCanvas = document.querySelector('#myCanvas');
    myCanvas.addEventListener('click', function (ev) {
        var newBallX = ev.clientX;
        var newBallY = ev.clientY;
        var img = new Image();
        img.src = 'images/ball.png';
        var newBall = {
            'x': newBallX,
            'y': newBallY,
            'img': img
        };
        balls.push(newBall);
        draw(newBall);
        console.log(balls.length);
    });*/

   // window.setInterval('gameFlow()',20);
    window.requestAnimationFrame(gameFlow);
    function gameFlow() {
        draw(ball);

        function draw(ball) {
            context.clearRect(0, 0,width,height);
            context.beginPath();
            context.drawImage(ball.img, ball.x - radius, ball.y - radius, radius * 2, radius * 2);
           // context.closePath();
            /*context.fillStyle="#0000ff";
             context.arc(x,y,radius,0,Math.PI*2,true);
             context.fill();*/
            // Boundary Logic
            if (ball.x < radius || ball.x > width - radius) dx = -dx;
            if (ball.y < radius || ball.y > height - radius) dy = -dy;
            ball.x += dx;
            ball.y += dy;
            window.requestAnimationFrame(gameFlow);
        }
    }
};


