import { useEffect, useState } from "react";
import Singlecard from "./Singlecard";

const Imagescard = ({ images }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (images) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [images]);
  return (
    <>
      <div className="    gap-0  columns-1 md:columns-2 md:gap-3  md:m-[5rem] lg:columns-4 ">
        {!images ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            {images?.map((image, _i) => {
              return (
                <>
                  <Singlecard key={_i} image={image} />
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Imagescard;
