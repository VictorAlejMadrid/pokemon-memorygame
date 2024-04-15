import { useEffect, useState } from "react";

export default function useHandleCard(checkCards, card, equal) {
  const [clicked, setClicked] = useState(false);
  const [clickable, setClickable] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setClickable(true);
    if (equal == true) {
      setClickable(false);

      new Promise(() => {
        setTimeout(() => {
          setVisibility();
        }, 750);
      });
    } else if (equal == false) {
      setClickable(false);

      new Promise(() => {
        setTimeout(() => {
          setClicked(false);
        }, 1500);
      });
    }
  }, [equal]);

  function setVisibility() {
    if (clicked == true) {
      setVisible(false);
      setClicked(false);
      setClickable(false);
    }
  }

  function handleClick() {
    setClicked(true);
    checkCards(card);
  }

  return [clicked, clickable, visible, handleClick];
}
