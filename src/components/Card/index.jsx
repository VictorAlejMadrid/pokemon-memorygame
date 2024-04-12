import { CardFrontSide, CardBackSide, CardWrapper } from "./styles";

import { useState } from "react";

export default function Card(props) {
  const { card, cardCount, handleClick } = props;
  const [clicked, setClicked] = useState(false);

  function allTogether() {
    setClicked(true);
    handleClick(card);
  }

  return (
    <CardWrapper $cardCount={cardCount}>
      <CardFrontSide
        onClick={() => allTogether()}
        $cardCount={cardCount}
        $clicked={clicked}
      />
      <CardBackSide onClick={() => allTogether()} $pokemon={card.name} $cardCount={cardCount} $clicked={clicked} />
    </CardWrapper>
  );
}
