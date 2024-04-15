import { useEffect, useState } from "react"
import useTimer from "../../hooks/useTimer"
import { Container, TimerH1 } from "./styles";

export default function Timer(props) {
    const {minutes, seconds} = props;

    return(
        <Container>
            <TimerH1>{minutes} : {seconds}</TimerH1>
        </Container>
    )
}