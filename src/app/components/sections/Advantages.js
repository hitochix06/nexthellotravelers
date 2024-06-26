import Advantage from "../Advantage";
import React from "react";
const advantages = require("../../../../data/advantages.json");

export default function Advantages() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row ">
          <div className="px-20">
            <h2 className="font-bold py-4">
              Next.js est un framework fantastique
            </h2>
            <p className="text-gray-600">
              Créez des applications web modernes, performantes et facilement
              maintenables sans forcer
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 container mx-auto ">
        {advantages.map((el, i) => (
          <Advantage {...el} key={i} />
        ))}
      </div>
    </div>
  );
}
