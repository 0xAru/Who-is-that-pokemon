let currentPoke = null;
let container = document.querySelector(".container");

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
    let container = document.querySelector(".container");
    let userAnswer = document.querySelector("#guess").value;
    let para = document.createElement("p");
    
    if (userAnswer.toLowerCase() == currentPoke.name.toLowerCase()){
        para.innerHTML = "C'est ça, bien joué !";
        next = document.createElement("button");
        next.innerHTML = "Suivant";
    } else {
        para.innerHTML = "Hahaha tu t'es trompé !";
        next = document.createElement("button");
        next.innerHTML = "Suivant";
    }

    container.appendChild(para);
    container.appendChild(next);
    console.log(currentPoke);

    
    next.addEventListener("click", () => {
        randomPoke();
    })
}