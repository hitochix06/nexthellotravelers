import React from 'react'

export default function Advantage(props) {
 return (
  <div>
   <div className="container mx-auto">
    <div className="flex flex-col md:flex-row ">
     <div className="px-20">
      <h4 className="font-bold py-4" >{props.title}</h4>
      <p className="text-gray-600">
       {props.paragraphe}
      </p>
     </div>
    </div>
   </div>
  </div>
 )
}
