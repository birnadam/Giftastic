$(document).ready(function(){

    //store API key requested as a string
    const apiKey = "2N7qe4KbTIcJ1nWq1LLxwCdGdRE9WwDt";

    //array of NBA players
    const nbaPlayers = ["Lebron James", "Kobe Bryant", "Allen Iverson", "Kawhi Leonard", "Shaquille O'Neal", "Kyrie Irving", "Steph Curry", "Kyle Kuzma", "Brandon Ingram", "Lonzo Ball", "Jeremy Lin",
    "Damian Lillard", "Blake Griffin", "Ben Simmons", "Karl Anthony Towns", "Ricky Rubio", "Donovan Mitchell", "Anthony Davis", "Kemba Walker", "CJ McCollum" ];

    //function to show buttons
    function renderButtons() {
        for (var i = 0; i < nbaPlayers.length; i++) {
            let b = $("<button class='btn btn-info'>");
            b.addClass("playerBtn");
            b.attr("data-name", nbaPlayers[i]);
            b.text(nbaPlayers[i]);
            //to make visible on page
            $("#displayButtons").append(b);
        }
    }
    //run the function to display buttons
    renderButtons();

    //function to display GIFs on click
    function displayGifs() {
        let c = $(this).attr('data-name');

        //create a queryUrl variable to use API key
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + c + "&api_key=" + apiKey + "&limit=6";

        //AJAX call for player being clicked
        $.ajax({
            url:queryURL, 
            method: 'GET'
        }).then(function(response) {
            let results = response.data;
            $('#playersGifs').empty();

            for(var i=0; i < results.length; i++) {
        //create a div for to hold the players from form
            let playersDiv = $("<div class='nbaPlayers'>");
            let rating = results[i].rating;
            let p = $("<p>").text("Rating: " + rating);
            let playerImage = $("<img>");

                playerImage.attr("src", results[i].images.fixed_height_still.url);
                playerImage.attr("data-still", results[i].images.fixed_height_still.url);
                playerImage.attr("data-animate", results[i].images.fixed_height.url);
                playerImage.attr("data-state", "still")
                playerImage.attr("class", "pause")

                playersDiv.prepend(p);
                playersDiv.prepend(playerImage);

                $('#playersGifs').prepend(playersDiv);
            }
        });

    };

    //click event (click on a player to dislay corresponding gifs)
    $(document).on('click', '.playerBtn', displayGifs);

    //function to add new player to array
    $('#addPlayer').on('click', function(event) {
        event.preventDefault();

        //variable to hold user's input
        let player = $("#playerInput").val().trim();

        //add that variable to our nbaPlayers array
        nbaPlayers.push(player);

        //re-render buttons with the added array
        renderButtons();
    });

    //click event to change attribute on GIFs
    $('#playersGifs').on('click', '.pause', function() {
        let state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
});