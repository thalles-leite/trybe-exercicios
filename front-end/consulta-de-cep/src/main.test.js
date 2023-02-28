import getAddressFromCep from "./main.js";

import fetch from 'node-fetch'; // necessário em versões abaixo do Node 18.
global.fetch = fetch; // necessário em versões abaixo do Node 18.

describe("Quando a requisicao é bem sucedida, ela retorna os dados esperados",() => {
  it ("Deve retornar dados quando passarmos um cep válido.", async () => {
    const address = await getAddressFromCep('30130010');

    expect(address.cep).toBe("30130-10");
  })
})