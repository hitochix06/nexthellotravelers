import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2">
        <h1> Et si on apprenais à utiliser Next.js?</h1>
        <p>
          Aujourd'huit on va se servir de Next.js pour récupérer les acticles
          d'un blog Wordpress de votre choix, pour les ajouter à notre site de
          manière performante,sécurisée et SEO friendly
        </p>
        <div className="flex flex-row space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Avantages de Next.js
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voir les articles
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="./presentation.jpeg" alt="Votre image" />
      </div>
    </div>
  );
}
