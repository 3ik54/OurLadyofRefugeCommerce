import "./ImageSlideshow.css"
import {useEffect, useState} from 'react';

interface Slide {
    url: string;
    title: string;
}

interface ImageSliderProps {
    slides: Slide[];
}

const ImageSlider = ({slides}: ImageSliderProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true); 
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => { 
                setCurrentIndex((prevIndex) => 
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true); 
            }, 750); 
        }, 7000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPrevious = () => {
        setFade(false); 
        setTimeout(() => { 
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            );
            setFade(true); 
        }, 750); 
    };

    const goToNext = () => {
        setFade(false); 
        setTimeout(() => { 
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
            setFade(true); 
        }, 750); 
    };

    return (
        <div className="slideshow-container">
            <div 
                className={`slide ${fade ? 'fade-in' : 'fade-out'}`} // ← CHANGED: Added fade classes
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            </div>
            
            <button className="prev" onClick={goToPrevious}>❮</button>
            <button className="next" onClick={goToNext}>❯</button>
        </div>
    );

}

export default ImageSlider;