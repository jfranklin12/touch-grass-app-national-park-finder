var resultTextEl = document.getElementById('result-text');
var searchResultsEl = document.getElementById('search-results');
var searchInputEl = document.getElementById('search-input');
var searchButtonEl = document.getElementById('submit-button');
// var resultCardEl = documnet.createElement('div');
// var resultMainEl = document.createElement('div');
// var resultTitleEl = document.creaeElement('h4');
// var resultContentEl = document.createElement('p');

// function to loop information from API to search in JS

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
    var stateParks = data.data[0].parks.filter(function(park){
      return park.states.includes(input.toUpperCase())
    })
    console.log(stateParks);
  });

  function showResults(listResults) {
    console.log(listResults);

    resultTextEl.textContent = input;

    // resultTitleEl.textContent = stateParks;
    // resultContentEl.textContent = stateParks;

    // searchResultsEl.appendChild(resultCardEl);







  }

showResults()

})


