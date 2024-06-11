import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfoliio from "./components/Portfoliio";
import Skills from "./components/Skills";
import Experiance from "./components/experiance";


export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Portfoliio/>
      <Experiance/>
      <Contacts/>
      <Footer/>
    </>
  );
}