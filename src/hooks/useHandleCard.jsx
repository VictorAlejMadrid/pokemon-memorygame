import { useEffect, useState } from "react";

export default function useHandleCard(checkCards, card, equal) {
  const [clicked, setClicked] = useState(false);
  const [clickable, setClickable] = useState(true);

  useEffect(() => {
    setClickable(true);
    if (equal == true) {
      setClickable(false);
    } else if (equal == false) {
      setClickable(false);
      
      new Promise(() => {
        setTimeout(() => {
          setClicked(false);
        }, 1500);
      });
    }
  }, [equal]);

  function handleClick() {
    setClicked(true);
    checkCards(card);
  }

  return [clicked, clickable, handleClick];
}
