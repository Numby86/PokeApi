"use strict";

const pokemonContainer = document.querySelector('#list-pokemons');

class CreatePokes {
  constructor(name, image, type, hp, attack, defense) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
  }
}

// function searchPokemon(pokemon) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
//       .then((res) => res.json())
//       .then((data) => {
//         createPokemon(data);
//       });
// }

// const fetchPokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
//   const res = await fetch(url);

//   const poke = await res.json();
//   let pokemon = {
//     name: poke.name,
//     image: poke.sprites.other.dream_world.front_default,
//     type: poke.types[0].type.name,
//     hp: poke.stats[0].base_stat,
//     atack: poke.stats[1].base_stat,
//     defense: poke.stats[2].base_stat,
//   };
//   return pokemon;
// };

const urlBul = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
const urlCha = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
const urlSqu = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"


const bulbasaur = new CreatePokes('bulbasaur', urlBul, 'grass', 45, 49, 49);
const charmander = new CreatePokes('charmander', urlCha, 'fire', 39, 53, 43);
const squirtle = new CreatePokes('squirtle', urlSqu, 'water', 44, 48, 65);

