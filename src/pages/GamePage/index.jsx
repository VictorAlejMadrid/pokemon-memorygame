import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import { Section } from "./styles";

import useCardsArray from "../../hooks/useCardsArray";

export default function GamePage(props) {
  const { homeSettings } = props;
  const {dificult, cardCount} = homeSettings;

  const cards = useCardsArray(cardCount);

  return (
    <Section>
      <Header dificult={dificult} />
      <CardContainer cards={cards} cardCount={cardCount} />
    </Section>
  );
}
