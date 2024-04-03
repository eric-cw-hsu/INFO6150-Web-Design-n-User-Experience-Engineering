import React from 'react';
import './SpeechBubble.css';

const SpeechBubble = ({ children }) => {
  return (
    <div className="bubble bottom">
      {children}
    </div>
  );
}

export default SpeechBubble;
