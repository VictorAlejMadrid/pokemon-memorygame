import { useEffect, useState } from "react";

export default function useTimer() {
  const [timer, setTime] = useState(0);
  const [stop, setStop] = useState(false);
  let interval = null;
  let newTimer = timer;

  useEffect(() => {
    startTimer();
  }, []);

  function startTimer() {
    interval = setInterval(function () {
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
    setStop(true);
    clearInterval(interval);
    interval = null;
  }

  return [timer, stopTimer];
}
