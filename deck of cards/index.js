const baseURL = "https://deckofcardsapi.com/api/deck";
let deckId;

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
