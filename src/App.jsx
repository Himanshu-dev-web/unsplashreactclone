import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Imagescard from './components/Imagescard';



function App() {

  const [imagesd, setImagesd] = useState([]);

  return (
    <div className=''>
        <Navbar imagesd={imagesd} setImagesd={setImagesd}/>
        
        { }
        <Imagescard imagesd={imagesd} />

      {/* <div className='filters'>
        <div onClick={() => handleSelection('nature')}>Nature</div>
        <div onClick={() => handleSelection('birds')}>Birds</div>
        <div onClick={() => handleSelection('cats')}>Cats</div>
        <div onClick={() => handleSelection('shoes')}>Shoes</div>
      </div> */}
      {/* {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <>
          <div className='images'>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                className='image'
              />
            ))}
          </div>
          <div className='buttons'>
            {page > 1 && (
              <button onClick={() => setPage(page - 1)}>Previous</button>
            )}
            {page < totalPages && (
              <button onClick={() => setPage(page + 1)}>Next</button>
            )}
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;