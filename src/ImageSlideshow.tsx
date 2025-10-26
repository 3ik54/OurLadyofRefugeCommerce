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

    return (
        <div className="slideshow-container">
            <div 
                className={`slide ${fade ? 'fade-in' : 'fade-out'}`}
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            </div>
        </div>
    );

}

export default ImageSlider;