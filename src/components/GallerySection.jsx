import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const fallbackImages = [
    "/baranda_fest.webp",
    "/pellerock.webp",
    "/nta_fest.webp",
    "/fotoTitle.webp",
];

export default function GallerySection() {
    const [images, setImages] = useState(fallbackImages);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fullscreenIndex, setFullscreenIndex] = useState(null);

    useEffect(() => {
        let active = true;

        fetch("/gallery_manifest.json")
            .then(response => response.ok ? response.json() : [])
            .then(galleryImages => {
                if (active && Array.isArray(galleryImages) && galleryImages.length > 0) {
                    setImages(galleryImages);
                    setCurrentIndex(0);
                }
            })
            .catch(() => {});

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        if (fullscreenIndex === null) return;

        const closeOnEscape = event => {
            if (event.key === "Escape") setFullscreenIndex(null);
            if (event.key === "ArrowLeft") {
                setFullscreenIndex(index => (index - 1 + images.length) % images.length);
            }
            if (event.key === "ArrowRight") {
                setFullscreenIndex(index => (index + 1) % images.length);
            }
        };

        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = "hidden";
        document.documentElement.classList.add("gallery-modal-open");

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
            document.documentElement.classList.remove("gallery-modal-open");
        };
    }, [fullscreenIndex, images.length]);

    const moveGallery = direction => {
        if (images.length === 0) return;
        setCurrentIndex(index => (index + direction + images.length) % images.length);
    };

    const visibleImages = Array.from({ length: Math.min(images.length, 5) }, (_, offset) => {
        const index = (currentIndex + offset) % images.length;
        return { src: images[index], index };
    });

    return (
        <section id="galeria" className="gallerySection" aria-labelledby="galleryTitle">
            <h2 id="galleryTitle" className="galleryTitle">Galería</h2>
            {images.length > 0 && (
                <div className="galleryCarousel">
                    <button
                        className="galleryArrow galleryArrowLeft"
                        type="button"
                        onClick={() => moveGallery(-1)}
                        aria-label="Imagen anterior"
                    >
                        ‹
                    </button>

                    <div className="galleryTrack">
                        {visibleImages.map(({ src, index }) => (
                            <button
                                className="galleryImageButton"
                                type="button"
                                key={`${src}-${index}`}
                                onClick={() => setFullscreenIndex(index)}
                                aria-label={`Abrir imagen ${index + 1} en pantalla completa`}
                            >
                                <img
                                    src={src}
                                    alt={`Galería ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        className="galleryArrow galleryArrowRight"
                        type="button"
                        onClick={() => moveGallery(1)}
                        aria-label="Imagen siguiente"
                    >
                        ›
                    </button>
                </div>
            )}

            {fullscreenIndex !== null && (
                createPortal(
                <div
                    className="galleryFullscreen"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Imagen ampliada"
                    onMouseDown={event => {
                        if (event.target === event.currentTarget) setFullscreenIndex(null);
                    }}
                >
                    <button
                        className="galleryFullscreenClose"
                        type="button"
                        onClick={() => setFullscreenIndex(null)}
                        aria-label="Cerrar imagen"
                    >
                        ×
                    </button>
                    <button
                        className="galleryFullscreenArrow galleryFullscreenArrowLeft"
                        type="button"
                        onClick={() => setFullscreenIndex(index => (index - 1 + images.length) % images.length)}
                        aria-label="Imagen anterior"
                    >
                        ‹
                    </button>
                    <img
                        className="galleryFullscreenImage"
                        src={images[fullscreenIndex]}
                        alt={`Galería ${fullscreenIndex + 1}`}
                    />
                    <button
                        className="galleryFullscreenArrow galleryFullscreenArrowRight"
                        type="button"
                        onClick={() => setFullscreenIndex(index => (index + 1) % images.length)}
                        aria-label="Imagen siguiente"
                    >
                        ›
                    </button>
                </div>,
                document.body
                )
            )}
        </section>
    );
}
