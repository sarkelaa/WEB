$(document).ready(function () {
    console.log('hi');
});

var firstList = $('li:first').css('border-bottom', '4px solid black');

var allLists = $('li').css('text-transform', 'uppercase');

var activeEle = $('li.active').css('color', 'red');


var ln = $('ul li').length;
ln = (ln - 1) / 2;
$("ul li:eq(" + ln + ")").css('background-color', 'blue');