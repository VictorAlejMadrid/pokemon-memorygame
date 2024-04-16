import { Link } from "react-router-dom";
import { Container, Modal } from "./styles";
import { Button } from "../../pages/Home/styles";

export default function FinishModal(props) {
  const { homeSettings, gameTries } = props;
  const { tries, right } = gameTries;
  const { name } = homeSettings;

  return (
    <Modal>
      <Container>
        <h1>Parabéns! {name} Você concluiu o jogo em {tries + right} tentativas!</h1>
        <Link to='/scores'><Button>Ver minha pontuação!</Button></Link>
      </Container>
    </Modal>
  );
}
