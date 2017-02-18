function doFirst(){
	var x = document.getElementById("canvas");
	canvas = x.getContext("2d");
	
	window.addEventListener("mousemove",drawCircle, false);
}

window.addEventListener("load", doFirst, false);

function drawCircle(e){
	canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;
	var yPos = e.clientY;
	canvas.fillRect(xPos-50, yPos-50, 100,100)
}