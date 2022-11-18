"use strict";

const gameBoy$$ = document.querySelector("#gameboy");
const pokemonContainer = document.querySelector("#list-pokemons");
const pokemonContainer2 = document.querySelector(".main__div2_list-pokemons2");


// EVENTOS PARA LIMPIAR Y CREAR TABLERO
function board() {
  gameBoy$$.addEventListener("click", () => {
    const divs = document.querySelector('.allPokeType');
    divs.innerHTML = "";
    pokemonContainer.innerHTML = "";
    pokemonContainer2.innerHTML = "";
    createBoard();
  })
}
// CREO EL TABLERO CON BUCLE FOR Y YA LE AÑADO TODAS LAS CLASES A BUTTON ETC, Y METO LOGICA DEL JUEGO
function createBoard() {

  const myDiv$$ = document.createElement("div");
  myDiv$$.classList.add("main_div3");
  pokemonContainer2.appendChild(myDiv$$);
  const parWinner = document.createElement("p");
  parWinner.id = "winner";
  myDiv$$.appendChild(parWinner);
  const divBoard = document.createElement("div");
  divBoard.classList.add("boardVis");
  myDiv$$.appendChild(divBoard);
  for (let i = 0; i < 9; i++) {
    let buttonsBox = document.createElement("button");
    divBoard.appendChild(buttonsBox);
    buttonsBox.classList.add("game", "button" + (i + 1));
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
  const btnList = document.querySelectorAll(".game");
  btnList.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      event.target.textContent = turn ? "X" : "O";
      moveArray[index] = turn;
      if (winner(0, 1, 2) ||
        winner(3, 4, 5) ||
        winner(6, 7, 8) ||
        winner(0, 3, 6) ||
        winner(1, 4, 7) ||
        winner(2, 5, 8) ||
        winner(0, 4, 8) ||
        winner(2, 4, 6))
        parWinner.textContent = `Ganó el PokEquipo > ${turn ? "X" : "O"} < `;
      turn = !turn;
      parWinner.addEventListener("click", () => {
        myDiv$$.innerHTML = "";
      });

    });
  });
}

export { board };