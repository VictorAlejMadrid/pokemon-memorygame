import { CardWrapper } from "./styles";

export default function Card(props) {
  const { card, cardCount } = props;

  return <CardWrapper $pokemon={card} $cardCount={cardCount} />;
}
