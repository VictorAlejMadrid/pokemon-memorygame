import PontuationPage from "./pages/Pontuations";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";

import { HashRouter, Route, Routes } from "react-router-dom";
import { useHomeSettings } from "./hooks/useHomeSettings";
import useTimer from "./hooks/useTimer";
import useGameAplication from "./hooks/useGameApplication";
import useSetPontuation from "./hooks/useSetPontuation";

export default function AppRoutes() {
  const [homeSettings, setHomeSettings, setNewName] = useHomeSettings();
  const [time, stopTimer, startTimer] = useTimer();
  const [equal, gameTries, gameEnded, checkCards, resetGame] = useGameAplication(
    homeSettings.cardCount,
    stopTimer
  );
  const [playerList, setNewPlayer] = useSetPontuation(gameTries, time, homeSettings);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setHomeSettings={setHomeSettings}
              homeSettings={homeSettings}
              setNewName={setNewName}
            />
          }
        />
        <Route
          path="game"
          element={
            <GamePage
              homeSettings={homeSettings}
              checkCards={checkCards}
              equal={equal}
              time={time}
              startTimer={startTimer}
              stopTimer={stopTimer}
              resetGame={resetGame}
              setNewPlayer={setNewPlayer}
              gameEnded={gameEnded}
              gameTries={gameTries}
            />
          }
        />
        <Route path="scores" element={<PontuationPage playerList={playerList} />} />
        <Route path="*" element={<div>erro</div>} />
      </Routes>
    </HashRouter>
  );
}
