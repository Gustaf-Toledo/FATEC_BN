import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';

import '../../styles/bootstrap.css';
import '../../pages/page-landing/styles.css';

import log from '../../images/courses/log.jpg';
import logap from '../../images/courses/loagp.jpg';
import ads from '../../images/courses/ads.jpg';
import comex from '../../images/courses/comex.jpg';
import prind from '../../images/courses/prind.jpg';
import proff from '../../images/courses/proff.jpg';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';


export default function Home(){
    return(
      <div className="App">

        <NavBar />

      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={slide1} alt="Primeiro Slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>BEM VINDO À FATEC GUARULHOS</h2>
                  <p>Ensino gratuito e de qualidade!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={slide2} alt="Segundo Slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>SALAS DE AULA</h2>
                  <p>Totalmente equipadas e confortáveis!</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="Terceiro Slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>VENHA CONHECER A UNIDADE</h2>
                  <p>Localizada na Rua Cristóbal Cláudio Elilo - Parque Cecap</p>
                </div>
            </div>
            </div>
        </div>
      </header>

  
      <div className="container">
        <h1 className="my-4">Notícias</h1>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Lançamento do novo site</h4>
                  <div className="card-body">
                    <p className="card-text">Lançamento do novo site da Fatec Guarulhos! Site desenvolvido pelos alunos do curso de Análise de Desenvolvimento de Sistemas.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">Saiba mais</a>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Segunda chamada Vestibular 2020</h4>
                  <div className="card-body">
                    <p className="card-text">Se você estava ansioso pela segunda chamada do vestibular, ela SAIU! Acesse o link clicando no "saiba mais" e confira se você é o próximo fatecanx! </p>
                  </div>
                  <div className="card-footer">
                    <a href="https://www.vestibularfatec.com.br/classificacao/fatec.asp" className="btn btn-primary">Saiba mais</a>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Primeira chamada Vestibular 2020</h4>
                  <div className="card-body">
                    <p className="card-text">SAIU!! A lista dos novos integrantes das unidades FATEC está no ar. Clique no "saiba mais" e confiraaa!</p>
                  </div>
                  <div className="card-footer">
                    <a href="https://www.vestibularfatec.com.br/classificacao/fatec.asp" className="btn btn-primary">Saiba mais</a>
                  </div>
              </div>
            </div>
          </div>
    
          <h2>Conteúdos Principais</h2>

            <div className="row">
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={ads} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">Análise e Desenvolvimento de Sistemas</Link>
                      </h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={log} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">Logística</Link>
                      </h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                    </div>
                </div>
              </div>
                <div className="col-lg-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                    <Link to="#"><img className="card-img-top" src={comex} alt=""/></Link>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to="#">Comércio Exterior</Link>
                        </h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={logap} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">Logística Aeroportuária</Link>
                      </h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={proff} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">Corpo Docente</Link>
                      </h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={prind} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">Gestão da Produção Industrial</Link>
                      </h4>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
                    </div>
                </div>
              </div>
            </div>

            <hr/>

    
            <div className="row mb-4">
              <div className="col-md-8">
                <p>Venha ser Fatecanx! Acesse o site do Vestibular e fique ligado nos editais. São duas oportunidades por ano, uma para o primeiro semestre e outra para o segundo semestre.</p>
              </div>
              <div className="col-md-4">
                <a className="btn btn-lg btn-secondary btn-block" href="https://www.vestibularfatec.com.br/home/" target="_blank">Ver editais</a>
              </div>
            </div>
      </div>

        <Footer />

      </div>

    );
}