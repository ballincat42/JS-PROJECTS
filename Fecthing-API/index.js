FetchData()
async function FetchData(){

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if(!response.ok){
            throw new Error('Could not fetch data:3');
        } 
        const data = await response.json();
        console.log(data);
        const imgEl = document.querySelector('img');
        imgEl.src = data.sprites.front_default;
    }
    catch(error){
        console.error(error);
    }
}