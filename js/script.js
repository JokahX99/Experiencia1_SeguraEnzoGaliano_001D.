//SCRIPT REPRODUCTOR DE YOUTUBE

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'J4HYF_DFKPU', // Aquí se coloca la ID del video //
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        player.playVideo();
    });
}

