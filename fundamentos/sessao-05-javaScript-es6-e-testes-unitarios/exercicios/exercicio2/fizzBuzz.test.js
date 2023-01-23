const myFizzBuzz = require('./fizzBuzz');

describe('Testes fizzbuzz', () => {
  it('Deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  })

  it('Deve retornar fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('Deve retornar buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('Deve retornar o próprio número', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })

  it('Deve retornar false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })

})