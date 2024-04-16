import { Link } from "react-router-dom";

import { Button } from "../Home/styles";
import { Container, Section } from "./styles";
import ScoresContainer from "../../components/ScoresContainer";

export default function Scores(props) {
  const { playerList } = props;

  return (
    <Section>
      <Container>
        <h1>Tabela de pontuações</h1>
        <ScoresContainer playerList={playerList} />
        <Link to="/">
          <Button>Voltar à página inicial</Button>
        </Link>
      </Container>
    </Section>
  );
}
