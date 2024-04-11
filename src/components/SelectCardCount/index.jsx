import { SelectContainer } from "./styles";

export default function SelectCardCount(props) {
  const { options, change } = props;

  return (
    <SelectContainer>
      <p>Quantidade de pares:</p>
      <select onChange={(e) => change(Number(e.target.value))}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}
