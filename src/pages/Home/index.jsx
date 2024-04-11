import ButtonContainer from "../../components/ButtonContainer";
import SelectCardCount from "../../components/SelectCardCount";
import { Page, Container } from "./styles";

export default function Home(props) {
  // very very clean muito lindo gostei bastante dos custom hooks lindo lindo :)
  const { setChangePage, homeSettings, setHomeSettings } = props;
  const { dificult, options } = homeSettings;

  const dificults = ["Fácil", "Médio", "Díficil"];

  return (
    <Page>
      <Container>
        <h1>Bem-vindo ao Jogo da Memória do Pokémon!</h1>
        <h2>Configurações de dificuldade:</h2>

        <SelectCardCount options={options} change={setHomeSettings} />
        <ButtonContainer array={dificults} special={dificult} click={setHomeSettings} />

        <button onClick={() => setChangePage(true)}>Iniciar Jogo!</button>
      </Container>
    </Page>
  );
}
