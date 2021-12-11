var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var input_theta = document.getElementById("input_theta");
var slider_theta = document.getElementById("slide_theta");
var input_n = document.getElementById("input_n");
var slider_n = document.getElementById("slide_n");
var button_animate = document.getElementById("button_animate");
var span_fraction = document.getElementById("span_fraction");
var animate = false;
var initial_theta = 0.3819660112501051; // 2-phi
var theta;
var n;

function update_fraction() {
    var fraction = [];
    var x = theta;
    for (var i=0;i<10;++i) {
        x = 1/x;
        var n = Math.floor(x);
        fraction.push(n);
        x -= n;
    }
    span_fraction.innerText="1 / (" + fraction.join(" + 1 / (") + "...))))))))))";
}

function reset() {
    theta = initial_theta;
    n = 1000;
    input_theta.value = theta;
    input_n.value = n;
    input_change();
}

function input_change() {
    theta = parseFloat(input_theta.value);
    n = parseInt(input_n.value);
    slider_theta.value = input_theta.value;
    slider_n.value = Math.log(input_n.value)/Math.log(1000);
    update_fraction();
    draw();
}

function slider_change() {
    theta = parseFloat(slider_theta.value);
    n = Math.round(Math.pow(1000, parseFloat(slider_n.value)));
    input_n.value = n;
    input_theta.value = theta;
    update_fraction();
    draw();
}


function toggle_animation() {
    animate = !animate;
    button_animate.value = animate ? "stop" : "animate";
    update();
}

function draw() {   
    var R = canvas.height/2-5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var center_x = canvas.width/2;
    var center_y = canvas.height/2;
    for(var i=0; i<n; i++) {
        var angle = i * theta * 2 * Math.PI;
        var r = R*(n-i)/(n+1);
        var x = center_x + r * Math.cos(angle);
        var y = center_y + r * Math.sin(angle);
        ctx.strokeStyle = "black";              
        ctx.beginPath();
        ctx.moveTo(center_x, center_y)
        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(x, y, 1+(n-i)*5/n, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function update() {
    update_fraction();
    draw();
    if (animate) {
        theta += 0.005 / n;
        if (theta>0.5) theta -= 0.5;
        input_theta.value = theta;
        slider_theta.value = theta;
        window.requestAnimationFrame(update);
    }
}

reset();