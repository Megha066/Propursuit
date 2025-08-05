import React, { useEffect, useState } from "react";
// import "./TypingEffect.css";

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let currentText = "";
    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // cleanup on unmount
  }, [text, speed]);

  return (
    <p className="typing-text m-3 shadows-into-light-regular">
      {displayedText}
      <span className="cursor" />
    </p>
  );
};

export default TypingEffect;
