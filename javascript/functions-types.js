'use trict';

const div$$ = document.querySelector('#list-pokemons');
const pokebalImg$$ = document.querySelector('#pokeClass');

const pokemonsTypes = ["grass", "water", "fire", "flying", "bug", "poison", "normal", "electric", "ground", "fairy", "fighting", "psychic", "steel", "ice", "ghost", "dragon"];

// pokebalImg$$.addEventListener('click', iconsPoke);

const searchTypes = async (type) => {
  console.log('nos llego', type);
  const pokemonRequests = [];
  for (let i = 1; i <= 151; i++){
    const promisePokemon = fetch('https://pokeapi.co/api/v2/type/' + type).then(res => res.json());
      pokemonRequests.push(promisePokemon);  
    }
  Promise.all(pokemonRequests).then(results => {
    if(results){
      console.log(results);
      results[0].pokemon.forEach((pokemon, index) => {
          createPokemon(pokemon);
      });
    }
  })
};

const createPokemon = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon_card');
  card.id = 'grass';

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('image_card');

  /*const imagePokemon = document.createElement('img');
  imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
  spriteContainer.appendChild(imagePokemon);*/

  const numPoke = document.createElement('span');
  numPoke.classList.add('num_poke');
  numPoke.textContent = "Num: " + pokemon.id;

  const namePoke = document.createElement('h3');
  namePoke.classList.add('name_poke');
  namePoke.textContent = pokemon.pokemon.name;

  //let type1 = pokemon.types[0].type.name;
  // let type2 = pokemon.types[1].type.name;

  card.appendChild(spriteContainer);
  card.appendChild(numPoke);
  card.appendChild(namePoke);

  //spriteContainer.classList.add(type1);


  
  /*if (type2 === undefined) {
      spriteContainer.classList.add(type1);
  }

  else if(type2 === 'steel') {
      spriteContainer.classList.add('steel');
  }
  
  else if(type2 === 'flying' && type2 === 'normal') {
      spriteContainer.classList.add('flying');
  }*/

  /*if (iconsTypes[0] === type1){
    div$$.appendChild(card);
  }*/
  div$$.appendChild(card);
}

function noName(){
for (let i = 0; i < pokemonsTypes.length; i++) {
    const pokemonType = pokemonsTypes[i];
    const buttonImg = document.createElement('button');
    buttonImg.classList.add('buttonTypes');
    buttonImg.value = pokemonType;
    const simbolsIcon = document.createElement("img");
    simbolsIcon.classList.add('simbolType', pokemonType);
    simbolsIcon.setAttribute("src", `./images/simbols-type/${pokemonType}.svg`);
    buttonImg.appendChild(simbolsIcon);
    div$$.appendChild(buttonImg);
  }
}
noName();



// function iconsPoke (){
//   for (let i = 0; i < 17; i++) {
//   const buttonImg = document.createElement('button');
//   buttonImg.classList.add('buttonTypes');
//   const simbolsIcon = document.createElement("img");
//   simbolsIcon.classList.add('simbolType');
  
  
//   //let type1 = pokemon.types[0].type.name;

//   if (i === 0) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/grass.svg");
//     simbolsIcon.classList.add('grass');
//     buttonImg.value = 'grass';
//   }
  
//   else if (i === 1) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/water.svg");
//     simbolsIcon.classList.add('water');
//     buttonImg.value = 'water';
//   }
//   else if (i === 2) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/fire.svg");
//     simbolsIcon.classList.add('fire');
//   }
//   else if (i === 3) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/flying.svg");
//     simbolsIcon.classList.add('flying');
//   }
//   else if (i === 4) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/bug.svg");
//     simbolsIcon.classList.add('bug');
//   }
//   else if (i === 5) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/poison.svg");
//     simbolsIcon.classList.add('poison');
//   }
//   else if (i === 6) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/normal.svg");
//     simbolsIcon.classList.add('normal');
//   }
//   else if (i === 7) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/electric.svg");
//     simbolsIcon.classList.add('electric');
//   }
//   else if (i === 8) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/ground.svg");
//     simbolsIcon.classList.add('ground');
//   }
//   else if (i === 9) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/fairy.svg");
//     simbolsIcon.classList.add('fairy');
//   }
//   else if (i === 10) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/fighting.svg");
//     simbolsIcon.classList.add('fighting');
//   }
//   else if (i === 11) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/psychic.svg");
//     simbolsIcon.classList.add('psychic');
//   }
//   else if (i === 12) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/rock.svg");
//     simbolsIcon.classList.add('rock');
//   }
//   else if (i === 13) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/steel.svg");
//     simbolsIcon.classList.add('steel');
//   }
//   else if (i === 14) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/ice.svg");
//     simbolsIcon.classList.add('ice');
//   }
//   else if (i === 15) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/ghost.svg");
//     simbolsIcon.classList.add('ghost');
//   }
//   else if (i === 16) {
//     simbolsIcon.setAttribute("src", "./images/simbols-type/dragon.svg");
//     simbolsIcon.classList.add('dragon');
//   }
//   buttonImg.appendChild(simbolsIcon);
//   div$$.appendChild(buttonImg);
// }
// }