import { CardFrontSide, CardBackSide, CardWrapper } from "./styles";

import useHandleCard from "../../hooks/useHandleCard";
import useImage from "../../hooks/useImage";

import back from "../../assets/cards/back.png"

export default function Card(props) {
  const { card, cardCount, checkCards, equal } = props;
  const [clicked, clickable, visible, handleClick] = useHandleCard(checkCards, card, equal);
  const image = useImage(card.name);

  return (
    <CardWrapper $visible={visible} $clickable={clickable} $cardCount={cardCount}>
      <CardFrontSide onClick={() => handleClick()} $backImage={back} $clicked={clicked} />
      <CardBackSide $pokemon={image} $clicked={clicked} />
    </CardWrapper>
  );
}
