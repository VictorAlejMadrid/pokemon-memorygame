export function setMaxCards(dificult) {
  let minCards = 4;
  let maxCards = 31;
  let newOptions = [""];

  switch (dificult) {
    case "Fácil":
      maxCards = 10;
      break;
    case "Médio":
      maxCards = 20;
      minCards = 10;
      break;
    case "Díficil":
      maxCards = 31;
      minCards = 20;
      break;
    default:
      break;
  }

  for (let i = minCards; i <= maxCards; i++) {
    newOptions.push(i);
  }

  return newOptions;
}

export function randomize(arr) {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * newArr.length);
    [newArr[randomIndex], newArr[i]] = [newArr[i], newArr[randomIndex]];
  }

  return newArr;
}
