
const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokémon para começar.')
  }, 2000)
}

test('passando um string', (done) => {
  const callback = (data) => {
    console.log(data);
    expect(data).toBe('Bulbasaur é o melhor pokémon para começar.')
    // sem o done o teste termina antes do pokeTips chamar a função. - testar outro pokemon
    // retorna positivo - FALSO POSITIVO
    done();
  }
  pokeTips(callback);
})
