import { useEffect, useState } from 'react';
import Singlecard from './Singlecard'
const Imagescard = ({imagesd}) => {

    console.log(imagesd);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(imagesd){
            setLoading(false)
        }
        else{
            setLoading(true)
        }
    }, [imagesd]);
  return (
    <>
    <div className="    gap-0  columns-1 md:columns-2 md:gap-3  md:m-[5rem] lg:columns-4 ">
     {loading ? (
        <p className='loading'>Loading...</p>
     ):(
        <>
        {imagesd?.map((image, i) => {
        return(
            <>
            <Singlecard key={i} image={image}/>
            </>
        )
         })}  
        </>
     )}
     

    </div>

    </>
  )
}

export default Imagescard