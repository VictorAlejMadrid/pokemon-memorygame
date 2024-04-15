import { Section } from "./styles";

import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import Timer from "../../components/Timer";

import useGameAplication from "../../hooks/useGameApplication";
import useCardsArray from "../../hooks/useCardsArray";

export default function GamePage(props) {
  const { homeSettings } = props;
  const { cardCount, dificult } = homeSettings;

  const cards = useCardsArray(cardCount);
  const [equal, checkCards] = useGameAplication();

  return (
    <Section>
      <Header dificult={dificult} />
      <Timer />
      <CardContainer
        equal={equal}
        checkCards={checkCards}
        cards={cards}
        cardCount={cardCount}
      />
    </Section>
  );
}
