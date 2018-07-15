let properties = {
    "name": "Renaissance Tower",
    "address":"1201 Elm Street, Dallas, TX 75251",
    "floors": 56,
    "totalBuildingArea": 1700000,
    "tenancy":"Lorem ipsum",
    "tenant": 59,
    "website": "www.renaissancetower.net",
    "yearBuilt": 1974,
    "description": " Completed in 1974, the office tower was substantially renovated between 1986 and 1991 and emerged with a heightened image and even more illustrious profile within Downtown Dallas. Renowned for its distinctive double \"X\" lighting and majestic rooftop spires, Renaissance Tower is a Dallas Landmark."

}

let avarr = {
    "unitName": ["Renaissance Tower, 1/F-, 1 - 999", "Renaissance Tower, 2/F-, 2 - 999", "Renaissance Tower, 3/F-, 3 - 999", "Renaissance Tower, 4/F-, 4 - 999"],
    "recordType": ["Vacant", "Future Available", "Unavailable"],
    "availableArea": 25667

}

let optionsProp = {
    "propertyType": ["Commercial", "Office"],
    "propertyClass": ["A+", "A", "B", "C"]
}

//properties
let arr = Object.keys(properties);

for (let i = 0; i < arr.length; i++) {
    //number format
if(typeof properties[arr[i]] === "number" && properties[arr[i]] > 10000){
 document.getElementById(arr[i]).innerHTML = format(properties[arr[i]]);
 continue;
}
    document.getElementById(arr[i]).innerHTML = properties[arr[i]];
}

//options
//Type
let propers = document.getElementsByClassName("propertyType");
for (let i=0; i < propers.length; i++){
    propers[i].innerHTML = optionsProp.propertyType[i];
}

//Class
let classes =document.getElementsByClassName("propertyClass");
for (let i=0; i < classes.length; i++){
    classes[i].innerHTML = optionsProp.propertyClass[i];
}



//availabilities
//Name/Number
let  unname = document.getElementsByClassName("unitName");
for (let i=0; i < unname.length; i++){
    unname[i].innerHTML = avarr.unitName[i];
}
// RecordType
//SCUM
let scum = avarr.recordType.slice();
for (let i = 0; i < avarr.recordType.length; i++){
    scum.push(avarr.recordType[i]);
}
for (let i = 0; i < scum.length/2; i++){
    scum.push(scum[i]);
}


let rectype = document.getElementsByClassName("recordType");

for (let i = 0; i < rectype.length; i++){

    let collection = rectype[i];
    collection.innerHTML = scum[i];
}
//area
let number = avarr.availableArea;
let area = document.getElementsByClassName("availableArea");
for (let i = 0; i < area.length; i++){

    area[i].innerHTML = format(number,2) + " sf";

}
function format(num, fix) {
    var p = num.toFixed(fix).split(".");
    return p[0].split("").reduceRight(function(acc, num, i, orig) {
        if ("-" === num && 0 === i) {
            return num + acc;
        }
        var pos = orig.length - i - 1
        return  num + (pos && !(pos % 3) ? "," : "") + acc;
    }, "") + (p[1] ? "." + p[1] : "");
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 32.78119222, lng: -96.80183755};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var InfoWindow = new google.maps.InfoWindow({
        content: '<h6>Renaissance Tower</h6>' +
        '<span>1201 Elm St '+
        'Dallas, TX 75270</span>'
    })


    marker.addListener('click', function () {
        InfoWindow.open(map, marker);
    })
}
