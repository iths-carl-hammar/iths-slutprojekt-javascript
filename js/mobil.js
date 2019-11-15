


// Leaflet JavaScript library for maps. 
let mymap = L.map('mapid').setView([0,0], 1);
let myIcon = L.icon({
    iconUrl:'spacefile.png',
    iconSize: [50,32],
    iconAnchor: [-3],
    popupAnchor: [-3,-76],
}); // Object 

let marker = L.marker([0,0], {icon:myIcon} ).addTo(mymap);

function onMap(){
    
    marker.bindPopup("<b> Hello cool Astronat</b>").openPopup();
    
    
    
};

marker.on("mouseover",onMap);








let attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

let firstTime = true;
let api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS(){
    let response = await fetch(api_url) // hämnta data
    let data = await response.json();
    let { latitude, longitude,daynum, } = data 
    
    // L.marker add  to mymap
    marker.setLatLng([latitude,longitude,daynum,  ]);
    
    
    if(firstTime){
        mymap.setView([latitude,longitude,2]);
        firstTime = false;
    }
    
    let lon =  document.querySelector(".lon").textContent = longitude;
    let lat =   document.querySelector(".lat").textContent = latitude;
    let day =   document.querySelector(".day").textContent = daynum;
    
}
getISS();
setInterval(getISS, 1000);

// animate css library in java script 

function features(){
    let element = document.querySelector('.h1');
    element.classList.add('animated', 'rollIn');// features
    
};
features();

function rollOut(){ // features
    let  hello = document.querySelector('.hello');
    hello.classList.add('animated', 'rollOut delay-5s' );

};
rollOut();




// Object in a Array
let astro =  [
    // properties in key: value pairs.
    {
        name:'Magnus',
        skills:'space walk',
        country: 'usa',
        food: 'dry food',
        salaryPerhour: 100,
        dad: 'darth maul',
    },
    {
        name:'kalle',
        skills:'space Walk',
        country: 'usa',
        food: 'beer',
        salaryPerhour: 100,
        dad: 'darth vader',
    }
]



function tryck(){
    
    let button = document.querySelector(".btn");
    button.addEventListener("click", ()=>{
        let node =   document.createElement("h3");
        let randomNumber = Math.floor((Math.random() * astro.length));
        node.innerText = 'I am astronat ' + astro[randomNumber].name + ' and my dad is ' + astro[randomNumber].dad + ' my skills is '+ astro[randomNumber].skills + 'i like food most ' + astro[randomNumber].food + ' i am born in ' + astro[randomNumber].country + ' make some money ' + astro[randomNumber].salaryPerhour;
        let place = document.querySelector( ".nasa-info1");
        place.append(node)
        
        
        
        
        
        //   let newtext = createContext("")
    })
};

tryck()

function clearTryck(){
    let place = document.querySelector( ".nasa-info1");
    place.innerText =  "  reload home page  ";
    
    
};


document.querySelector(".btn").addEventListener("dblclick",clearTryck);

// hämntar in nasa Api 
//let newApi = 'https://api.nasa.gov/planetary/apod?api_key=5UCdTse7ygWDaXC2M7c5vLa1PYfJtWmBDdqA1XEE';
async function nasa(){
    let newApi = 'https://api.nasa.gov/planetary/apod?api_key=5UCdTse7ygWDaXC2M7c5vLa1PYfJtWmBDdqA1XEE';
    let response = await fetch(newApi) // hämntar in nasa data.
    let body = await response.json();
    console.log(body)
    let node =   document.createElement("img");
    let place = document.querySelector('.nasa-info2');
    node.src = body.url
    place.append(node)
};



nasa();

    



// OOP

// ett sätt att välja astronater finns ej nu .   
//class astronaut {
//  constructor(name ,country ,skills){
//    this.name = name;
//  this.country = country;
//this.skills = skills;    

//}




//}

//let astronaut1 = new astronaut('clark', 'usa','drive spaceTank');
//let astronaut2 = new astronaut()
//let astronaut3 = new astronaut()










/*
function toggleMenu(){
    let element = document.querySelector("nav"); // hämntar in html element = tagen nav . 
    element.classList.toggle("menu-hidden"); // hämntar in class name på nav tag och läger på en method = toggle.med variabel element.och CLASS list som är Domtoken.
    
    element.document.querySelector(".fade-layer");
    element.classList.toggle("hidden");
    
    
}
let element = document.querySelector("#menu-btn"); // hämntar in hamburgare meny .
element.addEventListener("click", toggleMenu ); // sätter på click event på functionen toggleMenu. 
element = document.querySelector(".fade-layer");  // använd = annars underfind. 
element.addEventListener("click", toggleMenu);//  method. 
*/







