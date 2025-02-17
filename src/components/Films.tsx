// import React, { useState } from "react";
// import mock07 from '../assets/images/obj-det.png';
// import mock08 from '../assets/images/mot.png';
// import mock10 from '../assets/images/travel-planner.png';
// import mock09 from '../assets/images/umate.png';
// import '../assets/styles/Project.scss';

// function Films() {
//     const [showMore, setShowMore] = useState(false);

//     const videos = [
//         { 
//             title: "Travel Planner", 
//             description: "Created a responsive trip planning app with React and Spring Boot, integrating APIs for secure data handling and providing a user-friendly interface for planning travels.", 
//             url: "https://www.youtube.com/embed/xxxxxxx", 
//             thumbnail: mock10 
//         },
//         { 
//             title: "UMate - Bumble for Roommates", 
//             description: "Developed a web app for connecting potential roommates using React and Flask, featuring user authentication, profile management, and a recommendation model based on cosine similarity.", 
//             url: "https://www.youtube.com/embed/yyyyyyy", 
//             thumbnail: mock09 
//         },
//         { 
//             title: "Multiple Object Tracking for Video Surveillance", 
//             description: "Implemented an object tracking system for video surveillance using optical flow and Kalman Filtering, enhancing tracking accuracy despite camera motion.", 
//             url: "https://www.youtube.com/embed/zzzzzzz", 
//             thumbnail: mock08 
//         },
//         { 
//             title: "Object Detection Using CNN", 
//             description: "Built an object detection model using YOLOv3 and PyTorch, achieving a 98.24% classification accuracy on the MNIST dataset of grayscale images.", 
//             url: "https://www.youtube.com/embed/aaaaaaa", 
//             thumbnail: mock07 
//         },
//         { 
//             title: "Film 5", 
//             description: "Description for film 5", 
//             url: "https://www.youtube.com/embed/bbbbbbb", 
//             thumbnail: mock07
//         },
//         { 
//             title: "Film 6", 
//             description: "Description for film 6", 
//             url: "https://www.youtube.com/embed/ccccccc", 
//             thumbnail: mock08
//         }
//     ];

//     return(
//         <div className="projects-container" id="films">
//             <h1>Films</h1>
//             <div className="projects-grid">
//                 {videos.slice(0, 4).map((video, index) => (
//                     <div key={index} className="project">
//                         <a href={video.url} target="_blank" rel="noreferrer">
//                             <img src={video.thumbnail} className="zoom" alt="thumbnail" width="100%"/>
//                         </a>
//                         <a href={video.url} target="_blank" rel="noreferrer"><h2>{video.title}</h2></a>
//                         <p>{video.description}</p>
//                     </div>
//                 ))}
//                 {showMore && (
//                     <>
//                         {videos.slice(4).map((video, index) => (
//                             <div key={index} className="project">
//                                 <a href={video.url} target="_blank" rel="noreferrer">
//                                     <img src={video.thumbnail} className="zoom" alt="thumbnail" width="100%"/>
//                                 </a>
//                                 <a href={video.url} target="_blank" rel="noreferrer"><h2>{video.title}</h2></a>
//                                 <p>{video.description}</p>
//                             </div>
//                         ))}
//                     </>
//                 )}
//             </div>
//             <div className="show-more-container">
//                 <button onClick={() => setShowMore(!showMore)}>
//                     {showMore ? "Show Less" : "See More"}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Films;


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
            description: "A Music video", 
            videoId: "_rK2_uk9LN4" 
        },
        { 
            title: "Film 5", 
            description: "Description for film 5", 
            videoId: "bbbbbbb"
        },
        { 
            title: "Film 6", 
            description: "Description for film 6", 
            videoId: "ccccccc"
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
