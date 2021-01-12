const playerChoice = document.getElementById("player-choice-container");
const gameContainer = document.getElementById("game-container");
const resolution = document.getElementById("resolution-container");
let message = document.getElementById("message");
let buttonX = document.getElementById("X");
let buttonO = document.getElementById("O");
let restart = document.getElementById("game-restart");
let human, computer, turn;
let grid = document.getElementById("grid");
let box = document.getElementsByClassName("box");

let cell;
let cells;

// The initial values: visible Sign Choice, Game Grid is hidded:
gameContainer.style.display="none";
restart.style.display="none";
resolution.style.display = "none";

// Reset brings back to Sign Choice and makes Sign undefined
restart.onclick = function reset () {
    gameContainer.style.display = "none";
    playerChoice.style.display = "initial";
    restart.style.display="none";
    resolution.style.display = "none";
    let human;
    let computer;
    cell.innerHTML = "";
    grid.innerHTML = "";
    cell.classList.remove('winner');
    console.log(human, computer);
}


// Choosing X or O and saving the choice in a var
buttonX.onclick = function X () {
    gameContainer.style.display = "grid";
    playerChoice.style.display = "none";
    restart.style.display="initial";
    human = this.innerHTML;
    computer = buttonO.innerHTML;
    console.log(human, computer);
    buildGame();

}

buttonO.onclick = function O () {
    gameContainer.style.display = "grid";
    playerChoice.style.display = "none";
    restart.style.display="initial";
    human = this.innerHTML;
    computer = buttonX.innerHTML;
    console.log(human, computer)
    buildGame();

}



// build a Game grid:
function buildGame() {
    for (let i=1; i<=9; i++) {
        cell = document.createElement('li');
        cell.id = i;
        cell.addEventListener('click', playerMove, true);
        grid.appendChild(cell);
    }
    cells = Array.prototype.slice.call(grid.getElementsByTagName('li')); 
}



let check = () => {
    win(document.getElementById("1"), document.getElementById("2"), document.getElementById("3"));
    win(document.getElementById("4"), document.getElementById("5"), document.getElementById("6"));
    win(document.getElementById("7"), document.getElementById("8"), document.getElementById("9"));
    win(document.getElementById("1"), document.getElementById("4"), document.getElementById("7"));
    win(document.getElementById("2"), document.getElementById("5"), document.getElementById("8"));
    win(document.getElementById("3"), document.getElementById("6"), document.getElementById("9"));
    win(document.getElementById("1"), document.getElementById("5"), document.getElementById("9"));
    win(document.getElementById("7"), document.getElementById("5"), document.getElementById("3"));
}



let win = (x, y, z) => {
    if(x.innerHTML === human && y.innerHTML === human && z.innerHTML === human) {
        setTimeout( () => {
            gameContainer.style.display = "none";
            resolution.style.display = "block";
            message.innerHTML = `Congrats, <br> you won!`;
        }, 500);
        x.classList.add("winner");
        y.classList.add("winner");
        z.classList.add("winner");
        return true;
        
    }
    else if(x.innerHTML === computer && y.innerHTML === computer && z.innerHTML === computer) {
        setTimeout( () => {
            gameContainer.style.display = "none";
            resolution.style.display = "block";
            message.innerHTML = `Unfortunately,<br>you have lost!`;
        }, 500);
        x.classList.add("winner");
        y.classList.add("winner");
        z.classList.add("winner");
        return true;
    }
    else {
        return false;
    }
}

// click listener to each cell
function playerMove() {
    console.log(human);
    if (this.innerHTML == false) {
        this.innerHTML = human;
    }
    check();
    computerMove();
}


function computerMove () {
    let emptyCells = [];
    let random;
    cells.forEach (function(cell){
        if (cell.innerHTML == '') {
          emptyCells.push(cell);
        }
      });
      
      // computer marks a random EMPTY cell
      random = Math.ceil(Math.random() * emptyCells.length) - 1;
      emptyCells[random].innerHTML = computer;
      

}
