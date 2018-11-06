var imgSelect = document.querySelectorAll("img");
document.addEventListener("click", onWhichElement)
for (var i = 0; i < imgSelect.length; i++) {
    imgSelect[i].addEventListener("click", borderFun);

}

function borderFun(event) {

    var selectImg = event.target;
    selectImg.classList.add("imgBorder");

    if (selectImg.width != 300) {
        event.stopPropagation();
    }

}
function onWhichElement(event) {
    console.log(event.target);
}