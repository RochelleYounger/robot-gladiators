// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    
    return value;
}

// MY ATTEMPT AT PSEUDOCODING - Lesson 3
// refresh game confirm
// *include in loop after game ends

// store prompt after refresh
// *use money to refill, upgrade health, and/or leave store
// *use value to change affected variables
// *should be included after game refresh prompt


// MODULE PSEUDOCODE - Lesson 3
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


var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    // Enter the conditional recursive function call here!
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // FALSEY VALUE SHORTCUT
    /************************************************************************************
     // if the `promptFight` is NOT a valid value, then execute the following statements.
     if (!promptFight) {
         window.alert("You need to provide a valid answer! Please try agian.");
         return fightOrSkip();
     }
    ************************************************************************************/ 

    // changing promptFight value to lowercase
    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    /*|| promptFight === "SKIP"*///was previously a condition inside if statement
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping, but don't let them go into the negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);

            //return true if  player wants to leave 
            return true; 

            //shop();
        }
    } 
    return false;    
};

// function to set name
var getPlayerName = function() {
    var name = "";

    // ***************************************
    // ADD LOOP HERE WITH PROMPT AND CONDITION
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    };
    // ***************************************

    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    // name: window.prompt("What is your robot's name?"),
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
     },// comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }, // comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -=7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// var playerInfo.name = window.prompt("What is your robot's name?");
// var playerInfo.health = 100;
// var playerInfo.attack = 10;
// var playerInfo.money = 10;

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// // var enemy.name = "Roborto";
// var enemy.names = ["Roborto", "Amy Android","Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemy) {
    // console.log(enemy);

    // keep track of who goes first
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn =false;
    }

    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
        // Giving player choice
        /* var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' of 'SKIP' to choose.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money = ", playerInfo.money);
                break;
            }
        }*/
        if (isPlayerTurn) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
                //if true, leave fight by breaking loop
                break;
            }
        
            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        
            // Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            enemy.health = Math.max(0, enemy.health - damage);
        
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
               
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;

                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        } else{
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            playerInfo.health = Math.max(0, playerInfo.health - damage);
       
            // Log a resulting message to the console so we know that it worked.
            console.log( enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");

                // leave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } 
        // switch turn order for next round 
        isPlayerTurn = !isPlayerTurn;
    }
};


// function to start a new game
var startGame = function() {
    //reset player stats
    // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
        
            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // // if player is still alive, player wins!
    // if (playerInfo.health > 0) {
    //     window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    // }
    // else {
    //     window.alert("You've lost your robot in battle.");
    // }

    window.alert("The game has now ended. Let's see how you did!");
    
    //check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    // NULL CHECK SHORT HAND (*short circuit conditional statement*)
    //highScore = highScore || 0;
    if (highScore === null) {
        highScore = 0;
    }
    // if playe has more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
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

var shop = function() {
    // console.log("entered the shop");

    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one of the following: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.")

    shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch to carry out action
    switch (shopOptionPrompt) {
        // case "REFILL": //new case
        // case "refill":
        case 1:
            /*if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
  
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }*/
            playerInfo.refillHealth();
            break;

        // case "UPGRADE": //new case
        // case "upgrade":
        case 2:
            /*if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }*/
            playerInfo.upgradeAttack();
            break;

        // case "LEAVE": //new case
        // case "leave":
        case 3:
            window.alert("Leaving the store.");
  
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
  
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// start the game when the page loads
startGame();




// EXTRA CODE FOR LEARNING/TESTING PURPOSES


// You can also log multiple values at once like this
// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

/* var playerInfo.name = window.prompt("What is your robot's name?");

console.log(playerInfo.name);

console.log("This logs a string, good for leaving yourself a message");

//this will do mth and log 20
console.log(10 + 10);

//what is this?
console.log("Our robot's name is " + playerInfo.name);

// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

fight(); */


// console.log(enemy.names);
// console.log(enemy.names[0]);
// console.log(enemy.names[1]);
// console.log(enemy.names[2]);
// console.log(enemy.names[3]);
// console.log(enemyInfo.length);
// for(var i=0; i < 3; i++) {
//     console.log("apple", i);
// }
// for(var i = 0; i < enemyInfo.length; i++) {
//     console.log(enemy.names[i]);
//     console.log(i);
//     console.log(enemy.names[i] + " is at " + i + " index");
// }

// var test = function(word) {
//     console.log("I love " + word);
// }

// test(playerInfo.name);