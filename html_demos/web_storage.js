window.addEventListener("load", doFirst, false);

function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveData, false);
}

function saveData(){
	var k = document.getElementById("one").value;
	var v = document.getElementById("two").value;
	sessionStorage.setItem(k, v);
}