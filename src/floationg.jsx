import React from "react";
import "./floating.css";
import { 
  FaInstagram, FaWhatsapp, FaGithub, FaFacebook, 
  FaYoutube, FaSnapchat, FaLinkedin, FaTwitter 
} from "react-icons/fa";

const icons = [
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaWhatsapp />, link: "https://whatsapp.com" },
  { icon: <FaGithub />, link: "https://github.com/Babuen " },
  { icon: <FaLinkedin />, link: "https://https://www.linkedin.com/in/babu-e-n-157173268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app .com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaFacebook />, link: "https://facebook.com" },
  { icon: <FaYoutube />, link: "https://youtube.com/@this_is_for_u_?feature=shared " },
  { icon: <FaSnapchat />, link: "https://snapchat.com" },
];

export default function FloatingIcons() {
  return (
    <div className="card-container">
      <div className="card">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon icon-${index}`} // unique class for each icon
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
