import ShowElement from "./ShowElement";
import shows from "../assets/shows.json";

export default function ProximosShows({current}) {

    return(
        <div className="proximosShowsParent">
        <div className="proximosShows">
            <p className="proximosShowsText">{current ? "Próximos shows" : "Shows pasados"}</p>
            {shows && shows.filter(show => current? show.isCurrent : !show.isCurrent).length > 0 
            ? shows.filter(show => current? show.isCurrent : !show.isCurrent).map((show, index) => (
                <ShowElement
                    key={index}
                    title={show.title}
                    date={show.date}
                    location={show.location}
                    description={show.description}
                    isCurrent={show.isCurrent}
                    image={show.image}
                    link={show.link}
                    setlist={show.setlist}
                    concurrence={show.concurrence}
                />
            )) : <p style={{color: 'white', fontFamily: 'montserrat'}}>No hay shows disponibles</p>}
            
        </div>
        </div>
    )}