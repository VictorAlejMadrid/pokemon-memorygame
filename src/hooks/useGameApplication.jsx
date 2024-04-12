import { useRef } from "react";
import useCardsArray from "./useCardsArray";

export default function useGameAplication(cardCount) {
  const clicked = useRef(null);
  const cards = useCardsArray(cardCount);

  function handleClick(card) {
    if (clicked.current === null) {
      clicked.current = card;
    } else {
      if (clicked.current.id === card.id && clicked.current.index !== card.index) {
        console.log("eba");
      } else {
        console.log("errou");
      }
      clicked.current = null;
    }
  }

  return [cards, handleClick];
}
