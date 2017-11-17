$(document).ready(function(){

    //== GLOBAL VARIABLES ====================

    //An array of objects that container info on the  playabale characters
    var heroes = {
        drowRanger: {
            name: "Drow Ranger",
            health: 100,
            attackWhenRadiant: 10,
            attackWhenDire: 20,
            imgAsset: "assets/images/drow_ranger_full.png"
        },
        antiMage: {
            name: "Anti-Mage",
            health: 125,
            attackWhenRadiant: 9,
            attackWhenDire: 22,
            imgAsset: "assets/images/antimage_full.png"
        },
        nightStalker: {
            name: "Night Stalker",
            health: 150,
            attackWhenRadiant: 8,
            attackWhenDire: 18,
            imgAsset: "assets/images/night_stalker_full.png"
        },
        jakiro: {
            name: "Jakiro",
            health: 100,
            attackWhenRadiant: 6,
            attackWhenDire: 15,
            imgAsset: "assets/images/jakiro_full.png"
        }
    };

    // == FUNCTIONS ====================

    //Function that runs on start up
    function startUp(){
        //Display the available heroes to selcted from the function displayHeroes()
         //* Note: the parameter refers to the hero object
        function displayHeroes() {
            //sets variables to the first hero and their stats
            var imgObj = $("<img alt='image' class='u-full-width'>").attr("src", heroes.drowRanger.imgAsset);
            var heroName = $("<h5 class='character-name' id='name'>").text(heroes.drowRanger.name);
            var heroHealth = $("<p class='character-stats'> HP: <span id='health'></span></p>");
            $("#character-card-drow").append(imgObj).append(heroName).append(heroHealth);

            //sets variables to the second hero and their stats
            var imgObj = $("<img alt='image' class='u-full-width'>").attr("src", heroes.antiMage.imgAsset);
            var heroName = $("<h5 class='character-name' id='name'>").text(heroes.antiMage.name);
            var heroHealth = $("<p class='character-stats'> HP: <span id='health'></span></p>");
            $("#character-card-mage").append(imgObj).append(heroName).append(heroHealth);

            //sets variables to the third hero and their stats
            var imgObj = $("<img alt='image' class='u-full-width'>").attr("src", heroes.nightStalker.imgAsset);
            var heroName = $("<h5 class='character-name' id='name'>").text(heroes.nightStalker.name);
            var heroHealth = $("<p class='character-stats'> HP: <span id='health'></span></p>");
            $("#character-card-night").append(imgObj).append(heroName).append(heroHealth);

            //sets variables to the third hero and their stats
            var imgObj = $("<img alt='image' class='u-full-width'>").attr("src", heroes.jakiro.imgAsset);
            var heroName = $("<h5 class='character-name' id='name'>").text(heroes.jakiro.name);
            var heroHealth = $("<p class='character-stats'> HP: <span id='health'></span></p>");
            $("#character-card-jakiro").append(imgObj).append(heroName).append(heroHealth);
        }

        displayHeroes();

        //Display the starting message "SELECT YOUR HERO TO START
        var startUpText = $("<h3 class='start-up-text'> SELECT YOUR HERO TO START </h3>");
        $("#start-up-text-container").append(startUpText);

    }

    startUp();//delete this later after debugging is done

    //Displays the chosen hero on the player's side of the screen
    function displayChosenHero() {
        $(".card").click(function(){

        });
    }
});
