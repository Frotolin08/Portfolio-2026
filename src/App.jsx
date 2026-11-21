import "./App.css"
import NavBar from "./components/NavBar"
import TitleSection from "./components/TitleSection"
import ProximosShows from "./components/ProximosShows"

export default function App() {

  return(
    <div className="background"> 
      <NavBar/>
      <TitleSection/>
      <ProximosShows current={true}/>
      <ProximosShows/>
    </div>


   
  )
}