import { ListContainer, ListLabels } from "./styles";

export default function ScoresContainer(props) {
  const { playerList } = props;

  return (
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
  );
}
