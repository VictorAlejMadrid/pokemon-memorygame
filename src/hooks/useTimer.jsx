import { useEffect, useRef, useState } from "react";

export default function useTimer() {
  // estrutura feita por mim, aprimorada pelo copilot após periodo considerado de tentativas falhas por não utilizar o useRef
  const [timer, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  function startTimer() {
    if (intervalRef != undefined) {
      intervalRef.current = setInterval(function () { // useRef da pra usar em funções!
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

  return [timer, stopTimer];
}
