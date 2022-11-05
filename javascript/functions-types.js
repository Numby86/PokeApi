'use trict';

let div$$ = document.getElementById('list-pokemons');

for (let i = 0; i < 17; i++) {
  const buttonImg = document.createElement('button');
  buttonImg.classList.add('buttonTypes');
  let simbolsIcon = document.createElement("img");
  simbolsIcon.classList.add('simbolType');
  if (i === 0) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/grass.svg");
    simbolsIcon.classList.add('grass');
  }
  else if (i === 1) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/water.svg");
    simbolsIcon.classList.add('water');
  }
  else if (i === 2) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/fire.svg");
    simbolsIcon.classList.add('fire');
  }
  else if (i === 3) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/flying.svg");
    simbolsIcon.classList.add('flying');
  }
  else if (i === 4) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/bug.svg");
    simbolsIcon.classList.add('bug');
  }
  else if (i === 5) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/poison.svg");
    simbolsIcon.classList.add('poison');
  }
  else if (i === 6) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/normal.svg");
    simbolsIcon.classList.add('normal');
  }
  else if (i === 7) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/electric.svg");
    simbolsIcon.classList.add('electric');
  }
  else if (i === 8) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/ground.svg");
    simbolsIcon.classList.add('ground');
  }
  else if (i === 9) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/fairy.svg");
    simbolsIcon.classList.add('fairy');
  }
  else if (i === 10) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/fighting.svg");
    simbolsIcon.classList.add('fighting');
  }
  else if (i === 11) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/psychic.svg");
    simbolsIcon.classList.add('psychic');
  }
  else if (i === 12) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/rock.svg");
    simbolsIcon.classList.add('rock');
  }
  else if (i === 13) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/steel.svg");
    simbolsIcon.classList.add('steel');
  }
  else if (i === 14) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/ice.svg");
    simbolsIcon.classList.add('ice');
  }
  else if (i === 15) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/ghost.svg");
    simbolsIcon.classList.add('ghost');
  }
  else if (i === 16) {
    simbolsIcon.setAttribute("src", "./images/simbols-type/dragon.svg");
    simbolsIcon.classList.add('dragon');
  }
  buttonImg.appendChild(simbolsIcon);
  div$$.appendChild(buttonImg);
}

simbolsIcon.classList.add('simbolFire');