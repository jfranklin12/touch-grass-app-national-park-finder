fetch("https://stormy-cliffs-87695.herokuapp.com/https://developer.nps.gov/api/v1/activities/parks?stateCode=GA&id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA&api_key=M6zybiN7mrDQd0ocy5tTpMmFxZQmFdHcHCZZ1X0M", {  headers: {
      cache: "reload",
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });