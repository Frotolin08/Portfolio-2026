export default function NavBar(props) {


    return(
<div className="navBar">
<button className="navLogo">
    <img src="/favicon.svg"/>
</button>

<div className="navText">
    <button>
    <p>Inicio</p>
    </button>
    <button>
    <p>Historia</p>
    </button>
    <button>
    <p>Música</p>
    </button>
    <button>
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