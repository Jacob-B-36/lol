function getPokemon(){
    console.log("get clicked")
}


function getRandomNumber(){
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * (20)) + 1;
  console.log('randomNumber', randomNumber);


  return randomNumber;
}



function testPokemonAPI(){
    let randomNumber = getRandomNumber()
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
   .then(function(response) {
        console.log('response from server', response.ok)
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
    .then(function(data) {
        // Process the response data here
        console.log('data from PokeAPI', data)
        let imageURl = data.sprites.front_default;
        let imageElement = document.getElementById('pokemonImage');
        imageElement.src = imageURl;



        let pokemonHeight = document.getElementById("pokemonHeight");
        pokemonHeight.innerText=data.height;

        let pokemonWeight = document.getElementById("pokemonWeight");
        pokemonWeight.innerText=data.weight;


        let abilities = data.abilities;
        let abilitiesString = "";
        console.log('abilities', abilities);
        for (let index = 0; index < abilities.length; index++) {
          console.log(abilities[index])
          abilitiesString = abilitiesString + " " + abilities[index].ability.name;
        }

        let pokemonAbilities = document.getElementById("pokemonAbilities");
        pokemonAbilities.innerText=abilitiesString;
        let pokemonOrder = document.getElementById("pokemonOrder");
        pokemonOrder.innerText=data.order;

        let pokemonID = document.getElementById("pokemonID");
        pokemonID.innerText=data.id;

        let titlePokemon = document.getElementById("headerBackgroundColor");
        titlePokemon.innerText=data.name;
        
      })
      .catch(function(error) {
        // Handle any error that occurred
        console.error('error in testPokemonAPI()', error)
      });
}