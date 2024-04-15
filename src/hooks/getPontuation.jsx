export default function useGetPontuation(gameTries, minutes, seconds, dificult, name) {
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
  
  let timePontuation = (minutes * 60 + seconds) * timeMultiplier * -1;
  let triesPontuation = gameTries.tries * cardMultiplier * -1;
  let cardPontuation = gameTries.right * cardMultiplier;

  let totalPontuation = Math.round(timePontuation + triesPontuation + cardPontuation);

  return [{ name, totalPontuation }];
}
