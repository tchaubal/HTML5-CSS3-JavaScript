var target_index;
var guesses = 0;
var finished = false;
var guessedInput;
var randomSelectedColor;
var target;
var colorName;
var userInput;
var randomSelected;

//Create array of colors and sort alphabetically
var colors= ["blue","green","red","yellow","indigo","cyan","pink","purple"];
var sortedColors = colors.sort();
var show = colors[Math.floor(Math.random()*colors.length)];
  alert(show);

 var pos;
function playGame(){
  while(!finished){
    var showColors = prompt("I am thinking of one of these colors:\n\n"+sortedColors + "\n\nWhat color am I thinking of?");
    guessedInput = showColors;
    pos = colors.indexOf(guessedInput);
    //alert(pos);
    //alert(guessedInput);
    guesses++;
    finished = gameLogic();
  }
}

function gameLogic(){

    if(guessedInput == show){
    changeColor();
    alert("Congratulations!! You have guessed the color!\n\nThe color was : " +show+"\n\nIt took you "+guesses+" guesses to complete the game!\n\nYou can see the color in the background.");
    return true;
    }

    if(-1 === pos){
      alert("Sorry I don't recognize your color.\nPlease Try again.");
    return false;
    }

    if(guessedInput<show){
    alert("Sorry your guess is incorrect!\nHint: Your selected color is alphabetically smaller than mine!\nPlease try again !!");
    return false;
    }

    if(guessedInput>show){
    alert("Sorry your guess is incorrect!\nYour selected color is alphabetically larger than mine!\nPlease try again !!");
    return false;
    }
}

function changeColor(){
  myBody = document.getElementsByTagName("body")[0];
  myBody.style.background = guessedInput;
}


