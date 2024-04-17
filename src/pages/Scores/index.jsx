import { Link } from "react-router-dom";

import { Container, Section } from "./styles";
import ScoresContainer from "../../components/ScoresContainer";
import MainButton from "../../components/MainButton";

import BackgroundVideo from "../../assets/Videos/WaterfallPokemonVideo.mp4";
import VideoAsBackground from "../../components/VideoAsBackground";

export default function Scores(props) {
  const { playerList } = props;

  return (
    <>
      <VideoAsBackground video={BackgroundVideo} />
      <Section>
        <Container>
          <h1>Tabela de Scores</h1>
          <ScoresContainer playerList={playerList} />
          <Link to="/">
            <MainButton>Voltar à página inicial</MainButton>
          </Link>
        </Container>
      </Section>
    </>
  );
}
