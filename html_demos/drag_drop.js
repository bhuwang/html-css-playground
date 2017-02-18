window.addEventListener("load", doFirst, false);

function doFirst(){
	var image = document.getElementById("love");
	image.addEventListener("dragstart", dragImage,false);
	image.addEventListener("dragend", stopDragEvent,false);

	leftbox = document.getElementById("left");
	leftbox.addEventListener("dragenter", dragenter ,false);
	leftbox.addEventListener("dragleave", dragleave ,false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();} ,false);
	leftbox.addEventListener("drop", dropImage,false);
}

function dragImage(e){
	var imgCode = document.getElementById("right").innerHTML;
	e.dataTransfer.setData("Text", imgCode);
}

function dropImage(e){
	e.preventDefault();
	leftbox.innerHTML=e.dataTransfer.getData("Text");
}

function stopDragEvent(e){
	//document.getElementById("right").innerHTML="Image moved successfully";
	pic = e.target;
	pic.style.visibility = "hidden";

}

function dragenter(e){
	e.preventDefault();
	leftbox.style.background="orange";
	leftbox.style.border="3px solid green";
}

function dragleave(e){
	e.preventDefault();
	leftbox.style.border="3px solid black";
	leftbox.style.background="white";
}