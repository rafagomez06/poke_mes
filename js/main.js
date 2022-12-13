let lista = document.getElementById("listarPokemon")


const $mes = document.getElementById('mes');

$mes.addEventListener('change', () => {
    console.log('Entro');
    listarPokemones()
});

function consultarPokemon(id,num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
        console.log(response)
        response.json()
        .then(function (pokemon){
            crearPokemon(pokemon,num)
        })
    })
}


function listarPokemones(){
    let primerId = Math.round(Math.random()*150)    
    consultarPokemon(primerId,1)    
}


function crearPokemon(pokemon,num){
    //Convertir Data de Json a HTML

   let item=lista.querySelector(`#poke-${num}`)

   let imagen=item.getElementsByTagName("img")[0]
   imagen.setAttribute("src",pokemon.sprites.front_shiny)

   let nombre=item.getElementsByTagName("p")[0]
   nombre.textContent=pokemon.name;   
}

