import React, { useEffect, useState } from 'react'
import sick from '../../assets/mp4/sick.mp4'

const NotFound = ({text,delay}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, delay, text]);

  return (
    <div className='flex justify-center items-center'>
    <div>
    <video autoPlay muted loop>
        <source src={sick} />
      </video>
    </div>
    <div className="div flex flex-col items-center">
        <p className='font-bold text-[200px] text-blue-950'>OOPS !</p>
        <p className='text-[50px]'>{currentText}</p>
    </div>
    </div>
  )
}

export default NotFound