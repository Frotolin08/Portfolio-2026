import "./App.css"
import NavBar from "./components/NavBar"
import TitleSection from "./components/TitleSection"
import ProximosShows from "./components/ProximosShows"
import VideoSection from "./components/VideoSection"
import ArtistSection from "./components/ArtistSection"
import GallerySection from "./components/GallerySection"

export default function App() {

  return(
    <div className="background"> 
      <NavBar/>
      <TitleSection/>
      <ProximosShows current={true}/>
      <ProximosShows/>
      <VideoSection/>
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
       <GallerySection/>
    </div>


   
  )
}