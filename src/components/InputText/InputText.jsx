import { Div, Input } from "./styles";

export default function InputText(props) {
  const { setNewName } = props;

  return (
    <Div>
      <h2>Digite seu nome:</h2>
      <Input
        type="text"
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Digite seu nome"
      />
    </Div>
  );
}
