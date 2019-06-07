$(document).ready(function(){


function setup(){
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=counter+strike&api_key=2N7qe4KbTIcJ1nWq1LLxwCdGdRE9WwDt&limit=5";
    fetch(queryURL)
    .then(response => {
        return response.json();
    })
    .then(json => {
      console.log(json)
        console.log(json.data[0].images.original.url);
    })

    .catch(err => console.log(err));
}
setup();


});