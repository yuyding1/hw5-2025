var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=this.document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Video played");
	const slider = document.querySelector("#slider");
    video.volume = slider.value / 100;
    document.querySelector("#volume").innerHTML = slider.value + "%";
	})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Video paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=0.9;
	console.log("New speed:", video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=0.9;
	console.log("New speed:", video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
	console.log("Current time:", video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
        video.muted = true;
        this.innerHTML = "Unmute";
    } else {
        video.muted = false;
        this.innerHTML = "Mute";
    }
})

document.querySelector("#slider").addEventListener("input", function () {
    document.querySelector("#volume").innerHTML = this.value + "%";
})

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});