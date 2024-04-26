import React from "react";

export default function Advantage(props) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-auto">
        <div className="px-20 py-5">
          <div className="flex items-center">
            <img src={props.icon} alt="Icon" className="w-1/3 h-10 mr-4" />
            <h4 className="font-bold py-4">{props.title}</h4>
          </div>
          <p className="text-gray-600">{props.paragraphe}</p>
        </div>
      </div>
    </div>
  );
}
