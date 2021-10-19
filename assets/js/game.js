//Functions

//fightPrompt gives the user a choice to fight

var fightPrompt = function() {

  // Ask if player would like to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight == 'fight' || promptFight == 'FIGHT') {
    
    fight();

  } else if (promptFight =='skip' || promptFight == 'SKIP') {

    var promptFight = window.prompt("Invalid Entry, please enter 'FIGHT' or 'SKIP' to choose.");

    fightPrompt();

  } else {

    window.alert("Peace Out");

  }

};

//Fight processes the battle

var fight = function() {
  
  //Process attacks

    console.log ("Player Attack Pre-event log: " + "enemyHealth = " + enemyHealth + " and playerAttack = " +playerAttack);
    console.log ("Player Attack initiated");
    enemyHealth = enemyHealth - playerAttack;
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
    
    console.log ("Enemy Attack Pre-event log: " + "playerHealth = " + playerHealth + " and enemyAttack = " + enemyAttack);
    console.log ("Enemy Attack Initiated");
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    
    var playerHealth = 10;

    if (playerHealth === 0) {
      console.log("This will not run.");
    } 
    else {
      console.log("This will run instead.");
    }

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

      var logReturnedValue = console.log ("Seeing if the log returns anything");
      console.log (logReturnedValue);
};


//
// Execution
//

//Welcome Message
window.alert("Welcome to Robot Gladiators!");

//Define Player Robot
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//Define Enemy Robot
var enemyName = "Mr. Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

fightPrompt();




