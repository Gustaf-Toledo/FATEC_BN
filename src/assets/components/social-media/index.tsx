import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


export default function SocialMedia() {
    return (
        <div className="social-media">
          <div>
            <a href="https://www.facebook.com/ftcguarulhos" target="_blank"><span className="fa fa-facebook"></span></a>
          </div>
          <div>
            <a href="https://twitter.com/fatec_guarulhos?lang=pt" target="_blank"><span className="fa fa-twitter"></span></a>
          </div>
          <div>
            <a href="https:/ixiiinaodeu.com" target="_blank"><span className="fa fa-instagram"></span></a>
          </div>
          <div>
            <a href="https:/ixiiinaodeu.com" target="_blank"><span className="fa fa-whatsapp"></span></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/faculdade-de-tecnologia-de-guarulhos---ceeteps/about/" target="_blank"><span className="fa fa-linkedin"></span></a>
          </div>
        </div>
    )
};