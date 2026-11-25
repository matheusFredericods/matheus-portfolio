import Hero from "../sections/Hero";
import NavBar from "./components/layout/NavBar";
import Preloader from "./components/Preloader";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <>
      <Preloader />

      <div>
        <NavBar />
        <Hero />
        <Projects />

        
      </div>
    </>
  );
}
