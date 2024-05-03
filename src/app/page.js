// import Image from "next/image";

import { Navbar } from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Advantages from "./components/sections/Advantages";
import Articles from "./components/sections/Articles";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="advantages"></div>
      <Hero />
      <Advantages />
      <div id="articles"></div>
      <Articles />
      <Footer />
    </div>
  );
}
