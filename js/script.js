// get elements from dom

const video = document.getElementById('video');
const play = document.getElementById('play');
const stopVideoBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// play and pause the video 

function toggleVideoStatus(){
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }  
}


function updatePlayIcon(){
    if(video.paused) {
        play.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function updateProgress(){

}

function setVideoProgress(){

}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stopVideoBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)

