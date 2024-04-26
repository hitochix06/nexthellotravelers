import React from "react";

export default function Advantage(props) {
  return (
    <div className="xs:col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 ">
      <div className=" gap-4 auto-rows-auto">
        <div className="px-20 py-5">
          <div className="flex items-center">
          <img src={props.icon} alt="Icon" className="h-10 w-10 rounded-full mr-4" />
            <h4 className="font-bold py-4">{props.title}</h4>
          </div>
          <p className="text-gray-600">{props.paragraphe}</p>
        </div>
      </div>
    </div>
  );
}
