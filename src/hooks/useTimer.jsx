import { useEffect, useRef, useState } from "react";

export default function useTimer() {
  const [timer, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  function startTimer() {
    intervalRef.current = setInterval(function () { // useRef da pra usar em funções!
        increaseSeconds();
      }, 1000);
    return () => {
        stopTimer();
    }
  }

  function increaseSeconds() {
    setTime(prevTimer => prevTimer + 1); // cool!
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return [timer, stopTimer];
}
