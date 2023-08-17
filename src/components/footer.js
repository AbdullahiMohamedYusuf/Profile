import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="container">
            <div className="icons">
                <a href=""><FaTwitterSquare className='icon'/></a>
                <a href=""><FaLinkedin className='icon'/></a>
                <a href=""><FaGithubSquare className='icon'/></a>
            </div>
            <div className="contact-info">
                <h4>AbdullahiMohamedYusuf04@gmail.com</h4>
                <h4>0762122695</h4>
            </div>
        </div>
    )
}

export default Footer