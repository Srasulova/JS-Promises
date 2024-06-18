const baseURL = "https://deckofcardsapi.com/api/deck";
let deckId;
let remaining;

axios
  .get(`${baseURL}/new/shuffle/?deck_count=1`)
  .then((response) => {
    deckId = response.data.deck_id;
    console.log(deckId);

    return axios.get(`${baseURL}/${deckId}/draw/?count=1`);
  })
  .then((res) => {
    let firstCard = res.data.cards[0];
    console.log(firstCard.value, firstCard.suit);
    return axios.get(`${baseURL}/${deckId}/draw/?count=1`);
  })
  .then((res) => {
    let nextCard = res.data.cards[0];
    console.log(nextCard.value, nextCard.suit);
  })
  .catch((err) => console.error(err));

//   Task 3

const btn = document.getElementById("btn");

const newDeck = () => {
  axios
    .get(`${baseURL}/new/shuffle/?deck_count=1`)
    .then((response) => {
      deckId = response.data.deck_id;
      remaining = response.data.remaining;
      console.log(deckId, remaining);
    })
    .catch((err) => console.error(err));
};

const drawCard = () => {
  axios.get(`${baseURL}/${deckId}/draw/?count=1`).then((res) => {
    let card = res.data.cards[0];
    console.log(card.value, card.suit);
    const cardImg = document.getElementById("card");
    cardImg.src = card.image;
    remaining = res.data.remaining;
    console.log(remaining);
    if (remaining == 0) {
      btn.remove();
      const cardsDiv = document.getElementById("cards");
      cardsDiv.innerHTML = "No more cards remainig in the deck";
    }
  });
};

btn.addEventListener("click", drawCard);

window.onload = (event) => {
  event.preventDefault();
  newDeck();
  if (remaining == 0) {
    btn.remove();
  }
};
