var LastSize;
var LastMarginTop;
var LastMarginLeft;
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
