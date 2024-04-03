import React, { useState, useEffect, useCallback, createContext } from 'react'


const ScrollContext = createContext({ scrollX: 0, scrollY: 0 })

const ScrollObserver = ({ children }) => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const handleOnScroll = useCallback(() => {
    setScrollY(window.scrollY)
    setScrollX(window.scrollX)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleOnScroll, { passive: true })

    return () => document.removeEventListener('scroll', handleOnScroll)
  }, [handleOnScroll])

  return (
    <ScrollContext.Provider value={{ scrollX, scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}


export default ScrollObserver

export {
  ScrollContext
}