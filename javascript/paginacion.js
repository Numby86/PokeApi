'use strict';

const main$$ = document.querySelector('.main');
const pokemonContainer = document.querySelector('#list-pokemons');
const pokeList$$ = document.querySelector('#pokeList');
let offset = 0;
//let limit = 30;

const divButton = document.createElement('div');
divButton.classList.add("div-buttons");
let btnNext = document.createElement('buton');
btnNext.classList.add("next");
let btnPrevius = document.createElement('buton');
btnPrevius.classList.add("previus");

const getPokemons = async(offset) => {
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=30`;
  const response = await fetch(urlPokemon)
  const result = await response.json();
  dataPokemons(result.results);
}
getPokemons(offset);
btnNext.addEventListener('click', () => {
  offset += 30;
  getPokemons(offset);
  btnPrevius.textContent = 'PREVIUS';
  divButton.appendChild(btnPrevius);
})
btnPrevius.addEventListener('click', () => {
  if (offset <= 30) {
    offset -= 30;
    getPokemons(offset);
    divButton.removeChild(btnPrevius);
  }
  else {
    offset -= 30;
    getPokemons(offset);
  } 
})

const dataPokemons = async(data) => {
    pokemonContainer.innerHTML = '';
    try {
        for (const index of data) {
          const resp = await fetch(index.url);
          const pokemon = await resp.json();
          console.log(pokemon);
          
          const card = document.createElement("div");
          card.classList.add("pokemon_card");

          const spriteContainer = document.createElement("div");
          spriteContainer.classList.add("image_card");

          const imagePokemon = document.createElement("img");
          imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
          spriteContainer.appendChild(imagePokemon);

          const numPoke = document.createElement("span");
          numPoke.classList.add("num_poke");
          numPoke.textContent = "Num: " + pokemon.id;

          const namePoke = document.createElement("h3");
          namePoke.classList.add("name_poke");
          namePoke.textContent = pokemon.name;

          const type1 = pokemon.types[0].type.name;
          const type2 = pokemon.types[1]?.type?.name;

          card.appendChild(spriteContainer);
          card.appendChild(numPoke);
          card.appendChild(namePoke);

          if (type2 === "flying" && type1 === "normal") {
            spriteContainer.classList.add(type2);
          } else if (type2 === "steel") {
            spriteContainer.classList.add(type2);
          } else {
            spriteContainer.classList.add(type1);
          }

          const flipCard = document.createElement("div");
          flipCard.classList.add("flip-card");

          const cardContainer = document.createElement("div");
          cardContainer.classList.add("card-container");

          flipCard.appendChild(cardContainer);

          const cardBack = document.createElement("div");
          cardBack.classList.add("card-back");

          const pokeTypes = document.createElement("h3");
          const typesPoke = pokemon.types.map((tipos, index) => {
            return tipos.type.name;
          });
          if (type2 === "flying" && type1 === "normal") {
            pokeTypes.classList.add(type2);
          } else if (type2 === "steel") {
            pokeTypes.classList.add(type2);
          } else {
            pokeTypes.classList.add(type1);
          }
          pokeTypes.textContent = typesPoke;

          const divFeatures = document.createElement("div");
          divFeatures.classList.add("features");

          const abilityPoke = document.createElement("p");
          abilityPoke.textContent =
            "<<abi: " + pokemon.abilities[0].ability.name + ">>";
          divFeatures.appendChild(abilityPoke);

          const movePoke = document.createElement("p");
          movePoke.textContent = "<<move: " + pokemon.moves[0].move.name + ">>";
          divFeatures.appendChild(movePoke);

          cardBack.appendChild(pokeTypes);
          cardBack.appendChild(divFeatures);

          cardContainer.appendChild(card);
          cardContainer.appendChild(cardBack);
          pokemonContainer.appendChild(flipCard);
          btnNext.textContent = 'NEXT';
          main$$.appendChild(divButton);
          divButton.appendChild(btnNext);
          
        }
    } catch (error) {
        console.log(error);
    }
}

