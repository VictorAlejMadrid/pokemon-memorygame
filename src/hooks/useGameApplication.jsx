import { useRef, useState } from "react";

export default function useGameAplication(cardCount) {
  const prevCard = useRef(null);
  const [equal, setEqual] = useState(null);
  const [gameTries, setGameTries] = useState({ tries: 0, right: 0 });

  function checkCards(card) {
    if (prevCard.current == null) {
      prevCard.current = card;
    } else {
      if (prevCard.current.id === card.id && prevCard.current.index !== card.index) {
        setEqual(true);
        setGameTries({ ...gameTries, right: gameTries.right + 1 });

        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 750);
        });
      } else {
        setEqual(false);
        setGameTries({ ...gameTries, tries: gameTries.tries + 1 });

        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 1500);
        });
      }

      prevCard.current = null;
      if (cardCount - 1 == gameTries.right) {
        console.log("acabo");
      }
    }
  }

  return [equal, gameTries, checkCards];
}
