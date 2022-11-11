'use strict';

const pokemonContainer = document.querySelector('#list-pokemons');
const pokeShiny$$ = document.querySelector('#shiny');

function shinyPoke() {
    pokeShiny$$.addEventListener('click', () => {
        searchRandomShiny();
        pokeShiny$$.addEventListener('click', () => {
            pokemonContainer.innerHTML = '';
        })
        pokemonContainer.addEventListener('click', () => {
            pokemonContainer.innerHTML = '';
        });
    });
}

const generateRandomNuber = () => Math.floor(Math.random() * 151) + 1;

function searchRandomShiny() {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + generateRandomNuber();
    fetch(url)
      .then((res) => res.json())
      .then((pokemon) => {
        createPokemon(pokemon);
      });
}
const createPokemon = (pokemon, id) => {
    const card = document.createElement('div');
    card.classList.add('pokemon_card');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('image_card');

    const imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.sprites.front_shiny;
    spriteContainer.appendChild(imagePokemon);

    const numPoke = document.createElement('span');
    numPoke.classList.add('num_poke');
    numPoke.textContent = "Num: " + pokemon.id;

    const namePoke = document.createElement('h3');
    namePoke.classList.add('name_poke');
    namePoke.textContent = pokemon.name;

    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1]?.type?.name;

    card.appendChild(spriteContainer);
    card.appendChild(numPoke);
    card.appendChild(namePoke);

    if(type2 === 'flying' && type1 === 'normal') {
        spriteContainer.classList.add(type2);
    }
    else if(type2 === 'steel'){
        spriteContainer.classList.add(type2);
    }
    else{
        spriteContainer.classList.add(type1);
    }

    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);
    const cardBack = document.createElement("div");

    cardBack.classList.add("card-back");

    const pokeTypes = document.createElement('h3')
    const typesPoke = pokemon.types.map((tipos, index) => {
        return tipos.type.name;
    });
    if(type2 === 'flying' && type1 === 'normal') {
        pokeTypes.classList.add(type2);
    }
    else if(type2 === 'steel'){
        pokeTypes.classList.add(type2);
    }
    else{
        pokeTypes.classList.add(type1);
    }
    pokeTypes.textContent = typesPoke;

    const divFeatures = document.createElement('div');
    divFeatures.classList.add('features');

    const abilityPoke = document.createElement('p');
    abilityPoke.textContent = '<< height: ' + pokemon.height + ' >>';
    divFeatures.appendChild(abilityPoke);

    const movePoke = document.createElement('p');
    movePoke.textContent = '<< weight: ' + pokemon.weight + ' >>';
    divFeatures.appendChild(movePoke);

    cardBack.appendChild(pokeTypes);
    cardBack.appendChild(divFeatures);

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}
shinyPoke();
export { shinyPoke };


