import React from 'react'

const Singlecard = ({image}) => {

    const cardImg = image.urls.small;
    const altImg = image.alt_description;
    const cardProfileImage = image.user.profile_image.large;
    const name = image.user.first_name;
    const username = image.user.username;

  return (
    <>
         <div className="mx-[3rem] md:mx-0 rounded overflow-hidden shadow-lg m-4">
        <img src={cardImg}
                alt={altImg}
                 className="w-full"></img>
       
        <div className="px-6 py-4  flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={cardProfileImage} alt="Avatar of Jonathan Reinink"></img>
            <div className="text-sm">
                <p className="text-gray-900 leading-none text-lg font-semibold">{name}</p>
                <p className="text-gray-600">@{username}</p>
            </div>
            <div className='flex flex-row justify'>
                sdd
            </div>
        </div>
        
        </div>
        
    </>
  )
}

export default Singlecard