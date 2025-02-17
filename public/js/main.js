let mapElem = document.getElementById('map');
mapElem.classList.add('map-size');

let crossHairElem = document.getElementById('crossHair')
let crossHairWidth = crossHairElem.offsetWidth;
let crossHairOffset = crossHairWidth / 6


var mapHeight = mapElem.offsetHeight;
var mapWidth = mapElem.offsetWidth;
var mapHalf = mapWidth / 2;
var mapXOffset = mapHalf - (crossHairWidth - crossHairOffset)
var mapYOffset = (crossHairWidth - crossHairOffset)

var bodyWidth = document.body.offsetWidth;




function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;
    let _position = `X: ${x}<br>Y: ${y}`;

    const infoElement = document.getElementById('crossHair');
    infoElement.innerHTML = _position;
    infoElement.style.top = y + "px";
    infoElement.style.left = (x + 20) + "px";
    return {'x' : x , 'y' : y}
}

let loc_count = 0
let pos = []


function getLocation(a){ 
    let xOff = $(window).width() - 800;

    let html = `<div class="spot" style=" left: ${a.x - (bodyWidth / a.x) - ( xOff / 2 > 0 ? xOff / 2 : 0 ) }px; 
                                          top:  ${a.y}px;">${loc_count}</div>`

    document.getElementById('map').innerHTML += html;
    
    pos.push({'id' : loc_count++ , 'x' : `${a.x}`,  'y' : `${a.y}`})
    console.log(pos[pos.length-1])
 
}


