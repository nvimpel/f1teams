var LastSize;
var LastMarginTop;
var LastMarginLeft;
var LastOffset;
function sizeUp(Name)
{
    LastSize = document.getElementById(Name).style.width
    LastMarginTop = document.getElementById(Name).style.marginTop
    LastMarginLeft = document.getElementById(Name).style.marginLeft;
    
    document.getElementById(Name).style.width = document.getElementById(Name).style.width + 1200;
    document.getElementById(Name).style.marginTop = 0;
    document.getElementById(Name).style.marginLeft = 0;
}
function sizeDown(Name)
{
    document.getElementById(Name).style.width = LastSize;
    document.getElementById(Name).style.marginTop = LastMarginTop;
    document.getElementById(Name).style.marginTop = LastMarginLeft;
}
var moveInterval;
function moveAway(Name)
{
    
    moveInterval = setInterval(function() {
    var div = document.getElementById(Name);
    div.style.left = div.offsetLeft - 10 + "px"; },
    10);
    
}
function snapBack(Name)
{
    clearInterval(moveInterval);
    document.getElementById(Name).style.left = 0+'px';
}
function savePosition(Name)
{
    LastOffset = document.getElementById(Name).style.offsetLeft = 0;
    console.log(LastOffset);
}
