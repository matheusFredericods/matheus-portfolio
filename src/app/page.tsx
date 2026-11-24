import Hero from "../sections/Hero";
import NavBar from "./components/layout/NavBar";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />

      <div>
        <NavBar />
        <Hero />

        <main></main>
      </div>
    </>
  );
}
