import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

import '../../styles/bootstrap.css';

export default function Institucional() {
    return (
        <div className="institute-content">
            <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <h2>Sobre as Fatecs</h2>
                            <hr/>
                            <p>As Faculdades de Tecnologia - Fatecs são Unidades de Ensino Superior de Graduação e Pós-Graduação, do Centro Estadual de Educação Tecnológica Paula Souza - Ceeteps, autarquia de regime especial associada à Universidade Estadual Paulista “Júlio de Mesquita Filho” - UNESP, instituição de direito público da administração indireta do Governo do Estado de São Paulo, vinculada à Secretaria de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação, e regidas por este Regimento para a consecução de seus objetivos, observando-se o estabelecido no Regimento do Ceeteps, aprovado pelo Decreto 58.385, de 13-09-2012, e legislação vigente.</p>
                            <p>
                                Cada Unidade de Ensino Superior do Ceeteps deve ter a denominação de Faculdade de Tecnologia, com a sigla Fatec, seguida do nome do Município em que está instalada.
                                <ul>
                                    <li>No caso de cidades com mais de uma Fatec acrescenta-se o nome do bairro ou região em que se insere, conforme consta no decreto de criação.</li>
                                    <li>Estas denominações podem ser alteradas mediante Lei ou Decreto Governamental, em conformidade com a legislação vigente.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-md-12 mb-5">
                            <h2>Objetivos das Fatecs</h2>
                            <hr/>
                            <ol>
                                <li>Ministrar cursos superiores de graduação tecnológica, bem como de pós-graduação, podendo ser oferecidos nas formas presencial, a distância ou híbrida, mediante aprovação do Conselho Deliberativo;</li>
                                <li>Formar pessoal docente destinado ao ensino técnico e superior;</li>
                                <li>Formar pessoal capacitado para atuar junto ao mundo do trabalho;</li>
                                <li>Desenvolver e promover a cultura, a ciência, a tecnologia e a inovação por meio do ensino e da pesquisa aplicada;</li>
                                <li>Promover atividades de extensão e de articulação com a comunidade, bem como oferecer serviços que estejam em consonância com suas atividades de ensino e pesquisa.</li>
                            </ol>
                            <p>
                                Excepcionalmente, em conformidade com o art. 4º do Decreto 58.385/2012, mediante aprovação nas instâncias competentes, as Fatecs podem oferecer cursos distintos dos supracitados.
                                As questões relativas aos recursos financeiros e ao funcionamento administrativo das Fatecs, nos termos do Regimento do Ceeteps, são de competência do Conselho Deliberativo e da Superintendência do Ceeteps, respeitada a legislação vigente.
                                As ações acadêmicas são planejadas, orientadas, coordenadas, acompanhadas, controladas e avaliadas pela Unidade do Ensino Superior de Graduação - Cesu, respeitada a legislação vigente.
                            </p>
                        </div>
                        <div className="col-md-8 mb-5">
                            <h2>A unidade de Guarulhos</h2>
                            <hr/>
                            <p>A Faculdade de Tecnologia de Guarulhos - Fatec Guarulhos foi criada pelo Governo do Estado de São Paulo mediante a publicação do Decreto Nº 52.059 de 15 de agosto de 2007.</p>
                            <p>
                                <strong>Atualmente oferece 5 cursos sendo eles:</strong>
                                <ul>
                                    <li>Comércio Exterior (Manhã - 40 vagas)</li>
                                    <li>Gestão da Produção Industrial (Noite - 40 vagas)</li>
                                    <li>Logística (Tarde - 40 vagas e Noite - 40 vagas)</li>
                                    <li>Logística Aeroportuária (Manhã - 40 vagas)</li>
                                    <li>Análise e Desenvolvimento de Sistemas (Tarde – 40 vagas)</li>
                                </ul>
                            </p>
                            <Link className="btn btn-primary btn-lg" to="/cursos">Saiba mais &raquo;</Link>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h2>Contatos</h2>
                            <hr/>
                            <address>
                                <strong>Endereço</strong>
                                    <br/>Rua Cristóbal Claudio Elillo, 88 - Parque Cecap - Guarulhos 
                                    <br/>Beverly Hills, CA 90210
                                    <br/>
                            </address>
                            <address>
                                <strong>Telefones</strong>
                                <p>(11) 2229-0392/ 0393</p>
                                <strong>Emails</strong>
                                <br/>
                                <p>
                                Diretoria: 
                                <a href="mailto:f167dir@cps.sp.gov.br"> f167dir@cps.sp.gov.br</a>
                                </p>
                                <p>
                                Administração: 
                                <a href="mailto:f167adm@cps.sp.gov.br"> f167adm@cps.sp.gov.br</a>
                                </p>
                                <p>
                                Acadêmico: 
                                <a href="mailto:f167acad@cps.sp.gov.br"> f167acad@cps.sp.gov.br</a>
                                </p>
                            </address>
                            <address>
                                <strong>Funcionamento</strong>
                                <p>Das 7h às 23h (segunda à sexta), sábados das 8h às 15h40</p>
                            </address>
                        </div>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}