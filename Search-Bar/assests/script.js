fetch("https://developer.nps.gov/api/v1/activities/parks?stateCode=GA&id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      Accept: "application/json",
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // console.log(dataStuff);
  });

  var resultTextEl = document.getElementById('#result-text');
var searchResultsEl = document.getElementById('#search-results');
var searchInputEl = document.getElementById('#search-input');
var searchButtonEl = document.getElementById('#submit-button');

searchButtonEl.addEventListener('click',function(){
    var input = searchInputEl;
    console.log(input)

})