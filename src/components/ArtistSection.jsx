import { useId } from "react";

export default function ArtistSection({ image, name, text, instruments }) {
    const titleId = useId();

    return (
        <section className="artistSection" aria-labelledby={titleId}>
            <img className="artistImage" src={image} alt={name} />
            <div className="artistContent">
                <h2 id={titleId} className="artistName">{name}</h2>
                {instruments?.length > 0 && (
                    <p className="artistInstruments">{instruments.join(" - ")}</p>
                )}
                <p className="artistText">{text}</p>
            </div>
        </section>
    );
}
