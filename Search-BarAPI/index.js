async function fetchData() {
    try {
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) throw new Error("Could not fetch resource");

        const data = await response.json();
        const images = ['img-1', 'img-2', 'img-3', 'img-4'];
        const cards = ['card1', 'card2', 'card3', 'card4'];
        const names = ['name1', 'name2', 'name3', 'name4'];

        images.forEach((id, index) => {
            document.getElementById(id).src = [
                data.sprites.front_default, 
                data.sprites.back_default, 
                data.sprites.front_shiny, 
                data.sprites.back_shiny
            ][index];
        });

        cards.forEach(card => document.querySelector(`.${card}`).classList.add('show'));
        names.forEach(name => document.querySelector(`.${name}`).textContent = pokemonName);
    } catch (error) {
        console.error(error);
    }
}

document.querySelector('input').addEventListener('keypress', event => {
    if (event.key === 'Enter') fetchData();
});