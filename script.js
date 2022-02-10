// so far everything works except for identifying and delcaring a draw.

const TicTacToe = (() => {

    const Gameboard = (() => {
        const gameboardArray = [...document.getElementsByClassName('cell')];

        const newGameBtn = document.getElementById('btn');

        newGameBtn.addEventListener('click', () => {
            Game.clearGameboard();
        });

        const [topLeft, topMid, topRight, ...rest] = gameboardArray;
        const [midLeft, midMid, midRight, ...otherRest] = rest;
        const [botLeft, botMid, botRight] = otherRest;

        const gameOverChecker = () => {
            // 9 possible game over scenarios
            if ((player.turnsTaken > computer.turnsTaken) && gameboardArray.every((elem) => {
                return !(elem.innerText == "")
            })) {
                Game.itsATie();
            } else if ((topLeft.innerText == "X" || topLeft.innerText == "O") && (topLeft.innerText == topMid.innerText) &&
                    (topLeft.innerText == topRight.innerText)) {
                Game.gameOver();;
            } else if ((midLeft.innerText == "X" || midLeft.innerText == "O") && (midLeft.innerText == midMid.innerText) &&
                    (midLeft.innerText == midRight.innerText)) {
                Game.gameOver();;
            } else if ((botLeft.innerText == "X" || botLeft.innerText == "O") && (botLeft.innerText == botMid.innerText) &&
                    (botLeft.innerText == botRight.innerText)) {
                Game.gameOver();;
            } else if ((topLeft.innerText == "X" || topLeft.innerText == "O") && (topLeft.innerText == midLeft.innerText) &&
                    (topLeft.innerText == botLeft.innerText)) {
                Game.gameOver();;
            } else if ((topMid.innerText == "X" || topMid.innerText == "O") && (topMid.innerText == midMid.innerText) &&
                    (topMid.innerText == botMid.innerText)) {
                Game.gameOver();;
            } else if ((topRight.innerText == "X" || topRight.innerText == "O") && (topRight.innerText == midRight.innerText) &&
                    (topRight.innerText == botRight.innerText)) {
                Game.gameOver();;
            } else if ((topLeft.innerText == "X" || topLeft.innerText == "O") && (topLeft.innerText == midMid.innerText) &&
                    (topLeft.innerText == botRight.innerText)) {
                Game.gameOver();;
            } else if ((botLeft.innerText == "X" || botLeft.innerText == "O") && (botLeft.innerText == midMid.innerText) &&
                    (botLeft.innerText == topRight.innerText)) {
                Game.gameOver();;
            } else if (gameboardArray.every(Game.arePresent)) {
                Game.gameOver();
            }
        }
       
        const gameboardEvents = () => {
            gameboardArray.forEach( cell => {
                cell.addEventListener('click', () => {
                    if (cell.innerText == "") {
                        let turnee = Game.whoseTurn();
                        cell.innerText = `${turnee.marker}`
                        gameOverChecker();
                    }
                });
            });
        }

        gameboardEvents();

        return { gameboardArray, gameOverChecker };
    })();

    const Game = (() => {

        const arePresent = (value) => {
            value !== "";
        }

        const whoseTurn = () => {
            if (player.turnsTaken > computer.turnsTaken) {
                computer.turnsTaken++
                return computer;
            } else {
                player.turnsTaken++
                return player;
            }
        }

        const clearGameboard = () => {
            Gameboard.gameboardArray.forEach( cell => {
                cell.innerText = "";
                location.reload();
            });
        }

        const itsATie = () => {
            alert("It's a tie. Play again?");
            clearGameboard();
        }

        const gameOver = () => {
            const winner = player.turnsTaken > computer.turnsTaken ? player.name : computer.name;
            if (winner == "player") {
                alert("Congrats! You won. Play again?");
                clearGameboard();
            } else if (winner == "computer") {
                alert("You lost to the computer. Try again?");
                clearGameboard();
            }
        }

        return { arePresent, whoseTurn, clearGameboard, itsATie, gameOver };
    })();

    const _playerFactory = (name, marker, turnsTaken) => {
        const addMark = () => {
           console.log(this.marker);
        }
       return { name, marker, turnsTaken, addMark };
    }

    const player = _playerFactory("player", "X", 0);
    const computer = _playerFactory("computer", "O", 0);

    return { Gameboard, Game, computer, player }
})();