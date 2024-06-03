import React, { useEffect } from "react";
import Confetti from "react-confetti";

const Fireworks = ({ show }) => {
  useEffect(() => {
    if (show) {
      const audio = new Audio("/sounds/fireworks.mp3");
      audio.play();
    }
  }, [show]);

  return show ? (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  ) : null;
};

export default Fireworks;
