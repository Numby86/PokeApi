"use strict";

const pokemonContainer = document.querySelector("#list-pokemons");
const pokeShiny$$ = document.querySelector("#shiny");

function shinyPoke() {
  pokeShiny$$.addEventListener("click", () => {
    searchRandomShiny();
    pokeShiny$$.addEventListener("click", () => {
      pokemonContainer.innerHTML = "";
    });
    pokemonContainer.addEventListener("click", () => {
      pokemonContainer.innerHTML = "";
    });
  });
}

const generateRandomNuber = () => Math.floor(Math.random() * 151) + 1;

function searchRandomShiny() {
  const url = "https://pokeapi.co/api/v2/pokemon/" + generateRandomNuber();
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      createPokemon(pokemon);
    });
}

function createPokemon(pokemon) {
  const completeCard = document.createElement("div");
  completeCard.classList.add("pokemon_completeCard");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("image_completeCard");

  const imagePokemon = document.createElement("img");
  imagePokemon.src = pokemon.sprites.front_shiny;
  spriteContainer.appendChild(imagePokemon);

  const numPoke = document.createElement("span");
  numPoke.classList.add("num_poke");
  numPoke.textContent = "Num: " + pokemon.id;

  const namePoke = document.createElement("h3");
  namePoke.classList.add("name_poke");
  namePoke.textContent = pokemon.name;

  const abilityPoke = document.createElement("p");
  abilityPoke.textContent = "<< height: " + pokemon.height + " >>";

  const movePoke = document.createElement("p");
  movePoke.textContent = "<< weight: " + pokemon.weight + " >>";

  const type1 = pokemon.types[0].type.name;
  const type2 = pokemon.types[1]?.type?.name;

  const typePoke = document.createElement("p");
  typePoke.classList.add("typePoke");
  typePoke.textContent = type1;

  if (type2 === "flying" && type1 === "normal") {
    spriteContainer.classList.add(type2);
    typePoke.classList.add(type2);
  } else if (type2 === "steel") {
    spriteContainer.classList.add(type2);
    typePoke.classList.add(type2);
  } else {
    spriteContainer.classList.add(type1);
    typePoke.classList.add(type1);
  }

  completeCard.appendChild(spriteContainer);
  completeCard.appendChild(numPoke);
  completeCard.appendChild(namePoke);
  completeCard.appendChild(typePoke);
  completeCard.appendChild(movePoke);
  completeCard.appendChild(abilityPoke);

  pokemonContainer.appendChild(completeCard);
}

shinyPoke();
export { shinyPoke };