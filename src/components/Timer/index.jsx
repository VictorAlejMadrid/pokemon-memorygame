import { Container, TimerH1 } from "./styles";

export default function Timer(props) {
    const { time } = props;
    const [minutes, seconds] = time;

    return(
        <Container>
            <TimerH1>{minutes} : {seconds}</TimerH1>
        </Container>
    )
}