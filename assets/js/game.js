var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// var enemyName = "Roborto";
var enemyNames = ["Roborto", "Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// MY ATTEMPT AT PSEUDOCODING
// refresh game confirm
// *include in loop after game ends

// store prompt after refresh
// *use money to refill, upgrade health, and/or leave store
// *use value to change affected variables
// *should be included after game refresh prompt


// MODULE PSEUDOCODE
// WRAP the game logic in a startGame() function

// WHEN the player is defeated or there are no more enemies, call an endGame() function that:
// *Alerts the player's total stats
// *Asks the player if they want to play again
// *If yes, call startGame() to restart the game

// AFTER the player skips or defeats an enemy (and there are still more robots to fight):
// *Ask the player if they want to "shop"
// *If no, continue as normal
// *If yes, call the shop() function
// *In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
// *If refill, subtract money points from player and increase health
// *If upgrade, subtract money points from player and increase attack power
// *If leave, alert goodbye and exit the function
// *If any other invalid option, call Shop() again


var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // Giving player choice
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' of 'SKIP' to choose.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney = ", playerMoney);
                break;
            }
        }

        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
               
            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
       
        // Log a resulting message to the console so we know that it worked.
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");

            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};


// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
        
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come Back Soon!");
    }
}

// start the game when the page loads
startGame();




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