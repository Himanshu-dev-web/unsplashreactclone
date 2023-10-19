import { useState } from 'react';
import Navbar from './components/Navbar';
import Imagescard from './components/Imagescard';



function App() {

  const [images, setImages] = useState([]);

  return (
    <div className=''>
        <Navbar images={images} setImages={setImages}/>
        <Imagescard images={images} />
    </div>
  );
}

export default App;