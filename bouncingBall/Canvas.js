    var myCanvas = document.querySelector('#myCanvas');
    var context = myCanvas.getContext('2d');
    var width=myCanvas.width;
    var height=myCanvas.height;
    var x = 100;
    var y = 200;
    var dx = 3;
    var dy = 3;
    var radius = 40;
    var image;
    image = new Image();
    image.src = 'images/ball.png';
    var ball ={
        'x':x,
        'y':y,
        'dx':dx,
        'dy':dy,
        'r':radius,
        'img':image
    };
    var balls=[];
    balls.push(ball);

    myCanvas.addEventListener('click', function (ev) {
        var newBallX = ev.clientX;
        var newBallY = ev.clientY;
        var img = new Image();
        img.src = 'images/ball.png';
        var newBall = {
            'x': newBallX,
            'y': newBallY,
            'dx':dx,
            'dy':dy,
            'r':radius,
            'img': img
        };
        balls.push(newBall);
        console.log(balls.length);

    });

function run() {
    context.clearRect(0, 0, width, height);
    for(b of balls) {
        draw(b);
        move(b);
    }
        window.requestAnimationFrame(run);

}
    function draw(ball) {
        context.beginPath();
        context.drawImage(ball.img, ball.x - radius, ball.y - radius, radius*2, radius*2);
        context.closePath();
    }
    function move(ball) {
        if (ball.x <= radius || ball.x >= width - radius) ball.dx = -ball.dx;
        if (ball.y <= radius || ball.y >= height - radius) ball.dy = -ball.dy;
        for( var other of balls){
            if(isBallCollidingWith(ball,other)){
                ball.dx = -ball.dx;
                ball.dy = -ball.dy;
            }
        }
        ball.x += ball.dx;
        ball.y += ball.dy;
    }
    function isBallCollidingWith(ball,other){
        if(other === ball){
            return false;
        }
        var b1 = {
                x: ball.x,
                y: ball.y,
                r: ball.r
            },
            b2 = {
                x: other.x,
                y: other.y,
                r: other.r
            };
        var d = Math.sqrt((b1.x - b2.x) * (b1.x - b2.x) +
            (b1.y - b2.y) * (b1.y - b2.y));
        return d <= (b1.r + b2.r);
    }




