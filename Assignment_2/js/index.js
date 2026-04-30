function toggleDropdown() {
    let menu = document.getElementById("dropdownContent");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

let pokemons = [
    {
        name: "Bulbasaur",
        img: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
        text: "Grass-type Pokémon: Calm and reliable."
    },
    {
        name: "Charmander",
        img: "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
        text: "Fire-type Pokémon: Strong and brave."
    },
    {
        name: "Squirtle",
        img: "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
        text: "Water-type Pokémon: Cool and strategic."
    },
    {
        name: "Pikachu",
        img: "https://img.pokemondb.net/sprites/black-white/normal/pikachu.png",
        text: "Electric-type Pokémon: Fast and energetic."
    },
    {
        name: "Eevee",
        img: "https://img.pokemondb.net/sprites/black-white/normal/eevee.png",
        text: "Normal-type Pokémon: Can evolve into many forms."
    }
];

let index = 0;

function showPokemon(i) {
    document.getElementById("pokeImage").src = pokemons[i].img;
    document.getElementById("pokeName").innerText = pokemons[i].name;
    document.getElementById("pokeText").innerText = pokemons[i].text;
}

function choosePokemon(i) {
    index = i;
    showPokemon(index);

  
    document.getElementById("dropdownContent").style.display = "none";
}

function chooseStarter() {
    alert("You chose " + pokemons[index].name + "! 🎉");
}