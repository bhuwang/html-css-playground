function doFirst(){
	var x = document.getElementById("canvas");
	canvas = x.getContext("2d");
	canvas.strokeStyle="blue";
	canvas.beginPath();
	canvas.moveTo(10,50);
	canvas.lineTo(70, 250);
	canvas.lineTo(300,200);
	canvas.closePath();
	canvas.stroke();

	canvas.shadowOffsetX=4;
	canvas.shadowOffsetY=4;
	canvas.shadowBlur=5;
	canvas.shadowColor='rgba(255,0,0,.5)'

	canvas.font="bold 48px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("Bhuwan",350,100);

	canvas.translate(100,150);
	canvas.fillText("after translate", 300, 30);

	canvas.strokeText("Bhuwan",550,100);

}

window.addEventListener("load", doFirst, false);