// import Image from "next/image";


export default function Titlesuvb({ title, sub }) {
 return (
  <div className="flex flex-col items-center justify-center">
   <h1 className="text-4xl font-bold">{title}</h1>
   <p className="text-lg">{sub}</p>
  </div>
 );
}
