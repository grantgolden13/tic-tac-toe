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
            if ((player1.turnsTaken > player2.turnsTaken) && gameboardArray.every((elem) => {
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
            if (player1.turnsTaken > player2.turnsTaken) {
                player2.turnsTaken++
                return player2;
            } else {
                player1.turnsTaken++
                return player1;
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
            const winner = player1.turnsTaken > player2.turnsTaken ? player1.name : player2.name;
            if (winner == "player1") {
                alert("Congrats to player1! You won. Play again?");
                clearGameboard();
            } else if (winner == "player2") {
                alert("Congrats to player2! You won. Play again?");
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

    const player1 = _playerFactory("player1", "X", 0);
    const player2 = _playerFactory("player2", "O", 0);

    return { Gameboard, Game, player1, player2 }
})();