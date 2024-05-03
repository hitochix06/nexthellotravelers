import React from "react";
import Image from "next/image";
export default function Hero(props) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 px-20 py-5">
          <h1 className="font-bold py-4">
            {" "}
            Et si on apprenais à utiliser Next.js?
          </h1>
          <p className="text-gray-600">
            Aujourd'hui on va se servir de Next.js pour récupérer les articles
            d'un blog Wordpress de votre choix, pour les ajouter à notre site de
            manière performante, sécurisée et SEO friendly
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-4">
            <a
              href="#advantages"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Avantages de Next.js
            </a>
            <a
              href="#articles"
              className="border border-green-500 hover:border-green-700 text-green-500 hover:text-green-700 font-bold py-2 px-4 rounded"
            >
              Voir les articles
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 flex justify-center">
          <img src="./presentation.png" alt="Votre image" />
        </div>
      </div>
    </div>
  );
}
