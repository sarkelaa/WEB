var images = ["./Images/download (1).jpg", "./Images/download (2).jpg", "./Images/download.jpg", "./Images/images.jpg"];


var $gallery = $('<div>');
var $title = $('<h1>').text('Our Galery');
var $greenBorder = $('<img>').css('border', '5px solid green;')

var imgIteration = (function () {
    var $image = {};
    for (var i = 0; i < images.length; i++) {
        var widthValue = Math.floor(Math.random() * 400) + 'px';
        $image = $('<img>').attr('src', images[i]).css('width', widthValue);
        $gallery.append($image);

    }

})();



$('body').append($gallery);
$('body').prepend($title);








// (function () {
//     console.log($images);
// })()