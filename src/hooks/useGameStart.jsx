import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useGameStart(startTimer, resetGame, cardCount) {
    const navigate = useNavigate();

  useEffect(() => {
    startTimer();

    if(cardCount <= 0 || cardCount === undefined) {
        navigate("/");
    }

    return () => {
      resetGame();
    };
  }, []);
}
