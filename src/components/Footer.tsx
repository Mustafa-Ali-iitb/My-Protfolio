import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
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
      <p>A portfolio designed & built by <a href="https://github.com/Mustafa-Ali-iitb/My-Protfolio" target="_blank" rel="noreferrer">Mustafa Ali</a> with 💜</p>
    </footer>
  );
}

export default Footer;