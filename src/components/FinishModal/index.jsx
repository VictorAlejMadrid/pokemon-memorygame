import { Link } from "react-router-dom";

import { Container, Img, Modal } from "./styles";
import MainButton from "../MainButton";

import Trophy from "../../assets/images/TrophyIcon.png";

export default function FinishModal(props) {
  const { homeSettings, gameTries } = props;
  const { tries, right } = gameTries;
  const { name } = homeSettings;

  return (
    <Modal>
      <Container>
        <h1>Parabéns, {name}! Você concluiu o jogo em {tries + right} tentativas!</h1>
        <Img src={Trophy}/>
        <Link to='/scores'><MainButton>Ver minha pontuação!</MainButton></Link>
      </Container>
    </Modal>
  );
}
