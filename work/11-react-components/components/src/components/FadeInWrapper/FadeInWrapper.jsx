import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../lib/ScrollObserver';

const FadeInWrapper = ({ children }) => {

  const { scrollY } = useContext(ScrollContext);
  const containerRef = useRef(null);
  const { current: containerElement } = containerRef;
  let containerScrollProgress = 100;
  if (containerElement) {
    const { offsetTop, clientHeight } = containerElement;
    const halfH = window.innerHeight / 2;
    containerScrollProgress = Math.min(
      ((scrollY - offsetTop + 2 * halfH) * 100) / clientHeight,
      100,
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ opacity: `${containerScrollProgress}%`, width: '100%' }}
    >
      {children}
    </div>
  );
};


FadeInWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default FadeInWrapper;
