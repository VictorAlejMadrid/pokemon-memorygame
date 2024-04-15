import { useRef, useState } from "react";

export default function useGameAplication() {
  const prevCard = useRef(null);
  const [equal, setEqual] = useState(null);

  function checkCards(card) {
    if (prevCard.current == null) {
      prevCard.current = card;
    } else {
      if (prevCard.current.id === card.id && prevCard.current.index !== card.index) {
        setEqual(true);
        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 1500);
        });
      } else {
        setEqual(false);
        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 1500);
        });
      }
      prevCard.current = null;
    }
  }

  return [equal, checkCards];
}
