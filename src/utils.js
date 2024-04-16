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
  const { tries, right } = gameTries;

  let maxTimeScore = 10000;
  let maxTriesScore = 10000;

  let timeMultiplier = 0;
  let triesMultiplier = 0;

  switch (dificult) {
    case "Fácil":
      maxTimeScore = 2000;
      maxTriesScore = 2500;
      timeMultiplier = 75 - (right * 2);
      triesMultiplier = 200 - (right * 10);
      break;
    case "Médio":
      maxTimeScore = 4000;
      maxTriesScore = 7500;
      timeMultiplier = 50 - (right * 0.75);
      triesMultiplier = 100 - (right * 3);
      break;
    case "Díficil":
      maxTimeScore = 10000;
      maxTriesScore = 10000;
      timeMultiplier = 40 - (right * 0.75);
      triesMultiplier = 50 - (right * 1);
      break;
    default:
      break;
  }
  let timeInSeconds = Number(minutes) * 60 + Number(seconds);
  let timeScore = maxTimeScore - timeInSeconds * timeMultiplier; 

  let triesScore = maxTriesScore - tries * triesMultiplier;

  let totalScore = Math.round(timeScore + triesScore);
 
  return totalScore > 0 ? totalScore : 0;
}
