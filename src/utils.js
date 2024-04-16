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

export function getPlayerScore(gameTries, time, dificult) {
  const [minutes, seconds] = time;

  let timeMultiplier = 0;
  let cardMultiplier = 0;
  let triesMultiplier = 0;

  switch (dificult) {
    case "Fácil":
      timeMultiplier = 0.5;
      cardMultiplier = 1;
      triesMultiplier = 0.5;
      break;
    case "Médio":
      timeMultiplier = 0.7;
      cardMultiplier = 1.5;
      triesMultiplier = 0.7;
      break;
    case "Díficil":
      timeMultiplier = 0.9;
      cardMultiplier = 2;
      triesMultiplier = 0.9;
      break;
    default:
      break;
  }

  let timePontuation = (minutes * 60 + seconds) * timeMultiplier;
  let triesPontuation = gameTries.tries * cardMultiplier;
  let cardPontuation = gameTries.right * cardMultiplier;

  let totalScore = Math.round(timePontuation * -1 + triesPontuation * -1 + cardPontuation);
  console.log(totalScore);
  return totalScore;
}
