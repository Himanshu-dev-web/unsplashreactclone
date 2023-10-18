import React from 'react'
import Singlecard from './Singlecard'
const Imagescard = ({imagesd}) => {

    console.log(imagesd);
  return (
    <>
    <div className="gap-0 columns-2 md:columns-4 md:gap-3  md:m-[5rem]">
      {imagesd.map((image, i) => {
        return(
            <>
            <Singlecard key={i} image={image}/>
            </>
        )
      })}
    </div>

    </>
  )
}

export default Imagescard