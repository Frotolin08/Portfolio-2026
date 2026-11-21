import "./App.css"
import NavBar from "./components/NavBar"
import TitleSection from "./components/TitleSection"
import ProximosShows from "./components/ProximosShows"
import VideoSection from "./components/VideoSection"
import ArtistSection from "./components/ArtistSection"
import GallerySection from "./components/GallerySection"
import Footer from "./components/Footer"
import { useEffect } from "react"

export default function App() {
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

  return(
    <div className="background"> 
      <NavBar/>
      <TitleSection/>
      <ProximosShows current={true}/>
      <ProximosShows/>
      <VideoSection/>
      <div id="historia" className="historySection">
      <ArtistSection
        image="/foto_leon.png"
        name="Leon Dergarabedian"
        instruments={["Voces", "Guitarra principal"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_male.png"
        name="Malena Garbugino"
        instruments={["Voces", "Bajo eléctrico"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_mathi.png"
        name="Mathias Fogolin Lagares"
        instruments={["Teclados", "Guitarra ritmica"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
       <ArtistSection
        image="/foto_diego.png"
        name="Diego Franco Rincon"
        instruments={["Bateria", "Percusion"]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      </div>
       <GallerySection/>
       <Footer/>  
    </div>


   
  )
}