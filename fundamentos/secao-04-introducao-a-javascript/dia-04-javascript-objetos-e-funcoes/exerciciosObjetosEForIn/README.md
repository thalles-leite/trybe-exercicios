# :rocket: Exercícios - objetos e for/in

Usando o objeto abaixo, faça os exercícios a seguir:

```javascript
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

- [x] Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe  <span style="color: red;">meuObjeto.chave</span>. Valor esperado no console:

```javascript
Bem-vinda, Margarida
```

- [x] Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Use a sintaxe  <span style="color: red;">meuObjeto['chave']=valor</span>. Valor esperado no console:

```javascript
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

- [x] Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

```javascript
personagem
origem
nota
recorrente
```

- [x] Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```javascript
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

- [x] Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O Último MacPatinhas','Sim'. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

```javascript
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

# :rocket: Leitura de Objetos

Usando o objeto abaixo, faça os exercícios a seguir:

```javascript

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

```

- [x] Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

- [x] Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

```javascript
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

- [ ] Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem \<quantidade> livros favoritos”, onde “\<quantidade>” é um número gerado automaticamente pelo seu código.
