import { BackContainer, Container } from "./styles";

import Card from "../Card";

export default function CardContainer(props) {
  const { cards, cardCount, handleClick } = props;

  return (
    <BackContainer>
      <Container>
        {cards.map((card, index) => (
          <Card handleClick={handleClick} key={index} card={card} cardCount={cardCount} />
        ))}
      </Container>
    </BackContainer>
  );
}
