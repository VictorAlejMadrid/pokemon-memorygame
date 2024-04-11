import { useEffect, useState } from "react"
import useTimer from "../../hooks/useTimer"
import { Div } from "./styles";

export default function Timer() {
    const [teste, setTeste] = useState(false);
    const [timer, stopTimer] = useTimer();


    return(
        <Div onClick={() => stopTimer()}>{timer}</Div>
    )
}