import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div class="footer">
            {/* <h2>Follow Me</h2> */}

            <a href="https://www.linkedin.com/in/sammie-stephenson/"
                className="social">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://github.com/SammieStephenson" className="social">
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.instagram.com/sam.stephenson/"
                className="social">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <p>Copyright &copy; 2022 designed by Samsites.</p>
        </div>
    );
};