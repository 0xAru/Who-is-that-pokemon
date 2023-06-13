let currentPoke = null;
let container = document.querySelector(".container");
let next = document.querySelector('.next');
let para = document.querySelector(".para");

function random() {
    return Math.floor(Math.random() * 150) + 1;
}

function randomPoke() {
    let rand = random();
    container.innerHTML = "";
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${rand}`)
        .then(data => {
            data.json()
                .then(poke => {
                    currentPoke = poke;
                    let img = document.createElement("img");
                    img.classList.add("pokeWidth")
                    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rand}.png`;
                    container.appendChild(img);
                })
        })
}
randomPoke();

answer = document.querySelector("#answer");
answer.addEventListener("click", () => {
    pokemon();
})

async function pokemon() {
    let userAnswer = document.querySelector("#guess").value;
    
    if (userAnswer.toLowerCase() == currentPoke.name.toLowerCase()){
        para.innerHTML = "C'est ça, bien joué !";
    } else {
        para.innerHTML = "Hahaha tu t'es trompé !";
    }
    next.style.display = "block";
}

next.addEventListener("click", () => {
    para.innerHTML = "";
    next.style.display = "none";
    randomPoke();
})