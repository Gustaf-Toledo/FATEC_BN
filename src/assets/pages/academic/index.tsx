import React from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

import { Link } from 'react-router-dom';

import lib from '../../images/academic/library/library.png';
import disc from '../../images/academic/library/discentes.png';
import abnt from '../../images/academic/library/abnt.png';
import tcc from '../../images/academic/library/tcc.png';
import conhecimento from '../../images/academic/library/conhecimento.png';

import '../../styles/bootstrap.css';
import './styles.css';

const abntPDF = require('./pdf/abnt.pdf');
const libPDF = require('./pdf/biblioteca.pdf');
const capaPDF = require('./pdf/capaTCC.pdf');
const contratoR = require('./pdf/ContratoRemunerado.pdf');
const contratoV = require('./pdf/ContratoVoluntario.pdf');
const equivalenciaE = require('./pdf/EquivalenciaEstagio.pdf');
const processoE = require('./pdf/ProcessoEquivalencia.pdf');
const regimento = require('./pdf/regimento.pdf');
const regulamento = require('./pdf/regulamento.pdf');
const relatorioE = require('./pdf/RelatorioEstagio.pdf');


export default function Academico(){
    return(
        <div className="academic-content">
            <NavBar />
            <div id="library">
                <div className="container">
                    <h2>Biblioteca</h2>
                    <hr/>
                    <div className="row">
                    <div className="col-lg-6 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href={libPDF} target="_blank"><img className="card-img-top" src={lib} alt=""/></a>
                                    <div className="card-body">
                                        <p className="card-text">Conheça sobre e as normas da Biblioteca clicando em "saiba mais".</p>
                                    </div>
                                 <div className="card-footer">
                                    <a href={libPDF} className="btn btn-primary" target="_blank">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href="https://drive.google.com/drive/folders/1ic0oQdGOVY4LoPRkq9YvNY87KHGx2HzS" target="_blank"><img className="card-img-top" src={disc} alt=""/></a>
                                    <div className="card-body">
                                        <p className="card-text">Veja as publicações dos discentes clicando em "saiba mais".</p>
                                    </div>
                                 <div className="card-footer">
                                    <a href="https://drive.google.com/drive/folders/1ic0oQdGOVY4LoPRkq9YvNY87KHGx2HzS" className="btn btn-primary" target="_blank">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href="https://drive.google.com/drive/folders/15bHOgqX-us__LvWyCAgU55vHoTtbOKcV" target="_blank"><img className="card-img-top" src={conhecimento} alt=""/></a>
                                    <div className="card-body">
                                        <p className="card-text">Veja o documento no drive sobre o "Mostra do Conhecimento" clicando em "saiba mais".</p>
                                    </div>
                                 <div className="card-footer">
                                 <a href="https://drive.google.com/drive/folders/15bHOgqX-us__LvWyCAgU55vHoTtbOKcV" target="_blank" className="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href={abntPDF} target="_blank"><img className="card-img-top" src={abnt} alt=""/></a>
                                    <div className="card-body">
                                        <p className="card-text">Veja o resumo das normas ABNT clicando em "saiba mais".</p>
                                    </div>
                                 <div className="card-footer">
                                    <a href={abntPDF} target="_blank" className="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 portfolio-item">
                            <div className="card h-100">
                                <a href={capaPDF} target="_blank"><img className="card-img-top" src={tcc} alt=""/></a>
                                    <div className="card-body">
                                        <p className="card-text">Veja o modelo de capa dos TCC's clicando em "saiba mais".</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href={capaPDF} target="_blank" className="btn btn-primary">Saiba mais</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div id="students">
                    <div className="container">
                        <h2>Discentes</h2>
                        <hr/>
                            <div className="row">
                                <div id="students-button" className="col-md-12 mb-5">
                            <a className="btn btn-primary btn-lg" href={regimento} target="_blank">Regimento das Fatecs</a>
                            <a className="btn btn-primary btn-lg" href={regulamento} target="_blank">Regulamento de Graduação</a>
                            <a className="btn btn-primary btn-lg" href={contratoV} download>Termo de Compromisso de Estágio (Voluntário)</a>
                            <a className="btn btn-primary btn-lg" href={contratoR} download>Termo de Compromisso de Estágio (Remunerado)</a>
                            <a className="btn btn-primary btn-lg" href={processoE} download>Processo de Equivalência a Estágio</a>
                            <a className="btn btn-primary btn-lg" href={equivalenciaE} download>Equivalência ao Estágio Supervisionado</a>
                            <a className="btn btn-primary btn-lg" href={relatorioE} download>Relatório de Conclusão de Estágio</a>
                        </div>
                            </div>
                        </div>
                        </div>
            <Footer />
        </div>
    );
}