import { useEffect, useState } from "react";
import { pokemons } from "./pokemons";
import { randomize } from "../utils";

export default function useCardsArray(cardCount) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setToShowCards(cardCount);
  }, []);

  function setToShowCards(quantity) {
    let newCards = [];
    let allCards = [...pokemons];

    for (let i = 0; i < quantity; i++) {
      //Get random pokemons from the pokemons list
      let index = Math.floor(Math.random() * allCards.length);
      newCards.push(allCards[index]);
      allCards.splice(index, 1);
    }

    const array = [...newCards, ...newCards].map((card, index) => {
      return {
        ...card,
        index: index + 1
      };
    });
    
    setCards(randomize(array));
  }

  return cards;
}
