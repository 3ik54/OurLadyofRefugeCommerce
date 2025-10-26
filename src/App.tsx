import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import ImageSlider from "./ImageSlideshow.tsx";
import Message from "./Message.tsx";
import Contact from "../pages/Contact.tsx";
import Login from '../pages/Login.tsx';
import Sellers from '../pages/Sellers.tsx'
import { supabase,key } from './supabase_client.ts';



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


  const Home = () => (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
      <Message />
    </>
  );
  console.log(key);
  
  return (
    <div>   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller" element={<Sellers />} />
      </Routes>
      
    </div>

  );
}

export default App