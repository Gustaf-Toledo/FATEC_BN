import React from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

import '../../styles/bootstrap.css';
import './styles.css';

import oldSite from '../../images/site/antes.png';
import newSite from '../../images/site/agora.png';

export default function NewsPage() {
    return (
        <div className="news-page">
            <NavBar />
                <div className="container" id="news-id">
                    <div className="row">
                        <div id="siteRelease" className="col-md-12 mb-5">
                            <h2>LANÇAMENTO DO NOVO SITE</h2>
                            <hr/>
                            <p>O site da FATEC Guarulhos está de cara nova!!</p>
                            <p>Nosso antigo portal infelizmente se corrompeu e ficou uma BAGUNÇA. Então os alunos do ADS decidiram fazer algo a respeito!</p>
                            <p>Construído utilizando React e TypeScript, o novo site é totalmente responsivo, ou seja, funciona tão bem em celulares quanto em computadores.
                            Foi desenvolvido pelo aluno Gustaf (ou Gustavo) Toledo e com ajuda dos colegas de classe Vitor Santos e Ricardo Gomes, e juntamente o apoio do Coordenador do Curso, Milton Brito e também o auxílio de Design de Eloize Rodrigues Xavier.</p>
                            <p>Segue as imagens de antes e depois!</p>
                            <div className="images">
                                <img src={oldSite} alt="Antes"/>
                                <img src={newSite} alt="Depois"/>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}