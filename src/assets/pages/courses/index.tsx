import React from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

import '../../styles/bootstrap.css';
import '../courses/styles.css';

const ads = require('./pdfs/ads.pdf');
const comext = require('./pdfs/com-ext.pdf');
const ind = require('./pdfs/ind.pdf');
const log = require('./pdfs/log.pdf');
const logap = require('./pdfs/log-ap.pdf');

export default function Cursos(){
    return (
        <div className="courses-content">
            <NavBar />
            <div className="container">
                <div className="row">
                        <div id="ads" className="col-md-12 mb-5">
                            <h2>Análise e Desenvolvimento de Sistemas</h2>
                            <hr/>
                            <h4>Perfil Profissional</h4>
                            <p>O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.</p>
                            <h4>Área de Atuação</h4>
                            <p>
                            O profissional de Análise e Desenvolvimento de Sistemas de Informação pode atuar em empresas de assessoria e consultoria tecnológica e de desenvolvimento de sistemas, assim como nos diversos setores da economia: indústria, comércio, prestação de serviços, instituições financeiras, órgãos públicos ou como empreendedor em informática. Este profissional estará apto a:
                            </p>
                            <ul>
                                <li>Projetar e implementar sistemas de acordo com as necessidades institucionais;</li>
                                <li>Coordenar infraestruturas de tecnologia da informação, elaborando políticas e diretrizes a partir da análise de necessidades;</li>
                                <li>Realizar consultoria em Sistemas de Informação, avaliando e selecionando recursos de software e hardware;</li>
                                <li>Atuar em Centros de Pesquisa, de Ensino ou de desenvolvimento de software;</li>
                                <li>Empreender seu próprio negócio em informática.</li>
                            </ul>
                            <h4>Objetivos Gerais</h4>
                            <p>Formar profissionais que projetem, implementem e coordenem infraestruturas de tecnologia da informação, atendendo a necessidade de mudanças provocadas pelas inovações tecnológicas nas empresas.</p>
                            <p><strong>Coordenador do Curso: Prof. Me. Milton Francisco de Brito</strong></p>
                            <a className="btn btn-primary btn-lg" href={ads} target="_blank">Projeto Pedagógico</a>
                        </div>
                        <div id="comext" className="col-md-12 mb-5">
                            <h2>Comércio Exterior</h2>
                            <hr/>
                            <h4>Perfil Profissional</h4>
                            <p>O Tecnólogo em Comércio Exterior é o profissional empreendedor capaz de contribuir para a inserção das empresas no comércio internacional. Gerencia operações de comércio exterior. Prospecta e pesquisa mercados. Define plano de ação para exportação e importação. Negocia e executa operações legais, tributárias e cambiais inerentes ao processo de exportação e importação. Além disso, controla fluxos de embarque e desembarque de produtos, providencia documentos e identifica os melhores meios de transporte, de forma a otimizar os recursos financeiros e humanos para o comércio exterior.</p>
                            <h4>Área de Atuação</h4>
                            <p>
                            Agroindústrias, indústrias, empresas de importação e exportação, cooperativas, bancos, multinacionais, empresas de transporte, empresas aduaneiras e de câmbio, consultorias, assessoramento empresarial, empresas prestadoras de serviços, editoras especializadas e outros.
                            </p>
                            <h4>Objetivos Gerais</h4>
                            <p>O objetivo do Curso Superior de Tecnologia em Comércio exterior é formar profissionais com visão empreendedora, ética e promotora de novos conhecimentos na área de negócios e comércio internacionais.</p>
                            <p><strong>Coordenador do Curso: Prof. Me. Gilberto Lúcio Margarido</strong></p>
                            <a className="btn btn-primary btn-lg" href={comext} target="_blank">Projeto Pedagógico</a>
                        </div>
                        <div id="ind" className="col-md-12 mb-5">
                            <h2>Gestão da Produção Industrial</h2>
                            <hr/>
                            <h4>Perfil Profissional</h4>
                            <p>O Tecnólogo de Gestão da Produção Industrial  planeja, supervisiona e aplica processos de produção. Planeja a logística de movimentação do produto na indústria. Avalia e otimiza fluxos de materiais, layouts e linhas de produção. Supervisiona a seleção e o tratamento das matérias-primas. Controla a qualidade de processos. Coordena equipes de trabalho. Especifica técnicas de informação para gestão e controle da manufatura. Vistoria, realiza perícia, avalia, emite laudo e parecer técnico em sua área de formação.</p>
                            <h4>Área de Atuação</h4>
                            <p>
                            Pode atuar em empresas de planejamento, desenvolvimento de projetos e assistência técnica em sua área de formação, indústrias em geral e setor de serviços, além de institutos e centros de pesquisa e instituições de ensino, mediante formação requerida pela legislação vigente.
                            </p>
                            <h4>Objetivos Gerais</h4>
                            <p>Propiciar a graduação de profissionais de Gestão da Produção Industrial que possam contribuir para a inovação e melhoria de processos industriais nas organizações, se anteciparem aos problemas, resolvendo-os e assim poder minimizar custos e maximizar benefícios da atividade econômica empresarial, dentro de perspectiva ética e sustentável dos negócios.</p>
                            <p><strong>Coordenador do Curso: Prof. Me. José Martino Neto</strong></p>
                            <a className="btn btn-primary btn-lg" href={ind} target="_blank">Projeto Pedagógico</a>
                        </div>
                        <div id="log" className="col-md-12 mb-5">
                            <h2>Logística</h2>
                            <hr/>
                            <h4>Perfil Profissional</h4>
                            <p>O Tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma organização, planeja e coordena a movimentação física e de informações sobre as operações multimodais e intermodais de transporte, incluindo o gerenciamento de pessoas para proporcionar fluxo otimizado ao longo da cadeia de suprimentos. Ele projeta e gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais. Ocupa-se ainda do inventário e gerenciamento estratégico de estoques, sistemas de abastecimento, programação, monitoramento do fluxo de pedidos, cálculo de custos de fretes e transbordos, sistemas de tráfego e gerenciamento de transportes urbano de carga e passageiros, que envolvam os modais rodoviário, ferroviário, aeroviário, dutoviário e aquaviário.</p>
                            <h4>Área de Atuação</h4>
                            <p>
                            Este profissional pode atuar como gestor nas áreas de distribuição, armazenagem e transporte de bens, serviços e mercadorias, com possibilidade de ocupar cargos de gerência e direção ou montar negócio próprio. Pode, ainda, atuar no ensino, pesquisa ou como consultor independente na sua área.
                            </p>
                            <h4>Objetivos Gerais</h4>
                            <p>Propiciar a graduação de profissionais de Logística que possam contribuir para a inovação e melhoria de processos nas organizações, se anteciparem aos problemas, resolvendo-os e assim poder minimizar custos e maximizar benefícios da atividade econômica empresarial, dentro de perspectiva ética e sustentável dos negócios.</p>
                            <p><strong>Coordenador do Curso: Prof. Esp. Vanderlei Tallach</strong></p>
                            <a className="btn btn-primary btn-lg" href={log} target="_blank">Projeto Pedagógico</a>
                        </div>
                        <div id="logap" className="col-md-12 mb-5">
                            <h2>Logística Aeroportuária</h2>
                            <hr/>
                            <h4>Perfil Profissional</h4>
                            <p>O Tecnólogo em Logística Aeroportuária está habilitado a desenvolver atividades de planejamento, controle e supervisão no exercício de funções relacionadas à gestão aeroportuária, principalmente nos aspectos de logística: armazenagem, distribuição e transporte; planejamento e coordenação da movimentação física e de informações sobre as operações de transporte aéreo, para proporcionar fluxo otimizado e de qualidade para passageiros, e produtos. Compreende o cenário econômico e utiliza dados financeiros e econômicos para exercer julgamento, avaliar riscos e tomar decisões de negócios envolvendo a gestão em terra no tocante às atividades do transporte aéreo, assim como, estima demandas nacionais e internacionais. Estabelece uma compreensão sistêmica e estratégica, com uma visão do todo, de modo integrado e relacionado com o meio ambiente externo. Lidera equipes na gestão e operação aeroportuária.</p>
                            <h4>Área de Atuação</h4>
                            <p>
                            Gerência ou Supervisão em aeroportos, empresas de transporte aéreo, em plataformas logísticas, em empresas vinculadas ao modal aéreo e aeroportos. 
                            </p>
                            <h4>Objetivos Gerais</h4>
                            <p>O curso tem como objetivos oferecer ferramentas e condições para que o aluno possa estudar as atividades desenvolvidas num complexo aeroportuário, do ponto de vista logístico, além de conhecer os diversos componentes e suas funções. Outro objetivo do curso é identificar problemas operacionais buscando alternativas de soluções, além de desenvolver planos diretores de um aeroporto e outras atividades relacionadas.</p>
                            <p><strong>Coordenador do Curso: Profa. Ma. Célia de Lima Pizolato</strong></p>
                            <a className="btn btn-primary btn-lg" href={logap} target="_blank">Projeto Pedagógico</a>
                        </div>
                    </div>    
                </div>
            <Footer />
        </div>
    );
}