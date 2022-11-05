'use strict';

const pokemonContainer = document.querySelector('#list-pokemons');


const searchPokemons = async() => {
    const pokemonRequests = [];
    for (let i = 1; i <= 151; i++) {
        const promisePokemon = fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(res => res.json());
        pokemonRequests.push(promisePokemon);  
    }
    Promise.all(pokemonRequests).then(results => {
        results.forEach((pokemon, index) => {
            createPokemon(pokemon, index + 1);
        });
    })
};

const createPokemon = (pokemon, id) => {
    const card = document.createElement('div');
    card.classList.add('pokemon_card');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('image_card');

    const imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
    spriteContainer.appendChild(imagePokemon);

    const numPoke = document.createElement('span');
    numPoke.classList.add('num_poke');
    numPoke.textContent = "Num: " + pokemon.id;

    const namePoke = document.createElement('h3');
    namePoke.classList.add('name_poke');
    namePoke.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(numPoke);
    card.appendChild(namePoke);

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
    /*else if(pokemon.types[1].type.name === 'steel') {
        spriteContainer.classList.add('steel');
    }*/
    else if(pokemon.types[0].type.name === 'electric') {
        spriteContainer.classList.add('electric');
    }
    /*else if(pokemon.types[1].type.name === 'flying' && pokemon.types[0].type.name === 'normal') {
        spriteContainer.classList.add('flying');
    }*/
    else if(pokemon.types[0].type.name === 'normal') {
        spriteContainer.classList.add('normal');
    }


    pokemonContainer.appendChild(card);
};

searchPokemons();









// traer de la pokeApi original
/*function searchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        createPokemon(data);
      });
}

function searchAllPokemons(number) {
    for (let i = 1; i <= number; i++) {
        searchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon_card');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('image_card');

    const imagePokemon = document.createElement('img');
    imagePokemon.src = pokemon.sprites.other.dream_world.front_default;
    spriteContainer.appendChild(imagePokemon);

    const numPoke = document.createElement('span');
    numPoke.classList.add('num_poke');
    numPoke.textContent = "Num: " + pokemon.id;

    const namePoke = document.createElement('h3');
    namePoke.classList.add('name_poke');
    namePoke.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(numPoke);
    card.appendChild(namePoke);
//PINTAR POR CLASE

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

    pokemonContainer.appendChild(card);
}

searchAllPokemons(151);*/