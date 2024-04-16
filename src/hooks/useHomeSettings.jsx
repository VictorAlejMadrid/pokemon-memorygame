import { useEffect, useState } from "react";
import { setMaxCards } from "../utils";

export function useHomeSettings() {
  const [dificult, setDificult] = useState("Fácil");
  const [options, setOptions] = useState([]);
  const [cardCount, setCardCount] = useState();
  const [name, setName] = useState('');

  let homeSettings = {
    name,
    dificult,
    options,
    cardCount,
  };

  useEffect(() => {
    setOptions(setMaxCards(dificult));
  }, [dificult]);

  function setHomeSettings(value) {
    if (Array.isArray(value)) {
      setOptions(value);
      homeSettings.options = options;
    } else if (Number.isInteger(value)) {
      setCardCount(value);
      homeSettings.cardCount = cardCount;
    } else if (typeof value == "string") {
      setDificult(value);
      homeSettings.dificult = dificult;
    }
  }

  function setNewName(value) {
    setName(value.trimStart());
  }

  return [homeSettings, setHomeSettings, setNewName];
}
