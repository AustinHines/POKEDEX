const pokeContainer = document.querySelector(`#container`);
const numOfPokemon = 150;

//Creates a new card/div and adds new card to webpage/document inside of the "container" div
function createPokeCard(pokemon){
 const pokeCard = document.createElement(`div`);
 pokeCard.classList.add(`pokemon`);
 pokeContainer.append(pokeCard);

 pokeCard.innerHTML = `
 <div class="img-container">
 <img />
 </div>
 <h3 class="name">Pokemon Name</h3>
 `;
}
createPokeCard();