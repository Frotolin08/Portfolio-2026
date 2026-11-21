import videos from "../assets/videos.json";

function getYouTubeVideoId(link) {
    if (!link) return "";

    try {
        const url = new URL(link);
        if (url.hostname.includes("youtu.be")) {
            return url.pathname.slice(1);
        }

        if (url.hostname.includes("youtube.com")) {
            return url.searchParams.get("v") || url.pathname.split("/embed/")[1]?.split("/")[0] || "";
        }
    } catch {
        return "";
    }

    return "";
}

export default function VideoSection() {
    const visibleVideos = videos.filter(video => video.title).slice(0, 4);

    return (
        <section id="musica" className="videoSection" aria-labelledby="videoSectionTitle">
            <h2 id="videoSectionTitle" className="videoSectionTitle">Música</h2>
            <div className="videoSectionContent">
                <img className="videoArabesque videoArabesqueLeft" src="/arabescoIzquierda.png" alt="" aria-hidden="true" />
                <div className="videoGrid">
                    {visibleVideos.map((video, index) => {
                        const videoId = getYouTubeVideoId(video.link);
                        const thumbnail = videoId
                            ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
                            : null;

                        return (
                            <article className="videoCard" key={`${video.title}-${index}`}>
                                {video.link ? (
                                    <a
                                        className="videoThumbnail"
                                        href={video.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Reproducir ${video.title} en YouTube`}
                                    >
                                        {thumbnail ? (
                                            <img src={thumbnail} alt="" />
                                        ) : (
                                            <span className="videoThumbnailPlaceholder" />
                                        )}
                                        <span className="videoPlay" aria-hidden="true" />
                                    </a>
                                ) : (
                                    <div className="videoThumbnail" aria-hidden="true">
                                        <span className="videoThumbnailPlaceholder" />
                                        <span className="videoPlay" aria-hidden="true" />
                                    </div>
                                )}
                                <div className="videoMetadata">
                                    <h3>{video.title}</h3>
                                    <p>{video.length} - {video.album}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <img className="videoArabesque videoArabesqueRight" src="/arabescoDerecha.png" alt="" aria-hidden="true" />
            </div>
        </section>
    );
}