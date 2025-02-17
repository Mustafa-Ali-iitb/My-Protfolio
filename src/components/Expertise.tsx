import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    
    "Java",
    "Spring Boot",
    "JavaScript",
    "HTML5",
    "React",
    "CSS3",
    "TypeScript",
    "SASS",
    "n8n"
];

const labelsSecond =  [
    "AWS",
    "Lambda",
    "S3",
    "Jenkins",
    "Git",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Prometheus",
    "Grafana"
];

const labelsThird = [
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Kalman Filtering",
    "YOLOv3"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I specialize in building scalable web applications using Spring Boot, with strong expertise in designing RESTful APIs, custom workflows, and secure data handling for efficient and user-friendly solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Database Management</h3>
                    <p>I have experience in optimizing internal processes with DevOps practices, including building automated tools, CI/CD pipelines, and managing databases to ensure seamless operation and efficient data processing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Deep Learning & Computer Vision</h3>
                    <p>With a focus on real-world applications, I have conducted research and built models for object tracking and detection using deep learning techniques, achieving high performance and accuracy.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;