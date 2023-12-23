var musicPlayer = document.getElementById('musicPlayer');

function playPause() {
    if (musicPlayer.paused) {
        musicPlayer.play();
    } else {
        musicPlayer.pause();
    }
}

function stop() {
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
}
