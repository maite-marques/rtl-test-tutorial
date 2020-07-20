import { cleanup } from '@testing-library/react'

cleanup();

let starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Eletric', speed: 90 },
];

// setTimeout para tornar o código assíncrono
// Promisse que retorna os elementos baseados 
// na velocidade passada por parâmetro 
const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons
      .filter(pokemons => pokemons.speed >= minimumSpeed)
      .map(pokemon => pokemon.name);

    if (bySpeed.length > 0) return resolve(bySpeed);
    return reject('No pokémons found');
  }, 1500);
});

test('Pokémons above 50 speed base', () => {
  expect.assertions(1); // Promisse
  return filterBySpeed(50).then((data) => { // retornar a promisse
    expect(data).toStrictEqual(['Charmander', 'Pikachu']);
  });
});

test(' ASYNC AWAIT - Pokémons above 50 speed base', async () => {
  starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
  const data = await filterBySpeed(50);
  expect.assertions(1);
  expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
});
