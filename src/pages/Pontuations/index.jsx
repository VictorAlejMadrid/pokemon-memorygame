import { Link } from "react-router-dom";
import { Button } from "../Home/styles";
import { Container, ListContainer, ListLabels, Section } from "./styles";

export default function PontuationPage(props) {
  const { playerList } = props;
  
  return (
    <Section>
      <Container>
        <h1>Tabela de pontuações</h1>
        <ListContainer>
          <ListLabels>
            <h3>Nome</h3>
            <span>Pontuação</span>
          </ListLabels>
          {playerList.map((player, index) => {
            return (
              <li key={index}>
                <h3>{player.name}</h3>
                <span>{player.score}</span>
              </li>
            );
          })}
        </ListContainer>
        <Link to="/">
          <Button>Voltar à página inicial</Button>
        </Link>
      </Container>
    </Section>
  );
}
