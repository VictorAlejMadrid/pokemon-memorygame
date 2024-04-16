import { Section } from "./styles";

import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import Timer from "../../components/Timer";

import useCardsArray from "../../hooks/useCardsArray";
import useGameStart from "../../hooks/useGameStart";
import FinishModal from "../../components/FinishModal";
import useCheckGameStatus from "../../hooks/useCheckGameStatus";

export default function GamePage(props) {
  const { homeSettings, time, startTimer, equal, checkCards, resetGame, gameEnded, setNewPlayer, gameTries } = props;
  const { cardCount, dificult } = homeSettings;

  const cards = useCardsArray(cardCount);
  useGameStart(startTimer, resetGame, cardCount );
  const finishVisibility = useCheckGameStatus(gameEnded, setNewPlayer);

  return (
    <Section>
      <Header dificult={dificult} />
      <Timer time={time} />
      <CardContainer equal={equal} checkCards={checkCards} cards={cards} cardCount={cardCount} />
      {finishVisibility ? <FinishModal homeSettings={homeSettings} gameTries={gameTries} /> : null}
    </Section>
  );
}
