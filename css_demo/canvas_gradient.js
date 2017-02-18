function doFirst(){
	var x = document.getElementById("canvas");
	canvas = x.getContext("2d");
	var g = canvas.createLinearGradient(150,50,300,300);
	g.addColorStop(.0,"blue");
	g.addColorStop(.5, "red");
	g.addColorStop(.75, "brown");
	g.addColorStop(1, "orange");
	canvas.fillStyle = g;
	canvas.fillRect(150,50,300,300);

}

window.addEventListener("load", doFirst, false);