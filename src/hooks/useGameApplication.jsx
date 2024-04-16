import { useRef, useState } from "react";

export default function useGameAplication(cardCount, stopTimer) {
  const prevCard = useRef(null);
  const [equal, setEqual] = useState(null);
  const [gameTries, setGameTries] = useState({ tries: 0, right: 0 });
  const [gameEnded, setGameEnded] = useState(false);

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

      // See if game ended
      if (cardCount - 1 == gameTries.right) {
        endGame();
      }
    }
  }

  function resetGame() {
    prevCard.current = null;
    setEqual(null);
    setGameTries({ tries: 0, right: 0 });
    setGameEnded(false);
    stopTimer();
  }

  function endGame() {
    setGameEnded(true);
  }

  return [equal, gameTries, gameEnded, checkCards, resetGame];
}
