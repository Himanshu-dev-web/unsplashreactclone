import { useEffect, useState } from "react";
import Singlecard from "./Singlecard";
const Imagescard = ({ imagesd }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (imagesd) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [imagesd]);
  return (
    <>
      <div className="    gap-0  columns-1 md:columns-2 md:gap-3  md:m-[5rem] lg:columns-4 ">
        {(!imagesd) ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            {imagesd?.map((image,_i) => {
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
