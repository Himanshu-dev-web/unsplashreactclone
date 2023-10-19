import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Imagescard from './components/Imagescard';



function App() {

  const [imagesd, setImagesd] = useState([]);

  return (
    <div className=''>
        <Navbar imagesd={imagesd} setImagesd={setImagesd}/>
        <Imagescard imagesd={imagesd} />
    </div>
  );
}

export default App;