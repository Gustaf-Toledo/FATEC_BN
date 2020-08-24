import React from 'react';
import { Link } from 'react-router-dom';


import '../../styles/bootstrap.css';
import '../../styles/global.css';
import './styles.css';

export default function NavBar() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"><h1>Fatec <p>Guarulhos</p></h1>
          </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/noticias" id="navbarNEWS" aria-haspopup="true" aria-expanded="false">
                  Notícias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/institucional" id="navbarInstitute" aria-haspopup="true" aria-expanded="false">
                Institucional
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/cursos" id="navbarCourses"aria-haspopup="true" aria-expanded="false"> 
                  Cursos
                </Link>
                {/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <Link className="dropdown-item" to="/ads">Análise e Desenvolvimento de Sistemas</Link>
                  <Link className="dropdown-item" to="/cursos/comext">Comércio Exterior</Link>
                  <Link className="dropdown-item" to="/cursos/log">Logística</Link>
                  <Link className="dropdown-item" to="/cursos/ind">Gestão da Produção Industrial</Link>
                  <Link className="dropdown-item" to="/cursos/logap">Logística Aeroportuária</Link>
                </div> */}
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/cursos" id="navbarCourses" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                  Acadêmico
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <Link className="dropdown-item" to="/academico">Biblioteca e Discentes</Link>
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1jw7WPmsvCmBEzq9AU5iYoohHYg6h6r44/view" target="_blank"> Calendário Acadêmico</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://siga.cps.sp.gov.br/aluno/login.aspx?" target="_blank" id="navbarSIGA" aria-haspopup="true" aria-expanded="false">
                  SIGA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.fatec.sp.gov.br/view/Default.aspx" target="_blank" id="navbarLOJA" aria-haspopup="true" aria-expanded="false">
                  Loja
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };