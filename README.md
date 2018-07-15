# Renaissance-Tower
Native JavaScript, HTML/CSS, JSON(without API), Google Maps, Bootstrap

---

<img width="570" alt="2018-07-15 16 52 05" src="https://user-images.githubusercontent.com/35704856/42734704-2c8f64a8-8851-11e8-80c9-4564e9edbcb0.png">

---
## Page includes: 

**1)Google map integration with event-marker**

<img width="450" alt="2018-07-13 16 41 55" src="https://user-images.githubusercontent.com/35704856/42734710-6bad5906-8851-11e8-9c72-a018db192cde.png">


**2)JSON to HTML system (all properties and availabilities is json objects)**
```js
let properties = {
    "name": "Renaissance Tower",
    "address":"1201 Elm Street, Dallas, TX 75251",
    "floors": 56,
    "totalBuildingArea": 170000,
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
```

**3)Processing format numbers**

```js
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
//Example
if(typeof properties[arr[i]] === "number" && properties[arr[i]] > 10000){
 document.getElementById(arr[i]).innerHTML = format(properties[arr[i]]);
 continue;
}
```

**4)Options set**

<img width="518" alt="2018-07-13 16 49 37" src="https://user-images.githubusercontent.com/35704856/42734742-f3f107fe-8851-11e8-95bb-7907ba3d5217.png">

---

## All requirements are complited


