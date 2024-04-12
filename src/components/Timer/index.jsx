import { useEffect, useState } from "react"
import useTimer from "../../hooks/useTimer"
import { Container, TimerH1 } from "./styles";

export default function Timer() {
    const [teste, setTeste] = useState(false);
    const [[minutes, seconds], stopTimer] = useTimer();


    return(
        <Container>
            <TimerH1 onClick={() => stopTimer()}>{minutes} : {seconds}</TimerH1>
        </Container>
    )
}