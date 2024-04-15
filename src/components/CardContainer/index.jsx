import { BackContainer, Container } from "./styles";

import Card from "../Card";

export default function CardContainer(props) {
  const { cards, cardCount, checkCards, equal } = props;

  return (
    <BackContainer>
      <Container>
        {cards.map((card, index) => (
          <Card
            checkCards={checkCards}
            equal={equal}
            key={index}
            card={card}
            cardCount={cardCount}
          />
        ))}
      </Container>
    </BackContainer>
  );
}
