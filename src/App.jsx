import "./App.css"
import NavBar from "./components/NavBar"
import TitleSection from "./components/TitleSection"
import ProximosShows from "./components/ProximosShows"
import VideoSection from "./components/VideoSection"
import ArtistSection from "./components/ArtistSection"
import GallerySection from "./components/GallerySection"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event) => setMatches(event.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}



export default function App() {

  const isMobile = useMediaQuery('(max-width: 861px)');

  useEffect(() => {
    
    const targets = document.querySelectorAll(
      ".titleSectionParent, .proximosShowsParent, .videoSection, .artistSection, .gallerySection, .showElement, .videoCard"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach(target => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  if (isMobile) {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#000"}}>
        <p style={{color: "white", padding: "20px", fontFamily: 'Montserrat'}}>Esta pagina no esta diseñada para dispositivos móviles, por favor visite la pagina desde un dispositivo de escritorio o seleccione
  la opción de "Ver como escritorio" en su navegador para continuar.
        </p>
      </div>
    );
  }

  return(
    <div className="background"> 
      <NavBar/>
      <TitleSection/>
      <ProximosShows current={true}/>
      <ProximosShows/>
      <VideoSection/>
      <div id="historia" className="historySection">
      <ArtistSection
        image="/foto_leon.webp"
        name="Leon Dergarabedian"
        instruments={["Voces", "Guitarra principal"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_male.webp"
        name="Malena Garbugino Vior"
        instruments={["Voces", "Bajo eléctrico"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_mathi.webp"
        name="Mathias Fogolin Lagares"
        instruments={["Teclados", "Guitarra ritmica"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_diego.webp"
        name="Diego Ignacio Franco Rincon"
        instruments={["Bateria", "Percusion"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      </div>
       <GallerySection/>
       <Footer/>  
    </div>


   
  )
}