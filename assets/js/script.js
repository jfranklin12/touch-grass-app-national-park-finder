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
  var input = searchInputEl.value;
  resultTextEl.textContent = input;

  for( i=0; i<pikachu.length; i++){
    var resultCardEl = document.createElement('div');
    var resultMainEl = document.createElement('div');
    var resultTitleEl = document.createElement('h4');
    var resultContentEl = document.createElement('a');

  resultTitleEl.innerText = pikachu[i].fullName;
  resultContentEl.textContent = pikachu[i].url;

  searchResultsEl.appendChild(resultCardEl);
  resultCardEl.appendChild(resultMainEl);
  resultMainEl.appendChild(resultTitleEl);
  resultMainEl.appendChild(resultContentEl);
  }
}

// Search button listener to search API for results that match User Input
searchButtonEl.addEventListener('click',function(){
    var input = searchInputEl.value;
    console.log(input);

    fetch("https://developer.nps.gov/api/v1/activities/parks?id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA,GA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
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
    var pikachu = data.data[0].parks.filter(function(park){
      return park.states.includes(input.toUpperCase())
    })
    console.log(pikachu);

  showResults(pikachu)
  });

})

// resetButtonEl.location.reload();


  




