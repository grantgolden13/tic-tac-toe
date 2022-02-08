// what do i want to be able to do with the gameboard

// private properties/methods:

    // clear the gameboard
    // identify when the game is over
    // declare a winner

    // these probably all go in the same game flow module
    // can you put a module inside a module???

const TicTacToeModule = (() => {

    const Gameboard = (() => {
        const _gameboardArray = [...document.getElementsByClassName('cell')];
       
        const gameboardEvents = () => {
            _gameboardArray.forEach( cell => {
                cell.addEventListener('click', () => {
                    let turnee = NewGame.whoseTurn();
                    cell.innerText = `${turnee.marker}`
                });
            });
        }

        const clearGameboard = () => {
            _gameboardArray.forEach( cell => {
                cell.innerText = "";
                location.reload();
            });
        }

        gameboardEvents();

        return { clearGameboard };
    })();

    const NewGame = (() => {
        const whoseTurn = () => {
            if (player.turnsTaken > computer.turnsTaken) {
                computer.turnsTaken++
                return computer;
            } else {
                player.turnsTaken++
                return player;
            }
        }
        return { whoseTurn };
    })();

    const _playerFactory = (name, marker, turnsTaken) => {
        const addMark = () => {
           console.log(this.marker);
       }

       return { name, marker, turnsTaken, addMark };
    }

    const player = _playerFactory("player", "X", 0);
    const computer = _playerFactory("computer", "O", 0);

    return { Gameboard, NewGame, computer, player }

})();