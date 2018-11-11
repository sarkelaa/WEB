
var $background = document.querySelector('div.background');
var $mario = document.querySelector('img');
var $music = document.querySelector('audio');
var interval;
var move = false;
document.addEventListener('keydown', run);
document.addEventListener('keyup', stop);
function run(event) {

    if (!move) {
        if (event.keyCode == 39) {
            $mario.setAttribute('src', './images/mario_running.gif');
            var shift = 0;
            interval = setInterval(function () {
                $background.style.backgroundPosition = 'right ' + shift + 'px bottom 0';
                shift += 10;
            }, 100);
            move = true;
        };
    };
}

function stop(event) {
    if (event.keyCode == 39) {
        $mario.setAttribute('src', './images/mario.png');
        clearInterval(interval);
        move = false;
    };
}