import React from 'react'

const Singlecard = ({image}) => {

  return (
    <>
         <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img src={image.urls.small}
                alt={image.alt_description}
                 className="w-full"></img>
       
        <div className="px-6 py-4  flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1697059492638-ea45a2493ec4?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar of Jonathan Reinink"></img>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">@julia Clicks</p>
            </div>
        </div>
        
        </div>
        
    </>
  )
}

export default Singlecard