var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Giving player choice
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' of 'SKIP' to choose.");

    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");

        }
    } else if (promptFight  === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skipt the fight!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question agian by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try agian!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// fight();




// EXTRA CODE FOR LEARNING/TESTING PURPOSES


// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

/* var playerName = window.prompt("What is your robot's name?");

console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

//this will do mth and log 20
console.log(10 + 10);

//what is this?
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

fight(); */


// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames[3]);
// console.log(enemyNames.length);
// for(var i=0; i < 3; i++) {
//     console.log("apple", i);
// }
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

// var test = function(word) {
//     console.log("I love " + word);
// }

// test(playerName);