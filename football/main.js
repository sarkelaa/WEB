var bodyClick = document.querySelector("body");
var isActive;
var img = document.querySelector("img");
var button = document.querySelector("button");

function movePlayer(event) {
    var xOsa = event.clientX;
    var yOsa = event.clientY;

    var playerElement = img.width / 2;
    img.style.left = (xOsa - playerElement) + "px";
    img.style.top = (yOsa - playerElement) + "px";

}

button.addEventListener("click", stopMoving);
function stopMoving(event) {
    event.stopPropagation();

    if (!isActive) {
        bodyClick.addEventListener("click", movePlayer);
        button.innerText = "Stop Moving";
        isActive = true;
    } else {
        bodyClick.removeEventListener("click", movePlayer);
        button.innerText = "Start Moving";
        isActive = false;
    }
}