import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Certificados() {
    return (
        <div className="clearfix">
            <div className="parallax-cert parallax">
                <NavBar />
                <div className="container-md">
                    <div className="nome">
                        <h1>Certificados</h1>
                    </div>
                    <div className="row blocos-div">
                        <div className="col blocos">
                            <h4>Workshop DXC 2020</h4>
                            <p>Curso oferecido pela DXC onde a cada semana foi ensinado uma linguagem,
                            Python, SQL, Java, DotNet, GoLang e Teste.
                        </p>
                            <a href="https://i.imgur.com/4Ga65Jy.png" target="_blank">
                                <img className="cert-imgs" src="https://i.imgur.com/4Ga65Jy.png"></img>
                            </a>
                        </div>
                    </div>
                    <div className="row blocos-div">
                        <div className="col blocos">
                            <h4>Desenvolvimento Android Completo</h4>
                            <p>Curso de 107 horas onde foi ensinado sobre Android, com a criação de
                            18 aplicativos.
                        </p>
                            <a href="https://i.imgur.com/YQhLkU3.jpg" target="_blank">
                                <img className="cert-imgs" src="https://i.imgur.com/YQhLkU3.jpg"></img>
                            </a>
                        </div>
                    </div>
                    <div className="row blocos-div">
                        <div className="col blocos">
                            <h4>Python para Data Science e Machine Learnig</h4>
                            <p>Concluido juntamente com o de Android, este pequeno
                            curso demonstra um dos poderes do Python, Machine Learning.
                        </p>
                            <a href="https://i.imgur.com/sI78wlQ.jpg" target="_blank">
                                <img className="cert-imgs" src="https://i.imgur.com/sI78wlQ.jpg"></img>
                            </a>
                        </div>
                    </div>
                    <div className="row blocos-div">
                        <div className="col blocos">
                            <h4>Web Moderno Completo com JavaScript</h4>
                            <p>Outro grande curso sobre uma das linguagens mais utilizadas,
                            JavaScript, muitas das coisas aprendidas neste curso foram utilizadas neste site.
                        </p>
                            <a href="https://i.imgur.com/vPxZaz7.jpg" target="_blank">
                                <img className="cert-imgs" src="https://i.imgur.com/vPxZaz7.jpg"></img>
                            </a>
                        </div>

                    </div>
                    <div className="row blocos-div">
                        <div className="col blocos">
                            <h4>Programação em Python do Básico ao avançado</h4>
                            <p>Potencialmente a minha linguagem favorita, neste curso me
                            aprofundei nesta linguagem de alto nível que é muito utilizada em Machine Learning.
                        </p>
                            <a href="https://i.imgur.com/ogflKZs.jpg" target="_blank">
                                <img className="cert-imgs" src="https://i.imgur.com/ogflKZs.jpg"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Certificados;