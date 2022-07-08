// Search Bar Input and Results
// Global variables for search bar and results
var resultTextEl = document.getElementById('result-text');
var searchResultsEl = document.getElementById('search-results');
var searchInputEl = document.getElementById('search-input');
var searchButtonEl = document.getElementById('submit-button');
var resetButtonEl = document.getElementById('reset-button');
var parkDescription = document.createElement('p');
var parkUrl= document.createElement('a');

// function to display information on National State Parks from user search to card under map
function showResults(pikachu) {
  searchResultsEl.innerHTML= '';
  var input = searchInputEl.value;
  resultTextEl.textContent = input;
// Sets a loop to pull all of the parks that match the state code
  for( i=0; i<pikachu.length; i++){
    var resultCardEl = document.createElement('div');
    var resultMainEl = document.createElement('div');
    var resultTitleEl = document.createElement('h3');
    var resultContentEl = document.createElement('a');

  resultTitleEl.classList.add('parkNameList')
  resultTitleEl.innerText = pikachu[i].fullName;
  resultContentEl.textContent = pikachu[i].url;
  resultTitleEl.dataset.lat=pikachu[i].latitude;
  resultTitleEl.dataset.lon=pikachu[i].longitude;
  parkDescription = toString(pikachu[i].description);
  resultContentEl.setAttribute("href", pikachu[i].url, '_blank');
  resultTitleEl.addEventListener('click', searchMap);
  resultTitleEl.id = 'parkName';
  searchResultsEl.appendChild(resultCardEl);
  resultCardEl.appendChild(resultMainEl);
  resultMainEl.appendChild(resultTitleEl);
  resultMainEl.appendChild(resultContentEl);
  }
}
// Searches map for state park
function searchMap(event){
  // create function for searching location on map
  var myCoordinates = { lat: parseFloat(event.target.dataset.lat), lng: parseFloat(event.target.dataset.lon)};
  var parkName = event.target.textContent;
  var nameToUrl = parkName.replace(/\s+/g, '+');
//focuses the map on the lat/long of selected park
  map = new google.maps.Map(document.getElementById("map"), {
    center: myCoordinates,
    zoom: 8,
  }); 
//scrolls back up to map
var toMap = document.getElementById('map');

  window.scrollTo({
    left:0, 
    top: toMap.offsetTop,
    behavior: 'smooth'
  });
//drops pin in the center of map
  var pin = new google.maps.Marker({
    position: myCoordinates,
    map,
    title: parkName,
});
//displays text and adds google maps link to popup card
    var popupCard = "<h3><a href='https://www.google.com.sa/maps/search/" + nameToUrl + "12.21z?hl=en'>"+parkName+"</a></h3>"+ '<p>🚧 This card feature is currently under construction! 🚧</p>'
    
    var infowindow = new google.maps.InfoWindow({
      content: popupCard,
    });
//pops up card above pin
    infowindow.open({
      anchor: pin,
      map,
      shouldFocus: false,
});
}
// Search button listener to search API for results that match User Input
searchButtonEl.addEventListener('click',function(){
    var input = searchInputEl.value;
    console.log(input);

    var userSearch ={
      state: searchInputEl.value.trim(),
    }
    localStorage.setItem("User Search", JSON.stringify(userSearch))

  //fetching park data from NPS API
    fetch("https://developer.nps.gov/api/v1/parks?limit=500&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      Accept: "application/json",
    }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var pikachu = data.data.filter(function(park){
      return park.states.includes(input.toUpperCase())
    })
    console.log(pikachu);

  showResults(pikachu)
  });

})

// initializing the Google map as the page loads
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;




  




