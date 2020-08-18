import React from 'react';
import { Link } from 'react-router-dom';


import '../../styles/bootstrap.css';
import '../../styles/global.css';

export default function NavBar() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Fatec Guarulhos</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/institucional" id="navbarInstitute" aria-haspopup="true" aria-expanded="false">
                Institucional
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <Link className="dropdown-item" to="/institucional"> Sobre a Fatec Guarulhos</Link>
                  <Link className="dropdown-item" to="/institucional"> Histórico</Link>
                  <Link className="dropdown-item" to="/institucional"> Administração</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/cursos" id="navbarCourses" aria-haspopup="true" aria-expanded="false"> 
                  Cursos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/academico" id="navbarAcademic" aria-haspopup="true" aria-expanded="false">
                  Acadêmico
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };