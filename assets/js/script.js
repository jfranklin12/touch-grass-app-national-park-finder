var requestUrl = 'https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&state=GA&activity=HIKING,HIKINGTRAIL&latitude=33.7490&longitude=84.3880&radius=10&lastupdated=10-01-2018';
var apiEnd = 'https://ridb.recreation.gov/api/v1/';

fetch(requestUrl, {
  headers: {
    Accept: "application/json",
    Apikey: "93eb3bd5-8da6-4ff1-9ea2-37a779bd4aef",
    Cache: "reload"
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


// var map_document = document.querySelector('#map')

// var map;

// function initMap() {
//     map_options = {
//       zoom: 10,
//       mapTypeId: google.maps.MapTypeId.HYBRID,
//       center: {lat: 33.7490, lng: 84.3880}
//     }    
//     map_document = document.getElementById('map')
//     map = new google.maps.Map(map_document,map_options); 
// }

// google.maps.event.addDomListener(window, 'load', initMap);