import useHandleCard from "../../hooks/useHandleCard";
import { CardFrontSide, CardBackSide, CardWrapper } from "./styles";

export default function Card(props) {
  const { card, cardCount, checkCards, equal } = props;
  const [clicked, clickable, handleClick] = useHandleCard(checkCards, card, equal);

  return (
    <CardWrapper $clickable={clickable} $cardCount={cardCount}>
      <CardFrontSide onClick={() => handleClick()} $cardCount={cardCount} $clicked={clicked} />
      <CardBackSide $pokemon={card.name} $cardCount={cardCount} $clicked={clicked} />
    </CardWrapper>
  );
}
