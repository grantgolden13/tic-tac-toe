// Store the gameboard as an array inside of a Gameboard object

// Your players are also going to be stored in objects

// You're gonna want an object to control the flow of the game

// Have as little global code as possible. Tuck everything away
// into a module or factory

// Rule of thumb: if you need ONE of something, use a module
// If you need multiples of something, create them with factories

// Set up HTML and write a JS function that will render the contents
// of the gameboard array to the webpage (for now manually fill with
// X's and O's)

// what do i want to be able to do with the gameboard

// private properties/methods:

    // clear the gameboard
    // identify when the game is over
    // declare a winner

// public properties/methods:

    // add marker

const GameboardModule = (() => {
    const gameboard = [];

    const boardArray = [...document.getElementsByClassName('cell')];

    const reportIndex = function() {
        console.log(this.getAttribute('data-index'));
    }

    boardArray.forEach((cell) => {
        cell.addEventListener('click', reportIndex);
    });
    
    const _playerFactory = (name, marker) => {
         const addMark = function() {
            console.log(this.marker);
        }
        return { name, marker, addMark };
    }

    const computer = _playerFactory("computer", "X");
    const player = _playerFactory("player", "O");

    return { computer, player }
})();