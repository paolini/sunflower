var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var input_theta = document.getElementById("input_theta");

function reset() {
    input_theta.value=0.3819660112501051; // 2 - phi
    input_theta.onchange();
}

function draw() {   
    var R = canvas.height/2-5;
    var theta = parseFloat(input_theta.value);
    var n = Math.round(Math.pow(1000, parseInt(document.getElementById("input_n").value)/1000));
    document.getElementById("span_theta").innerText = theta.toFixed(4);
    document.getElementById("span_n").innerText = n;
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