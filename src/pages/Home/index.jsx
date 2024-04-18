import { Link } from "react-router-dom";

import ButtonContainer from "../../components/ButtonContainer";
import SelectCardCount from "../../components/SelectCardCount";
import InputText from "../../components/InputText/InputText";
import MainButton from "../../components/MainButton";
import { Page, Container, Img } from "./styles";

import BackgroundVideo from "../../assets/Videos/PikachuRunningVideo.mp4";
import VideoAsBackground from "../../components/VideoAsBackground";
import Trophy from "../../assets/images/TrophyIcon.png";

export default function Home(props) {
  // very very clean muito lindo gostei bastante dos custom hooks lindo lindo :)
  const { homeSettings, setHomeSettings, setNewName } = props;
  const { dificult, options } = homeSettings;

  const dificults = ["Fácil", "Médio", "Díficil"];

  return (
    <>
      <VideoAsBackground video={BackgroundVideo} />
      <Page>
        <Container>
          <h1>Bem-vindo ao Jogo da Memória do Pokémon!</h1>
          <InputText setNewName={setNewName} />

          <h2>Configurações de dificuldade:</h2>

          <SelectCardCount options={options} change={setHomeSettings} />
          <ButtonContainer array={dificults} special={dificult} click={setHomeSettings} />

          <Link to="/game">
            <MainButton>Iniciar Jogo!</MainButton>
          </Link>
        </Container>
        <Link to="/scores">
          <MainButton>
            <Img src={Trophy} alt="Imagem de um troféu" />
          </MainButton>
        </Link>
      </Page>
    </>
  );
}
