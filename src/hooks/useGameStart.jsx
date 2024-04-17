import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameSoundtrack from "../assets/sounds/GameSoundtrack.mp3";

export default function useGameStart(startTimer, resetGame, cardCount) {
  const navigate = useNavigate();
  const GameMusic = new Audio(GameSoundtrack);
  GameMusic.loop = true;

  useEffect(() => {
    startTimer();
    GameMusic.play();

    if (cardCount <= 0 || cardCount === undefined) {
      GameMusic.pause();
      navigate("/");
    }

    return () => {
      GameMusic.pause();
      resetGame();
    };
  }, []);
}
