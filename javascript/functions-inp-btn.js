'use strict';

const pokemonContainer = document.getElementById('list-pokemons');
const input = document.getElementById('main__div2_searchPoke');
const button = document.getElementById('main__div2_button');
const form = document.getElementById('formulario');

const busca = (event) => {
    event.preventDefault();
    searchPokemon(input.value);
}

form.addEventListener('submit', busca);

function searchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then((res) => res.json())
      .then((data) => {
        createPokemon(data);
      });
}

function createPokemon(pokemon) {
    const completeCard = document.createElement('div');
    completeCard.classList.add('pokemon_completeCard');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('image_completeCard');

    const imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
    spriteContainer.appendChild(imagePokemon);

    const numPoke = document.createElement('span');
    numPoke.classList.add('num_poke');
    numPoke.textContent = "Num: " + pokemon.id;

    const namePoke = document.createElement('h3');
    namePoke.classList.add('name_poke');
    namePoke.textContent = pokemon.name;

    let hp = pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat;
    let attack = pokemon.stats[1].stat.name + ": " + pokemon.stats[1].base_stat;
    let defense = "DEF" + ": " + pokemon.stats[2].base_stat;
    let speed = pokemon.stats[5].stat.name + ": " + pokemon.stats[5].base_stat;
    const statsPoke = document.createElement('p');
    statsPoke.classList.add('statsPoke');
    statsPoke.textContent = hp + ' | ' + attack + ' | ' + defense + ' | ' + speed;

    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1]?.type?.name;

    const typePoke = document.createElement('p');
    typePoke.classList.add('typePoke');
    spriteContainer.classList.add(type1);
    typePoke.textContent = type1;

    if(type2 === 'flying' && type1 === 'normal') {
        spriteContainer.classList.add(type2);
    }
    else if(type2 === 'steel'){
        spriteContainer.classList.add(type2);
    }
    else{
        spriteContainer.classList.add(type1);
    }

    completeCard.appendChild(spriteContainer);
    completeCard.appendChild(numPoke);
    completeCard.appendChild(namePoke);
    completeCard.appendChild(typePoke);
    completeCard.appendChild(statsPoke);

    pokemonContainer.appendChild(completeCard);
}

export { busca } ;