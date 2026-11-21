export default function NavBar(props) {
    const scrollToSection = id => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return(
<div className="navBar">
<button className="navLogo" type="button" onClick={() => scrollToSection("inicio")} aria-label="Ir al inicio">
    <img src="/favicon.svg"/>
</button>

<div className="navText">
    <button type="button" onClick={() => scrollToSection("inicio")}>
    <p>Inicio</p>
    </button>
    <button type="button" onClick={() => scrollToSection("musica")}>
    <p>Música</p>
    </button>
    <button type="button" onClick={() => scrollToSection("historia")}>
    <p>Historia</p>
    </button>
    <button type="button" onClick={() => scrollToSection("galeria")}>
    <p>Galería</p>
    </button>
</div>

<div className="navLinks">
    <a href="https://youtube.com" target="_blank">
        <img src="/logo-youtube.svg"/>
    </a>
    <a href="https://spotify.com" target="_blank">
        <img src="/logo-spotify.svg"/>
    </a>
</div>

</div>

    )
}