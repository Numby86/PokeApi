'use strict';

const main$$ = document.querySelector('.main');
const pokemonContainer = document.querySelector('#list-pokemons');
const pokeList$$ = document.querySelector('#pokeList');

function eventPoke() {
    pokeList$$.addEventListener('click', allPoke);
    pokemonContainer.addEventListener('click', () => {
        pokemonContainer.remove();
    });
}

function allPoke() {
    searchPokemons();
}

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
}

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
    abilityPoke.textContent = '<<abi: ' + pokemon.abilities[0].ability.name + '>>';
    divFeatures.appendChild(abilityPoke);

    const movePoke = document.createElement('p');
    movePoke.textContent = '<<move: ' + pokemon.moves[0].move.name + '>>';
    divFeatures.appendChild(movePoke);

    cardBack.appendChild(pokeTypes);
    cardBack.appendChild(divFeatures);

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}

export { eventPoke } ;