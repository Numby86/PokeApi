'use strict';
const board$$ = document.querySelector('.notBoard');
const gameBoy$$ = document.querySelector('#gameboy');

gameBoy$$.addEventListener('click', board);

function board() {
    board$$.classList.add('boardVis');
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

