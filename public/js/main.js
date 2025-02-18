let mapElem = document.getElementById('map');
mapElem.classList.add('map-size');

let crossHairElem = document.getElementById('crossHair')
let crossHairWidth = crossHairElem.offsetWidth;
let crossHairOffset = crossHairWidth / 6


var mapHeight = mapElem.offsetHeight;
var mapWidth = mapElem.offsetWidth;
var bodyWidth = document.body.offsetWidth;


let isNewSpot = false;

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
    
    if (isNewSpot){

        let xOff = $(window).width() - 800;

        let html = `
                        <div class="spot" 
                             id="spot${loc_count}"
                             onclick="viewSpot('${loc_count}')"
                             style=" left: ${a.x - (bodyWidth / a.x) - ( xOff / 2 > 0 ? xOff / 2 : 0 ) }px; 
                                     top:  ${a.y}px;">${loc_count}
                        </div>
                    `

        document.getElementById('map').innerHTML += html;
        
        pos.push({'id' : loc_count++ , 'x' : `${a.x}`,  'y' : `${a.y}`})
        console.log(pos[pos.length-1])
        
        isNewSpot = false;
        document.getElementById('toolbar').innerHTML = ''
        document.querySelector('#map').style.cursor = 'default'
    } 
}
function addSpot(){
 
    if (isNewSpot == false) {
        document.querySelector('#map').style.cursor = 'crosshair'
        document.getElementById('toolbar').innerHTML = 
                    '<div class="text-success fw-bold text-uppercase bg-success-subtle border border-success-subtle mt-3 p-1 px-2 fs-4 rounded-pill">Add</div>'
        return isNewSpot = true;
    } else {
        document.getElementById('toolbar').innerHTML = ''
        return isNewSpot = false;

    }
   
}

function viewSpot(str){
    document.getElementById('toolbar').innerHTML = 
    `<div class="text-primary fw-bold text-uppercase bg-primary-subtle border border-primary-subtle mt-3 p-1 px-2 fs-6 rounded-pill">Viewing Inspecto ${str}</div>`

}


