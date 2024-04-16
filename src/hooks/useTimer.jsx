import { useRef, useState } from "react";

export default function useTimer() {
  // estrutura feita por mim, aprimorada pelo copilot após periodo considerado de tentativas falhas por não utilizar o useRef
  const [timer, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    setTime(0);

    if (intervalRef != undefined) {
      intervalRef.current = setInterval(function () {
        // useRef da pra usar em funções!
        increaseSeconds();
      }, 1000);
    }
  }

  function increaseSeconds() {
    setTime((prevTimer) => prevTimer + 1); // cool!
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function getValues() {
    let seconds = (timer % 60).toString();
    let minutes = Math.floor(timer / 60);
    let minutesString = minutes > 0 ? (minutes < 10 ? "0" + minutes : minutes.toString()) : "00";
    let secondsString = seconds >= 10 ? seconds : '0' + seconds;
    return [minutesString, secondsString];
  }

  return [getValues(), stopTimer, startTimer];
}
