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
    numPoke.textContent = pokemon.id;

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

    const typePoke = document.createElement('p');
    typePoke.classList.add('typePoke');
    typePoke.textContent = pokemon.types[0].type.name;

    if (pokemon.types[0].type.name === 'fire') {
        spriteContainer.classList.add('fire');
    }
    else if(pokemon.types[0].type.name === 'grass') {
        spriteContainer.classList.add('grass');
    }
    else if(pokemon.types[0].type.name === 'poison') {
        spriteContainer.classList.add('poison');
    }
    else if(pokemon.types[0].type.name === 'water') {
        spriteContainer.classList.add('water');
    }
    else if(pokemon.types[0].type.name === 'bug') {
        spriteContainer.classList.add('bug');
    }
    else if(pokemon.types[0].type.name === 'ground') {
        spriteContainer.classList.add('ground');
    }
    else if(pokemon.types[0].type.name === 'fairy') {
        spriteContainer.classList.add('fairy');
    }
    else if(pokemon.types[0].type.name === 'fighting') {
        spriteContainer.classList.add('fighting');
    }
    else if(pokemon.types[0].type.name === 'psychic') {
        spriteContainer.classList.add('psychic');
    }
    else if(pokemon.types[0].type.name === 'rock') {
        spriteContainer.classList.add('rock');
    }
    else if(pokemon.types[0].type.name === 'ice') {
        spriteContainer.classList.add('ice');
    }
    else if(pokemon.types[0].type.name === 'ghost') {
        spriteContainer.classList.add('ghost');
    }
    else if(pokemon.types[0].type.name === 'dragon') {
        spriteContainer.classList.add('dragon');
    }
    else if(pokemon.types[1].type.name === 'steel') {
        spriteContainer.classList.add('steel');
    }
    else if(pokemon.types[0].type.name === 'electric') {
        spriteContainer.classList.add('electric');
    }
    else if(pokemon.types[1].type.name === 'flying' && pokemon.types[0].type.name === 'normal') {
        spriteContainer.classList.add('flying');
    }
    else if(pokemon.types[0].type.name === 'normal') {
        spriteContainer.classList.add('normal');
    }
    /*const stats = pokemon.stats.map((estadistica, index) => {
        return estadistica.stat.name + ": " + estadistica.base_stat;
    });*/

    
    completeCard.appendChild(spriteContainer);
    completeCard.appendChild(numPoke);
    completeCard.appendChild(namePoke);
    completeCard.appendChild(typePoke);
    completeCard.appendChild(statsPoke);

    pokemonContainer.appendChild(completeCard);
}
