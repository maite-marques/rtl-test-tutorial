import sum from '../../Pages/Math/mathCounts';

// MATCHERS - TO BE
describe('Matcher - .toBe()', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test.skip('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
});



// TO EQUAL - Objetos e Arrays
describe.skip('Matcher - Objetos e Arrays .toEqual()', () => {
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
});

// .not Qualquer matcher pode ser negado 
// com .not no início
describe('Using .not', () => {
  test('adding positive numbers, the result its not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});

// Testando NULL
describe('Testing Null', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});

// Testando ZERO
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// COMPARAÇÃO
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// PONTO FLUTUANTE - .toBeCloseTo(x.xx)
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toEqual(0.3);         //  This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// STRING 
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// ARRAYS e iterables
describe('Array e iterables', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });
});

describe('Testing erros .toThrow', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
});
