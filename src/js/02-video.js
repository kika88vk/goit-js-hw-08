
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from "lodash.throttle";

const timeVideo = JSON.parse(localStorage.getItem("videoplayer-current-time")) || {};
const seconds = timeVideo.seconds;
console.log(seconds);



player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));




player.setCurrentTime(seconds).then(function() {
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