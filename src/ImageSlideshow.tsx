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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow-container">
            <div 
                className="slide"
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            </div>
            
            <button className="prev" onClick={goToPrevious}>❮</button>
            <button className="next" onClick={goToNext}>❯</button>
        </div>
    );

}

export default ImageSlider;