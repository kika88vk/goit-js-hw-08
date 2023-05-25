
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
});

const timeVideo = localStorage.getItem("videoplayer-current-time");
const parsedTimeVideo = JSON.parse(timeVideo);



player.setCurrentTime().then(function(seconds) {
    // seconds = the actual time that the player seeked to
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
player.on("play", player.setCurrentTime);