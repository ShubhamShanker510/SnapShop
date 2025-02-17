import React, { useEffect, useState } from 'react';
import men from '../../assets/images/mens.png';
import women from '../../assets/images/women.png';
import kid from '../../assets/images/kids.png';
import right from '../../assets/images/right-arrow.png';
import left from '../../assets/images/left-arrow.png';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if (current === 0) {
            setCurrent(images.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    const nextSlide = () => {
        if (current === images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    
    const images = [
        { name: men },
        { name: women },
        { name: kid }
    ];
    useEffect(() => {
       let interval=setInterval(()=>{
        setCurrent((prev)=>prev===images.length-1?0:prev+1)
       },4000)

       return(()=>clearInterval(interval))
    
    }, [images.length])
    

    return (
        <div className="flex h-30 w-[100vw]">
            <div className="flex m-auto overflow-hidden h-[50%] relative transition ease-out duration-300 ">
                <img
                    src={images[current].name}
                    alt={`Slide ${current}`}
                    className="w-full"
                    width={30}
                />
                <div className="arrow-btn absolute top-0 h-full w-full items-center justify-between flex px-10">
                <button onClick={previousSlide}>
                    <img src={left} alt="Previous" style={{ filter: "invert(1)" }} width={20} />
                </button>
                <button onClick={nextSlide}>
                    <img src={right} alt="Next" style={{ filter: "invert(1)" }} width={20} />
                </button>
            </div>
            </div>
            
        </div>
    );
};

export default Hero;
