function doFirst(){
	var x = document.getElementById("canvas");
	canvas = x.getContext("2d");
	canvas.fillStyle="red";
	canvas.strokeStyle="green";
	canvas.strokeRect(50,50,200,200);
	canvas.fillRect(350,50,200,200);

	var x2 = document.getElementById("canvas2");
	canvas2 = x2.getContext("2d");
	canvas2.fillStyle="brown";
	canvas2.strokeStyle="blue";
	canvas2.fillRect(50,50,200,200);

	canvas2.fillRect(350,50,200,200);
	canvas2.clearRect(400,100,100,100);

}

window.addEventListener("load",doFirst,false);
