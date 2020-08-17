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
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Institucional
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <Link className="dropdown-item" to="/institucional"> Sobre a Fatec Guarulhos</Link>
                  <Link className="dropdown-item" to="/institucional"> Histórico</Link>
                  <Link className="dropdown-item" to="/institucional"> Administração</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Acadêmico
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                  <Link className="dropdown-item" to="/academico"> Biblioteca</Link>
                  <Link className="dropdown-item" to="/academico"> Calendário Acadêmico</Link>
                  <Link className="dropdown-item" to="/academico"> Docentes</Link>
                  <Link className="dropdown-item" to="/academico"> Discentes</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                  Cursos
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
                  <Link className="dropdown-item" to="/cursos"> Análise e Desenvolvimento de Sistemas</Link>
                  <Link className="dropdown-item" to="/cursos"> Gestão da Produção Industrial</Link>
                  <Link className="dropdown-item" to="/cursos"> Logística</Link>
                  <Link className="dropdown-item" to="/cursos"> Logística Aeroportuária</Link>
                  <Link className="dropdown-item" to="/cursos"> Comércio Exterior</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };