// var dataStuff;
// var dataTwo;

// fetch("https://stormy-cliffs-87695.herokuapp.com/https://developer.nps.gov/api/v1/activities/parks?stateCode=GA&id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
//       Accept: "application/json",
//   }
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     dataStuff = data[0].parks;
//     console.log(dataStuff);
//   });


// Search Bar Input and Results
// Global variables for search bar and results
var resultTextEl = document.getElementById('result-text');
var searchResultsEl = document.getElementById('search-results');
var searchInputEl = document.getElementById('search-input');
var searchButtonEl = document.getElementById('submit-button');
var resetButtonEl = document.getElementById('reset-button')



// function to display information on National State Parks from user search to card under map
function showResults(pikachu) {
  console.log(pikachu);
  searchResultsEl.innerHTML= '';
  var input = searchInputEl.value;
  resultTextEl.textContent = input;
// Sets a loop to pull all of the parks that match the state code
  for( i=0; i<pikachu.length; i++){
    var resultCardEl = document.createElement('div');
    var resultMainEl = document.createElement('div');
    var resultTitleEl = document.createElement('h4');
    var resultContentEl = document.createElement('a');

  resultTitleEl.innerText = pikachu[i].fullName;
  resultContentEl.textContent = pikachu[i].url;

  parkName = pikachu[i].fullName;

  resultTitleEl.dataset.lat=pikachu[i].latitude
  resultTitleEl.dataset.lon=pikachu[i].longitude
  resultTitleEl.addEventListener('click', searchMap);
  resultTitleEl.id = 'parkName';
  resultContentEl.setAttribute("href", pikachu[i].url, '_blank');

  searchResultsEl.appendChild(resultCardEl);
  resultCardEl.appendChild(resultMainEl);
  resultMainEl.appendChild(resultTitleEl);
  resultMainEl.appendChild(resultContentEl);
  }
}
// Searches map for state park
function searchMap(event){
  console.log(event.target);
  // create function for searching location on map
  var lat = event.target.dataset.lat
  var lon = event.target.dataset.lon
  console.log(lat);
  console.log(lon);
}

// Search button listener to search API for results that match User Input
searchButtonEl.addEventListener('click',function(){
    var input = searchInputEl.value;
    console.log(input);

    fetch("https://developer.nps.gov/api/v1/parks?limit=500&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      Accept: "application/json",
    }
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // console.log(dataStuff);
    // call function getData(data)
    var pikachu = data.data.filter(function(park){
      return park.states.includes(input.toUpperCase())
    })
    console.log(pikachu);

  showResults(pikachu)
  });

})

// show the map, the lat/long are just fillers here.
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

// resetButtonEl.location.reload();


  




