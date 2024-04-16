import { getPlayerScore } from "../utils";
import { useState } from "react";

export default function useSetPontuation(gameTries, time, homeSettings) {
  const [playerList, setPlayerList] = useState([]);

  function setNewPlayer() {
    const { name, dificult } = homeSettings;

    let playerScore = getPlayerScore(gameTries, time, dificult);
    setPlayerList([...playerList, { name, score: playerScore }]);
  }

  return [playerList, setNewPlayer];
}
