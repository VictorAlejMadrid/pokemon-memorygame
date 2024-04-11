import Card from "../Card";
import { BackContainer, Container } from "./styles";

export default function CardContainer(props) {
  const { cards, cardCount } = props;

  return (
    <BackContainer>
      <Container>
        {cards.map((card, index) => (
          <Card key={index} card={card} cardCount={cardCount} />
        ))}
      </Container>
    </BackContainer>
  );
}
