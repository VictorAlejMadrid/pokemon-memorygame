import { Button } from "../Home/styles";
import { Container, ListContainer, ListLabels, Section } from "./styles";

export default function PontuationPage(props) {
    const { players } = props;
  
  return (
    <Section>
      <Container>
        <h1>Tabela de pontuações</h1>
        <ListContainer>
          <ListLabels>
            <h3>Nome</h3>
            <span>Pontuação</span>
          </ListLabels>
          {players.map((player) => {
            return(
                <li>
                    <h3>{player.name}</h3>
                    <span>{player.pontuation}</span>
                </li>
            )
          })}
        </ListContainer>
        <Button>Voltar à página inicial</Button>
      </Container>
    </Section>
  );
}
