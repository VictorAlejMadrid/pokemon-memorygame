import { Section } from "./styles";

import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import Timer from "../../components/Timer";

import useGameAplication from "../../hooks/useGameApplication";
import useCardsArray from "../../hooks/useCardsArray";
import useTimer from "../../hooks/useTimer";
import { useState } from "react";
import PontuationPage from "../Pontuations";

export default function GamePage(props) {
  const { homeSettings } = props;
  const { cardCount, dificult } = homeSettings;
  const [temporary, setTemporary] = useState(false);

  const cards = useCardsArray(cardCount);
  const [[minutes, seconds], stopTimer] = useTimer();
  const [equal, gameTries, checkCards] = useGameAplication(cardCount);
  const players = [{name: 'victor', pontuation: 10000}, {name: 'lucas', pontuation: 5000}];

  return (
    <>
      {temporary ? (
        <Section>
          <Header dificult={dificult} />
          <Timer minutes={minutes} seconds={seconds} />
          <CardContainer
            equal={equal}
            checkCards={checkCards}
            cards={cards}
            cardCount={cardCount}
          />
        </Section>
      ) : (
        <PontuationPage players={players}/>
      )}
    </>
  );
}
