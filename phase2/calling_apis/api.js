fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .then((pokemon) => console.log(pokemon));