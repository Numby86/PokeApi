'use strict';
const board$$ = document.querySelector('.notBoard');
const gameBoy$$ = document.querySelector('#gameboy');
const main$$ = document.querySelector('.main');

gameBoy$$.addEventListener('click', board);

function board() {
    createBoard();
}

const createBoard = () => {

    const myDiv$$ = document.createElement('div');
    myDiv$$.classList.add('main_div3');
    main$$.appendChild(myDiv$$);
    const parWinner = document.createElement('p');
    parWinner.id = "winner";
    myDiv$$.appendChild(parWinner);
    const divBoard = document.createElement('div');
    divBoard.classList.add('boardVis');
    myDiv$$.appendChild(divBoard);
    for (let i = 0; i < 9; i++) {
        let buttonsBox = document.createElement('button');
        divBoard.appendChild(buttonsBox);
        buttonsBox.classList.add('game', "button" + (i + 1));
    }

    let turn = true;
    const moveArray = new Array(9).fill(null);
    function winner(i, j, k) {
    if (moveArray[i] == moveArray[j] &&
        moveArray[k] == moveArray[j] &&
        moveArray[i] != null)
        return true;
        return false;
    }
    const btnList = document.querySelectorAll('.game');
    btnList.forEach((btn, index) => {
    btn.addEventListener('click', event => {
        event.target.textContent = turn ? 'X' : "O";
        moveArray[index] = turn;
        if (winner(0, 1, 2) ||
            winner(3, 4, 5) ||
            winner(6, 7, 8) ||
            winner(0, 3, 6) ||
            winner(1, 4, 7) ||
            winner(2, 5, 8) ||
            winner(0, 4, 8) ||
            winner(2, 4, 6))
            document.querySelector('#winner').textContent = `Ganó el PokEquipo "${turn ? 'X' : 'O'}" `;
            turn = !turn;
        });
    });
}
