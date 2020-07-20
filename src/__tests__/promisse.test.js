
// beforeEach(() => {
//  colocar os dados necessários a cada test.. aqui
// })

let starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Eletric', speed: 90 },
];

const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons
      .filter(pokemons => pokemons.speed >= minimumSpeed)
      .map(pokemon => pokemon.name);

    if (bySpeed.length > 0) return resolve(bySpeed);
    return reject('No pokémons found');
  }, 1500);
});

beforeEach(() => {
  starterPokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
    { name: 'Charmander', type: 'Fire', speed: 65 },
    { name: 'Squirtle', type: 'Water', speed: 43 },
    { name: 'Pikachu', type: 'Eletric', speed: 90 },
  ]
});

test('minimum speed test by 50', () => {
  return filterBySpeed(50).then((data) => {
    expect(data).toStrictEqual(['Charmander', 'Pikachu'])
  })
})

describe('Insertion data', () => {

  test('INSERTION- above 50 speed base', () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    // QUANDO USAR PROMISSE Explicitar que irá ocorrer 1 asserção pelo menos
    expect.assertions(1); 
    // A promisse mesmo dentro do teste deve ser RETORNADA.. RETURN
    return filterBySpeed(50).then((data) => {
      expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard',]);
    });
  });

});

test('CASO DE ERRO - Pokémons above 99 speed base', () => {
  // expect.assertions(1);
  // Usando o .catch para pegar o erro.
  // usando um .toBe() pq o retorno agora é string
  return filterBySpeed(99).catch((data) => {
    expect(data).toBe('No pokémons found');
  });
});