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

    //click event
    $(document).on('click', 'playerBtn', displayGifs);

    //function to display GIFs on click
    function displayGifs() {

        //create a queryUrl variable to use API key

        //AJAX call for player being clicked

        //create a div for to hold the GIFs
    }

    //function to add new player to array

        //variable to hold user's input

        //add that variable to our nbaPlayers array

        //re-render buttons with the added array

    //click event to change attribute on GIFs
});