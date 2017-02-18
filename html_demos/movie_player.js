function initMovie(){
	barSize = 600;

	myMovie = document.getElementById("myMovie");
	playButton = document.getElementById("playButton");
	progressBar = document.getElementById("progressBar");
	myBar = document.getElementById("bar");

	playButton.addEventListener("click", playOrPause, false);
	bar.addEventListener("click", startFromHere, false);
}

window.addEventListener("load",initMovie,false);
// window.onload = initMovie;

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML='Play';

	}else{
		myMovie.play();
		playButton.innerHTML='Pause';
		updateBar = setInterval(update, 500);
	}
}

function update(){
	if(!myMovie.ended){
		console.log("currentTime: "+myMovie.currentTime+" myMovie: "+myMovie.duration);
		var size = parseInt(myMovie.currentTime * barSize/myMovie.duration);
		progressBar.style.width = size+"px";
	}else{
		progressBar.style.width = "0px";
		playButton.innerHTML = "Play";
		window.clearInterval(updateBar);
	}
}

function startFromHere(e){
	if(!myMovie.paused && !myMovie.ended){
		var mouseX = e.pageX - bar.offsetLeft;
		var newtime = mouseX * myMovie.duration/barSize;
		myMovie.currentTime = newtime;
		progressBar.style.width = mouseX+'px';
	}
}