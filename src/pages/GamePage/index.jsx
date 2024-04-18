import { Section } from "./styles";

import CardContainer from "../../components/CardContainer";
import Timer from "../../components/Timer";
import FinishModal from "../../components/FinishModal";
import VideoAsBackground from "../../components/VideoAsBackground";

import useCardsArray from "../../hooks/useCardsArray";
import useGameStart from "../../hooks/useGameStart";
import useCheckGameStatus from "../../hooks/useCheckGameStatus";

import BackgroundVideo from "../../assets/Videos/PokemonSeaVideo.mp4"; 

export default function GamePage(props) {
  const {
    homeSettings,
    time,
    startTimer,
    equal,
    checkCards,
    resetGame,
    gameEnded,
    setNewPlayer,
    gameTries,
  } = props;
  const { cardCount } = homeSettings;

  const cards = useCardsArray(cardCount);
  useGameStart(startTimer, resetGame, cardCount);
  const finishVisibility = useCheckGameStatus(gameEnded, setNewPlayer);

  return (
    <>
    <VideoAsBackground video={BackgroundVideo} />
      <Section>
        <Timer time={time} />
        <CardContainer equal={equal} checkCards={checkCards} cards={cards} cardCount={cardCount} />
        {finishVisibility ? (
          <FinishModal homeSettings={homeSettings} gameTries={gameTries} />
        ) : null}
      </Section>
    </>
  );
}
