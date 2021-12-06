var canvas = document.getElementById("mycanvas");

var ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";

function draw() {   
    var n = parseInt(document.getElementById("input_n").value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var theta = (Math.sqrt(5)-1)/2;
    for(var i=0; i<n; i++) {
        var angle = i * theta * 2 * Math.PI;
        var r = 0.2*i;
        ctx.beginPath();
        ctx.arc(320+ r * Math.cos(angle), 240 + r*Math.sin(angle), 2, 0, 2 * Math.PI);
        ctx.fill();
    }
}

draw();