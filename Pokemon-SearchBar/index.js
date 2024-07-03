

async function fecthData(){

    try{
        const pokemon = document.getElementById("pokemonName").value.toLowerCase();

       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
       if(!response.ok){
        throw new Error("Could no fetch the api data:3")
       }

       const data = await response.json();
       console.log(data)
       const pokemonImg = data.sprites.front_default;
       const imgElement = document.getElementById('pokemon');

       imgElement.src = pokemonImg;
       imgElement.style.display = "block";
    }

    catch(error){
        console.error(error)
    }
}