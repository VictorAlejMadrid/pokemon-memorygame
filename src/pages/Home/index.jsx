import { Link } from "react-router-dom";

import ButtonContainer from "../../components/ButtonContainer";
import SelectCardCount from "../../components/SelectCardCount";
import InputText from "../../components/InputText/InputText";
import { Page, Container, Button, BackgroundAnimation } from "./styles";

import BackgroundVideo from "../../assets/Videos/PikachuRunningVideo.mp4";

export default function Home(props) {
  // very very clean muito lindo gostei bastante dos custom hooks lindo lindo :)
  const { homeSettings, setHomeSettings, setNewName } = props;
  const { dificult, options } = homeSettings;

  const dificults = ["Fácil", "Médio", "Díficil"];

  return (
    <>
      <BackgroundAnimation autoPlay loop muted className="bg-vid">
        <source src={BackgroundVideo} type="video/mp4" />
      </BackgroundAnimation>
      <Page>
        <Container>
          <h1>Bem-vindo ao Jogo da Memória do Pokémon!</h1>
          <InputText setNewName={setNewName} />

          <h2>Configurações de dificuldade:</h2>

          <SelectCardCount options={options} change={setHomeSettings} />
          <ButtonContainer array={dificults} special={dificult} click={setHomeSettings} />

          <Link to="/game">
            <Button>Iniciar Jogo!</Button>
          </Link>
        </Container>
      </Page>
    </>
  );
}
