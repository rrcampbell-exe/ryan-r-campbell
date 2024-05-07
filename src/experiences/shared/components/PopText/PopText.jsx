import React, { useState, useEffect } from 'react'

const PopText = ({ children, slow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(children[currentIndex])

  const timeout = slow ? 7000 : 2000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % children.length)
    }, timeout)

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