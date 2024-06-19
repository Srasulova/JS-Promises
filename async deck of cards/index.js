const baseURL = "https://deckofcardsapi.com/api/deck";

async function getNewDeck() {
  return await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
}

// Returns: { cardValue: string, cardSuit: string, remainingCards: int }
async function drawFirstCard(deck) {
  const newCard = await axios.get(
    `${baseURL}/${deck.data.deck_id}/draw/?count=1`
  );

  return {
    cardValue: newCard.data.cards[0].value,
    cardSuit: newCard.data.cards[0].suit,
    remaining: newCard.data.remaining,
  };
}

try {
  let newDeck = await getNewDeck();

  while (true) {
    console.log("Press enter to draw a card...");
    let drawFirstCardResult = await drawFirstCard(newDeck);
    let { cardValue, cardSuit, remainingCards } = drawFirstCardResult;

    // Exit game?
    if (remainingCards <= 0) break;

    console.log(`You drew ${cardValue} ${cardSuit}`);
  }
} catch (err) {
  console.error(err);
}
