
async function fetchData(){

    try{

        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const img1 = document.getElementById("img-1");
        const img2 = document.getElementById("img-2");
        const img3 = document.getElementById("img-3");
        const img4 = document.getElementById("img-4");
        const img5 = document.getElementById("img-5");
  
        const card1 = document.querySelector('.card1');
        const card2 = document.querySelector('.card2');
        const card3 = document.querySelector('.card3');
        const card4 = document.querySelector('.card4');
        const name1 = document.querySelector('.name1');
        const name2 = document.querySelector('.name2');
        const name3 = document.querySelector('.name3');
        const name4 = document.querySelector('.name4');

        name1.textContent = `${pokemonName}`;
        name2.textContent = `${pokemonName}`;
        name3.textContent = `${pokemonName}`;
        name4.textContent = `${pokemonName}`;

        card1.classList.add('show');
        card1.classList.add('hide');
        card2.classList.add('show');
        card2.classList.add('hide');
        card3.classList.add('show');
        card3.classList.add('hide');
        card4.classList.add('show');
        card4.classList.add('hide');
 
        img1.src = data.sprites.front_default;
        img2.src = data.sprites.back_default;
        img3.src = data.sprites.front_shiny;
        img4.src = data.sprites.back_shiny;
       
    }
    catch(error){
        console.error(error);
    }
}
const input = document.querySelector('input');
input.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        fetchData();
    }
});