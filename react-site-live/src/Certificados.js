import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Certificados() {
    return (
        <div className="clearfix">
            <NavBar />
            <div className="container-md">
                <div className="nome">
                    <h1>Certificados</h1>
                </div>
                <table className="table table-dark table-hover tabela">
                    <thead>
                        <tr>
                            <th scope="col">Certificado</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tabela-tx">
                                <a href="https://i.imgur.com/4Ga65Jy.png" target="_blank">
                                    <img className="cert-imgs" src="https://i.imgur.com/4Ga65Jy.png"></img>
                                </a>
                            </td>
                            <td className="tabela-tx">Workshop DXC 2020</td>
                            <td className="tabela-tx">Curso oferecido pela DXC onde a cada semana foi ensinado uma linguagem,
                            Python, SQL, Java, DotNet, GoLang e Teste.
                            </td>
                        </tr>
                        <tr>
                            <td className="tabela-tx">
                                <a href="https://i.imgur.com/YQhLkU3.jpg" target="_blank">
                                    <img className="cert-imgs" src="https://i.imgur.com/YQhLkU3.jpg"></img>
                                </a>
                            </td>
                            <td className="tabela-tx">Desenvolvimento Android Completo</td>
                            <td className="tabela-tx">Curso de 107 horas onde foi ensinado sobre Android, com a criação de
                            18 aplicativos.
                            </td>
                        </tr>
                        <tr>
                            <td className="tabela-tx">
                                <a href="https://i.imgur.com/sI78wlQ.jpg" target="_blank">
                                    <img className="cert-imgs" src="https://i.imgur.com/sI78wlQ.jpg"></img>
                                </a>
                            </td>
                            <td className="tabela-tx">Python para Data Science e Machine Learnig</td>
                            <td className="tabela-tx">Concluido juntamente com o de Android, este pequeno 
                            curso demonstra um dospoderes do Python, Machine Learning.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}
export default Certificados;