import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import myImage from '../assets/images/my-photo.png';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImage} alt="Avatar" />
        </div>
        <div className="content">
          <h2>Hey, </h2>
          <h2>I’m <span className="highlight">Mustafa Ali</span>—a software developer, filmmaker, and traveler.  </h2>
          <h3>Ever heard of a guy who gets things done? Yeah, that’s me.</h3>
          <div className="social_icons">
          <a href="https://www.linkedin.com/in/mustafa-ali-206822142/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Mustafa-Ali-iitb" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.instagram.com/vfxmedekhlenge/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/mustafa.ali.1675/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </div>
        <div className="mobile_social_icons">
        <a href="https://www.linkedin.com/in/mustafa-ali-206822142/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Mustafa-Ali-iitb" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.instagram.com/vfxmedekhlenge/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/mustafa.ali.1675/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Main;