import React from 'react'
const manu =[
    {
      "name": "MUSSELS SOUP",
      "price": 23,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "ITALIAN SPAGHETTI",
      "price": 12,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "BEEF BURGER",
      "price": 10,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "STUFFED STRAWBERRY",
      "price": 15,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "SICILIAN MEATBALLS",
      "price": 25,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "SEAFOOD SALAD",
      "price": 17,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "ROAST CHICKEN",
      "price": 22,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    },
    {
      "name": "GRILLED FISH",
      "price": 36,
      "description": "Lorem ipsum dolor sit amet, feugiat delicata."
    }
  ]
export default function Manu() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-white pt-0 p-20'>
    {
        manu.map((data,index)=>(<div className='flex-col bg-white p-4'>
        <div className='flex justify-between items-center text-black'>
            <h1>{data.name}</h1>      
            <p>${data.price}</p>
        </div> 
        <div>
            <p>{data.description}</p>       
        </div>       
    </div>))
    }
   
</div>

    
  )
}
