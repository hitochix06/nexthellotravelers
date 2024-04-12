// import Image from "next/image";

import { Navbar } from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Advantages from "./components/sections/Advantages";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advantages />
    </div>
  );
}
