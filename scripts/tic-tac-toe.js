var gameOver = false;
var currentPlayer = "X";
var totalMoves = 0;
var isTie = false;
var start = false;
var replayGame = false;
function placeMarker(spotID){
    currentPlayerWon();
    if(!gameOver){
    //check to see if game is over
    //get the spot by spotID
    var spot = document.getElementById(spotID);
        if(spot.innerHTML.length === 0 && start){
            spot.innerHTML = currentPlayer;
            totalMoves += 1;
            currentPlayerWon();
            updateGameStatus();
        }
 

    } 
 
}


function currentPlayerWon(){

var s1 = document.getElementById('1');
var s2 = document.getElementById('2');
var s3 = document.getElementById('3');
var s4 = document.getElementById('4');
var s5 = document.getElementById('5');
var s6 = document.getElementById('6');
var s7 = document.getElementById('7');
var s8 = document.getElementById('8');
var s9 = document.getElementById('9');
//for each section;

//Checks for Possible wins
if(totalMoves === 9 && currentPlayerWon === false) {
    gameOver = true;
    isTie = true;
} else if(s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML){
        if (s1.innerHTML.length === 1 && s2.innerHTML.length === 1 && s3.innerHTML.length === 1){
                gameOver = true;
        }
} else if(s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML){
    if (s4.innerHTML.length === 1 && s5.innerHTML.length === 1 && s6.innerHTML.length === 1){
                gameOver = true;
        }
} else if(s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML){
    if (s7.innerHTML.length === 1 && s8.innerHTML.length === 1 && s9.innerHTML.length === 1){
        gameOver = true;
    }
} else if(s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML){
    if (s1.innerHTML.length === 1 && s4.innerHTML.length === 1 && s7.innerHTML.length === 1){
        gameOver = true;
    }
} else if(s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML){
    if (s2.innerHTML.length === 1 && s5.innerHTML.length === 1 && s8.innerHTML.length === 1){
        gameOver = true;
    }
}else if(s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML){
    if (s3.innerHTML.length === 1 && s6.innerHTML.length === 1 && s9.innerHTML.length === 1){
        gameOver = true;
    }
}else if(s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML){
    if (s1.innerHTML.length === 1 && s5.innerHTML.length === 1 && s9.innerHTML.length === 1){
        gameOver = true;
    }
}else if(s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML){
    if (s3.innerHTML.length === 1 && s5.innerHTML.length === 1 && s7.innerHTML.length === 1){
        gameOver = true;
    }
}else{
    gameOver = false;
}



return gameOver;
//check for a tie
//if (!gameOVer)
//check for tie use counter for remaining spaces
//gameOver = true;
//return gameOver;
}

function updateGameStatus(){
    currentPlayerWon();
    var statusBoard = document.getElementById('status');

    if (gameOver && isTie){
        statusBoard.innerHTML = "Game Over: It's a Tie";
      
    } else if(gameOver && currentPlayerWon()){
       
        statusBoard.innerHTML = "Player " + currentPlayer +" wins"; 
    } else{
        if (start){
            if(!gameOver && totalMoves > 0){
                if(currentPlayer === "X"){
                    currentPlayer = "O";
                    
                } else {
                    currentPlayer = "X";
                    
                }
        
 
        }
        if(!gameOver){
        statusBoard.innerHTML ="Player " + currentPlayer + "'s turn.";
        }
    }


    }
    //check if game over and update message
    //else
    //iif game is conintinigng update player turn
    //if tie alert of a tie
}
function startGame(){
    start = true;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("start").style.height = "2px";
    updateGameStatus();
}

