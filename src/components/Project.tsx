import React from "react";
import mock07 from '../assets/images/obj-det.png';
import mock08 from '../assets/images/mot.png';
import mock10 from '../assets/images/travel-planner.png';
import mock09 from '../assets/images/umate.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/vanshika5605/travel-planner?tab=readme-ov-file" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vanshika5605/travel-planner?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>Travel Planner</h2></a>
                <p>Created a responsive trip planning app with React and Spring Boot, integrating APIs for secure data handling and providing a user-friendly interface for planning travels.</p>
            </div>
            <div className="project">
                <a href="https://github.com/fabihafatima/UMateFinder/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/fabihafatima/UMateFinder/" target="_blank" rel="noreferrer"><h2>UMate - Bumble for Roommates</h2></a>
                <p>Developed a web app for connecting potential roommates using React and Flask, featuring user authentication, profile management, and a recommendation model based on cosine similarity.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Multiple Object Tracking for Video Surveillance</h2>
                <p>Implemented an object tracking system for video surveillance using optical flow and Kalman Filtering, enhancing tracking accuracy despite camera motion.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Object Detection Using CNN</h2>
                <p>Built an object detection model using YOLOv3 and PyTorch, achieving a 98.24% classification accuracy on the MNIST dataset of grayscale images.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;