import Timer from "../Timer";
import { HeaderContainer } from "./styles";

export default function Header(props) {
  const { dificult } = props;

  return (
    <HeaderContainer>
      <h1>Jogo da memória</h1>
    </HeaderContainer>
  );
}
