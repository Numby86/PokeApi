"use trict";

const pokemonContainer = document.querySelector("#list-pokemons");
const pokemonContainer2 = document.querySelector(".main__div2_list-pokemons2");
const divs = document.querySelector(".allPokeType");
const myDiv = document.createElement("div");
const myDiv2 = document.createElement("div");
myDiv.classList.add("icons-and-types");
divs.appendChild(myDiv);
myDiv2.classList.add("icons-and-types");
divs.appendChild(myDiv2);
const pokebalImg$$ = document.querySelector("#pokeClass");

const pokemonsTypes = [
  "grass",
  "water",
  "fire",
  "flying",
  "bug",
  "poison",
  "normal",
  "electric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "steel",
  "ice",
  "ghost",
  "dragon",
];

function iconsPoke() {
  pokemonContainer.innerHTML = "";
  pokemonContainer2.innerHTML = "";

  for (let i = 0; i < pokemonsTypes.length; i++) {
    const pokemonType = pokemonsTypes[i];
    const buttonImg = document.createElement("button");
    buttonImg.classList.add("buttonTypes");
    buttonImg.value = pokemonType;
    buttonImg.addEventListener("click", () => {
      searchTypes(buttonImg.value);
      myDiv2.innerHTML = "";
    });
    const simbolsIcon = document.createElement("img");
    simbolsIcon.classList.add("simbolType", pokemonType);
    simbolsIcon.setAttribute("src", `./images/simbols-type/${pokemonType}.svg`);
    buttonImg.appendChild(simbolsIcon);
    myDiv.appendChild(buttonImg);
  }
}

function types() {
  pokebalImg$$.addEventListener("click", () => {
    //PROBE PONIENDOLO AQUI Y TAMPOCO...
    // pokemonContainer.innerHTML = "";
    // pokemonContainer2.innerHTML = "";
    iconsPoke();
  });
}

async function searchTypes(type) {
  const pokemonRequests = [];
  for (let i = 1; i <= 20; i++) {
    const promisePokemon = fetch("https://pokeapi.co/api/v2/type/" + type).then(
      (res) => res.json()
    );
    pokemonRequests.push(promisePokemon);
  }
  Promise.all(pokemonRequests).then((results) => {
    if (results) {
      results[0].pokemon.forEach((pokemon, index) => {
        createPokemons(pokemon);
      });
    }
  });
}

const createPokemons = (pokemons, name) => {
  const card = document.createElement("div");
  card.classList.add("only_type");

  const namePoke = document.createElement("h3");
  namePoke.textContent = pokemons.pokemon.name;

  card.appendChild(namePoke);
  myDiv2.appendChild(card);
};

export { types };
