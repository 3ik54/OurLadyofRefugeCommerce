import Navbar from './Navbar.tsx';
import ImageSlider from "./ImageSlideshow.tsx"
import Message from "./Message.tsx"

function App() {

  const slides = [
    { url : '/cross.jpg', title : 'Slide 1'},
    { url : '/InsideChurch.jpg', title: 'Slide 2'},
    { url : '/OutsideChurch.jpg', title: 'Slide 3'}
  ]

  const containerStyles = {
    width: '750px',
    height: '400px',
    margin: '200px auto 0',
  };
  
  return (
    <div>   
      
      <Navbar />
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>

      < Message />
      
    
    </div>
   

  );

}

export default App
