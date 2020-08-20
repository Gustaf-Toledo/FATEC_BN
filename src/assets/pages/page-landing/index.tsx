import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';

import '../../styles/bootstrap.css';
import '../../pages/page-landing/styles.css';
import './styles.css';

import log from '../../images/courses/log.jpg';
import logap from '../../images/courses/logap.jpg';
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

  
      <div className="container" id="landing-container">
        <h1 className="my-4">Notícias</h1>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Lançamento do novo site</h4>
                  <div className="card-body">
                    <p className="card-text">Lançamento do novo site da Fatec Guarulhos! Site desenvolvido pelos alunos do curso de Análise de Desenvolvimento de Sistemas.</p>
                  </div>
                  <div className="card-footer">
                    <Link to="/noticias" className="btn btn-primary">Saiba mais</Link>
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
    
          <h1>Conteúdos Principais</h1>

            <div className="row">
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <a href="/cursos/#ads"><img className="card-img-top" src={ads} alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="/cursos/#ads">Análise e Desenvolvimento de Sistemas</a>
                      </h4>
                      <p className="card-text">O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. <br/> <br/> <strong>Vespertino - 40 Vagas </strong></p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <a href="/cursos/#log"><img className="card-img-top" src={log} alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="/cursos/#log">Logística</a>
                      </h4>
                      <p className="card-text">
                      O Tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma organização, planeja e coordena a movimentação física e de informações sobre as operações multimodais e intermodais de transporte, incluindo o gerenciamento de pessoas para proporcionar fluxo otimizado ao longo da cadeia de suprimentos. <br/><br/><strong>Vespertino - 40 Vagas <br/> Noturno - 40 Vagas</strong>
                      </p>
                    </div>
                </div>
              </div>
                <div className="col-lg-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                    <a href="/cursos/#comext"><img className="card-img-top" src={comex} alt=""/></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="/cursos/#comext">Comércio Exterior</a>
                        </h4>
                        <p className="card-text">O Tecnólogo em Comércio Exterior é o profissional empreendedor capaz de contribuir para a inserção das empresas no comércio internacional. Gerencia operações de comércio exterior. <br/><br/><strong>Matutino - 40 Vagas</strong></p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <a href="/cursos/#logap"><img className="card-img-top" src={logap} alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="/cursos/#logap">Logística Aeroportuária</a>
                      </h4>
                      <p className="card-text">O Tecnólogo em Logística Aeroportuária está habilitado a desenvolver atividades de planejamento, controle e supervisão no exercício de funções relacionadas à gestão aeroportuária, principalmente nos aspectos de logística: armazenagem, distribuição e transporte; planejamento e coordenação da movimentação física e de informações sobre as operações de transporte aéreo, para proporcionar fluxo otimizado e de qualidade para passageiros, e produtos. <br/><br/><strong>Matutino - 40 Vagas</strong></p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <Link to="#"><img className="card-img-top" src={proff} alt=""/></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Corpo Docente</a>
                      </h4>
                      <p className="card-text">Conheça nossos professores clicando em "saiba mais".</p>
                    </div>
                    <div className="card-footer">
                      <a href="/noticias" className="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="card h-100">
                  <a href="/cursos/#ind"><img className="card-img-top" src={prind} alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="/cursos/#ind">Gestão da Produção Industrial</a>
                      </h4>
                      <p className="card-text">O Tecnólogo de Gestão da Produção Industrial planeja, supervisiona e aplica processos de produção. Planeja a logística de movimentação do produto na indústria. Avalia e otimiza fluxos de materiais, layouts e linhas de produção. Supervisiona a seleção e o tratamento das matérias-primas. <br/><br/><strong>Noturno - 40 Vagas</strong></p>
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