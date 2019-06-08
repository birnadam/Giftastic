$(document).ready(function(){

    //store API key requested as a string
    const apiKey = "2N7qe4KbTIcJ1nWq1LLxwCdGdRE9WwDt";

    //array of NBA players
    const nbaPlayers = ["Lebron James", "Kobe Bryant", "Allen Iverson", "Kawhi Leonard", "Shaq", "Kyrie Irving", "Steph Curry", "Kyle Kuzma", "Brandon Ingram", "Lonzo Ball", "Jeremy Lin",
    "Damian Lillard", "Blake Griffin", "Ben Simmons", "KAT", "Ricky Rubio", "Donovan Mitchell", "Anthony Davis", "Kemba Walker", "CJ McCollum" ];

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
});