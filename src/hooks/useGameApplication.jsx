import { useRef, useState } from "react";
import CorrectAudio from '../assets/sounds/CorrectSound.mp3';
import WrongAudio from '../assets/sounds/WrongSound.mp3';
import VictoryAudio from '../assets/sounds/VictorySound.mp3';


export default function useGameAplication(cardCount, stopTimer) {
  const prevCard = useRef(null);
  const [equal, setEqual] = useState(null);
  const [gameTries, setGameTries] = useState({ tries: 0, right: 0 });
  const [gameEnded, setGameEnded] = useState(false);

  const CorrectSound = new Audio(CorrectAudio);
  const WrongSound = new Audio(WrongAudio);
  const VictorySound = new Audio(VictoryAudio);

  function checkCards(card) {
    if (prevCard.current == null) {
      prevCard.current = card;
    } else {
      if (prevCard.current.id === card.id && prevCard.current.index !== card.index) {
        setEqual(true);
        setGameTries({ ...gameTries, right: gameTries.right + 1 });
        CorrectSound.play();

        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 750);
        });
      } else {
        setEqual(false);
        setGameTries({ ...gameTries, tries: gameTries.tries + 1 });
        WrongSound.play();

        new Promise(() => {
          setTimeout(() => {
            setEqual(null);
          }, 1500);
        });
      }

      prevCard.current = null;

      // Check if game ended
      if (cardCount - 1 == gameTries.right) {
        VictorySound.play();
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
