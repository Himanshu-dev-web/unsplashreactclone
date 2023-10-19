import React, { useState } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa';
import Modal from './Modal';

const Singlecard = ({image}) => {
    const [showModal, setShowModal] = useState(false);

      
    const cardImg = image.urls.small;
    const toggleimg = image.urls.regular;
    const altImg = image.alt_description;
    const cardProfileImage = image.user.profile_image.large;
    const name = image.user.first_name;
    const username = image.user.username;
    const likes = image.likes;
    function formatLikes(likes) {
        if (likes >= 1000) {
          return (likes / 1000).toFixed(1) + "k";
        } else {
          return likes ;
        }
      }

     
  return (
    <>
         <div  onClick={() => setShowModal(true)}  className="mx-[3rem] md:mx-0 rounded overflow-hidden shadow-lg m-4 cursor-pointer">
        <img src={cardImg}
                alt={altImg}
                 className="w-full"></img>
        <div className="px-6 py-2 flex items-center justify-around w-[100%]">
        <img className="w-[15%] h-10 rounded-full mr-4" src={cardProfileImage} alt="Avatar of Jonathan Reinink"></img>
            <div className="text-sm w-[60%]">
                <p className="text-gray-900 leading-none text-lg font-semibold">{name}</p>
                <p className="text-gray-600">@{username}</p>    
            </div>
            <div className='w-[25%] flex items-center font-semibold '>
            <FaRegThumbsUp /> <span className='pl-1'>{formatLikes(likes)}</span> 
            </div>
            </div>
        </div>

        {showModal ? (
        <>
          <div onClick={() => setShowModal(false)} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative h-[450px] w-[80.61%] md:w-[50%]  rounded-md">
      <img
        src={toggleimg}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      
      <div className="px-6 h-[9rem]  pt-[1rem] flex flex-col  justify-around w-[100%] bottom-4 left-4 text-left bg-white">
               
                <div className='flex'>
                        <img className="w-[10.5%] h-[3rem] md:w-[9.5%] md:h-[4rem] rounded-full mr-4" src={cardProfileImage} alt="Avatar of Jonathan Reinink"></img>
                    <div className="text-sm w-[20%] pt-3">
                        <p className="text-gray-900 leading-none text-lg font-semibold">{name}</p>
                        <p className="text-gray-600">@{username}</p>    
                    </div>
                    <div className="text-sm w-[40%] pt-3 flex">
                        <p className="inline-block  rounded-full px-3 pt-2 text-sm font-semibold text-gray-700 mr-2 mb-2">@{image.user.instagram_username}</p>
                        <p className="inline-block rounded-full px-3 pt-2 text-sm font-semibold text-gray-700 mr-2 mb-2">{image.user.twitter_username}</p>    
                    </div>
                <div className='w-[30%] hidden md:flex items-center justify-center font-semibold '>
                    <FaRegThumbsUp /> <span className='pl-1'>{formatLikes(likes)}</span> 
                </div>
                </div>

                <div>

                <div className="px-6 pt-4 pb-2">
                    {image.tags?.map((item,i) =>(
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.title}</span>
                    ))}
                     </div>
                </div>

      </div>
    </div> 
       
                  
          </div>
        </>
      ) : null}
        
    </>
  )
}

export default Singlecard