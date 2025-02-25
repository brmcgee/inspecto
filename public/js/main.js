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

document.getElementById('crossHair').style.display = 'none'

function getLocation(a){
    
    if (isNewSpot){

        let xOff = $(window).width() - 800;

        let html = `
                        <div class="spot plus" 
                             id="spot${loc_count}"
                             onclick="viewSpot('${loc_count}')"
                             style=" left: ${a.x}px; 
                                     top:  ${a.y}px;">
                        </div>
                        <p class="spot" style=" left: ${a.x + 12}px; 
                            top:  ${a.y + 8}px; font-size:12px; font-family:courier;">${loc_count}</p>
                    `

        document.getElementById('map').innerHTML += html;
        
        pos.push({'id' : loc_count++ , 'x' : `${a.x}`,  'y' : `${a.y}`})
        console.log(pos[pos.length-1])
        

        isNewSpot = false;
        document.getElementById('toolbar').innerHTML = ''
        document.querySelector('#map').style.cursor = 'default'
        document.getElementById('crossHair').style.display = 'none'

    } 
}
function addSpot(){
    // document.getElementById('toolbar').innerHTML = ''
    if (isNewSpot == false) {

        document.querySelector('#map').style.cursor = 'crosshair'
        document.getElementById('toolbar').innerHTML = 
        `<div class="text-success fw-bold text-uppercase bg-success-subtle border border-success-subtle mt-3 p-1 px-2 fs-6">Add</div>`
        isNewSpot = true;
        document.getElementById('crossHair').style.display = 'block'

        return isNewSpot
    } else {

        document.getElementById('toolbar').innerHTML = ''
        document.querySelector('#map').style.cursor = 'default'
        document.getElementById('crossHair').style.display = 'none'
        isNewSpot = false;

        return isNewSpot  

    }
   
}

function viewSpot(str){
    document.getElementById('toolbar').innerHTML = 
    `<div class="text-dark fw-bold text-uppercase bg-dark-subtle border border-dark-subtle mt-3 p-1 p-1 fs-6">Viewing Inspecto <spac class="badge bg-dark text-white p-2 py-1 rounded-2">${str}</span></div>`
}


