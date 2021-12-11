var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var input_theta = document.getElementById("input_theta");
var slider_theta = document.getElementById("slide_theta");
var input_n = document.getElementById("input_n");
var slider_n = document.getElementById("slide_n");

function reset() {
    var angle = 0.3819660112501051; // 2-phi
    slider_theta.value = angle;
    input_theta.value = angle;
    draw();
}

function slider_change() {
    input_theta.value = slider_theta.value;
    input_n.value = slider_n.value;
    draw();
}

function draw() {   
    var R = canvas.height/2-5;
    var theta = parseFloat(input_theta.value);
    var n = Math.round(Math.pow(1000, parseInt(input_n.value)/1000));
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

reset();