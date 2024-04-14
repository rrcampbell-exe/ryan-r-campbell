import React, { useState, useEffect } from 'react'

const PopText = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(children[currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % children.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [children])

  useEffect(() => {
    setCurrentContent(children[currentIndex])
  }, [currentIndex, children])

  return (
    <div>
      <div className='pop-content'>{currentContent}</div>
    </div>
  );
};

export default PopText