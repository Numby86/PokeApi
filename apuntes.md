'use strict';

const input = document.querySelector('main__div2_searchPoke');
const button = document.querySelector('main__div2_button');
const pokeContainer = document.querySelector('list-pokemons');



function traerPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
    });
}


function crearPokemon(pokemon) {
    const myimg = document.createElement('img');
    myimg.src = pokemon.sprites.front_default;

    const myh3 = document.createElement('h3');
    myh3.textContent = pokemon.name;

    const mydiv = document.createElement('div');
    mydiv.appendChild(myh3);
    mydiv.appendChild(myimg);

    pokeContainer.appendChild(mydiv);
}

traerPokemon();