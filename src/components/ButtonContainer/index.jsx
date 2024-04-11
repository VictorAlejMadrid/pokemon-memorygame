import { Container, DificultButton } from "./styles";

export default function ButtonContainer(props) {
  const { array, click, special } = props;

  return (
    <Container>
      {array.map((item, index) => (
        <DificultButton
          key={index}
          $select={special === item ? true : false}
          onClick={() => click(item)}
        >
          {item}
        </DificultButton>
      ))}
    </Container>
  );
}
