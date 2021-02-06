var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d"); 
window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

