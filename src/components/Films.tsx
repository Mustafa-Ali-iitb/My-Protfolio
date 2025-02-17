import React, { useState } from "react";
import '../assets/styles/Project.scss';

function Films() {
    const [showMore, setShowMore] = useState(false);

    const videos = [
        { 
            title: "IIT Bombay - A Trip Down the Memory Lane", 
            description: "IIT Bombay is not only an educational but it’s a place where a person goes through everything this life has to throw at them, they lose heart and rise again, they cry and laugh, they fail and achieve, and amongst this intense hustle they find their true self. ", 
            videoId: "ra0jrLw3N-o" 
        },
        { 
            title: "Tabeer (تابیر)", 
            description: "A Film made for Inter IIT Cultural Meet 2019 by IIT Bombay about two friends one of which dies in one of the biggest tragic events Mumbai has ever seen.", 
            videoId: "IVS3yum96bA" 
        },
        { 
            title: "Khilona", 
            description: "This story revolves around a kid's conflict about God and in order to resolve this, he goes on interacting with others which confuses him even more. This confusion leads him to rebel and question the already existing concept of God. But in the end, his thoughts are suppressed by his own family.", 
            videoId: "cyHhgMZoooE" 
        },
        { 
            title: "Kya Tumhe Mera Phool Mila", 
            description: "A shy schoolboy secretly loves a girl but fears confessing his feelings. As he struggles with his emotions, she unexpectedly discovers the truth, leading to a moment that could change everything.", 
            videoId: "_rK2_uk9LN4" 
        },
        { 
            title: "An Escapade to Goa", 
            description: "Goa - Travel Video", 
            videoId: "qipK8b03tmk"
        },
        { 
            title: "Mysore", 
            description: "Mysore - Travel Video", 
            videoId: "fRH2TqUL6qc"
        },
        { 
            title: "2022 Recap", 
            description: "Farewell, 2022! It's been a year of growth, new experiences, and unforgettable memories. Thank you to all the amazing people who made it special.", 
            videoId: "xqJaZhImuMM"
        },
        { 
            title: "Chotu", 
            description: "The story revolves around 'Chotu' a poor man, but his story is not about how the poor struggle to make ends meet or how they put aside their inner desires to put food on their plate. This story is about the humanity that lies within every human-being, the potential that people have to put others in need before themselves.", 
            videoId: "rQqHo54DU8Q"
        },
        { 
            title: "A Cigarette a day", 
            description: "In a busy mundane world, one often find themselves under infinite stress and pressure. Sometimes we seek a few not-so-favourable escape routes for momentary pleasures often entangling ourselves in the unhealthy practices of society. Watch as a few ill choices and some tough luck of an ordinary individual spirals down to something unprepared for.", 
            videoId: "OxpNFjeST_s"
        },
        { 
            title: "Plan Z", 
            description: "Two miserable kidnappers ask a ransom of 1.25 crores. With several failures and a few successes, here is a tale of two men as they plot and execute several plans to earn a handful of cash.", 
            videoId: "Y45whWzNiE8"
        },
        { 
            title: "The Connection - A 50 Hour Film Project", 
            description: "The seemingly  dissonant lives of two people find a beautiful harmony as the surreal connection becomes apparent.", 
            videoId: "evh2w1JlWV0"
        },
        { 
            title: "The Script", 
            description: "Watch what happens when two writers discept a script unbeknownst unbeknownst as fantasy fades to reality.", 
            videoId: "NOFc7FCgNYs"
        }
    ];

    return(
        <div className="projects-container" id="films">
            <h1>Films</h1>
            <div className="projects-grid">
                {videos.slice(0, 4).map((video, index) => (
                    <div key={index} className="project">
                        <iframe 
                            width="100%" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${video.videoId}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            title={video.title}
                        ></iframe>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                    </div>
                ))}
                {showMore && (
                    <>
                        {videos.slice(4).map((video, index) => (
                            <div key={index} className="project">
                                <iframe 
                                    width="100%" 
                                    height="315" 
                                    src={`https://www.youtube.com/embed/${video.videoId}`} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen 
                                    title={video.title}
                                ></iframe>
                                <h2>{video.title}</h2>
                                <p>{video.description}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="show-more-container">
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "See More"}
                </button>
            </div>
        </div>
    );
}

export default Films;
