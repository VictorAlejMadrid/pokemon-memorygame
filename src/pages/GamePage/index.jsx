import { Section } from "./styles";

import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import Timer from "../../components/Timer";

import useGameAplication from "../../hooks/useGameApplication";

export default function GamePage(props) {
  const { homeSettings } = props;
  const { cardCount, dificult } = homeSettings;

  const [cards, handleClick] = useGameAplication(cardCount);

  return (
    <Section>
      <Header dificult={dificult} />
      <Timer />
      <CardContainer handleClick={handleClick} cards={cards} cardCount={cardCount} />
    </Section>
  );
}
