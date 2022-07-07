var dataStuff;
var dataTwo;

fetch("https://stormy-cliffs-87695.herokuapp.com/https://developer.nps.gov/api/v1/activities/parks?id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      Accept: "application/json",
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dataStuff = new Array(data);
    console.log(data);

    console.log(dataStuff);
    // newTabGMap();
    initMap();
  });


function initMap() {
    var parkName = dataStuff[0].data[0].parks[1].fullName;
    console.log(parkName);
    console.log(typeof parkName);
    // debugger;
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: parkName,
      mapID: '11516e18129b3c04'
    });
    var marker = new google.maps.Marker({
      position: parkName,
      map: map,
    });
    
  }
  


  function newTabGMap() {
    var parkName = dataStuff[0].data[0].parks[1].fullName;
    var nameToUrl = parkName.replace(/\s+/g, '+');
    console.log(parkName + " " + nameToUrl);

    window.open('https://www.google.com.sa/maps/search/'+ nameToUrl + '12.21z?hl=en', '_blank');

  }

