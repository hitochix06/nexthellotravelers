// import Image from "next/image";


export default function Titlesub({title, sub, classes}) {
    return (
      <div className={`${classes}`}>
        <h2>{title}</h2>
        <p className="-mt-2">{sub}</p>
      </div>
    )
  }
