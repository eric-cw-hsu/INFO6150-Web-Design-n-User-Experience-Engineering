import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../../lib/ScrollObserver';

const FadeOutWrapper = ({ children }) => {
  const { scrollY } = useContext(ScrollContext);
  const containerRef = useRef(null);

  const { current: containerElement } = containerRef
  let containerTranslateY = 0
  let containerOpacity = 100

  if (containerElement) {
    const { clientHeight } = containerElement
    containerTranslateY = Math.min(scrollY * 50 / clientHeight, 25)
    containerOpacity = 100 - Math.min(scrollY * 100 / clientHeight, 100) * 1.3
  }

  console.log(containerTranslateY, containerOpacity)


  return (
    <div
      ref={containerRef}
      style={{
        transform: `translateY(${containerTranslateY}%)`,
        opacity: `${containerOpacity}%`
      }}
    >
      {children}
    </div>
  );
}

export default FadeOutWrapper;
