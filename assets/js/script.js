var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.benbrougher.tech/hiker/v1/trails/", requestOptions)
.then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
  .catch(error => console.log('error', error));
      
// var requestUrl = 'https://www.benbrougher.tech/hiker/v1/trails/';

// var apiEnd = 'https://ridb.recreation.gov/api/v1/';

// var urlHeader = {
//     headers: {
//         "Content-Type": 'application/json'
    //   Accept: "application/json",
    //   Apikey: "93eb3bd5-8da6-4ff1-9ea2-37a779bd4aef"
    //   Cache: "reload"
//     }
// };
// fetch("https://www.benbrougher.tech/hiker/v1/trails/", {
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
// fetch(requestUrl, urlHeader)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });


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