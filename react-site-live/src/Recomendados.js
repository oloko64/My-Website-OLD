import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Recomendados() {
    return (
        <div className="clearfix">
            <div className="parallax parallax-livros">
                <NavBar />
                <div className="container-md">
                    <div className="nome">
                        <h1>Livros Recomendados</h1>
                    </div>
                    <div className="tabela">
                        <table className="table rounded" style={{ backgroundColor: '#161616cc', color: 'lightgray' }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col"></th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="tabela-tx">1</th>
                                    <td className="tabela-tx"><img className="rec-imgs rounded" src="https://i.imgur.com/0yHzJFW.png"></img></td>
                                    <td className="tabela-tx">Linux Basics For Hackers</td>
                                    <td className="tabela-tx">Um livro bem conhecido na comunidade Linux, ele aborda muitos comandos
                                    básicos para o dia a dia no Linux.
                            </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="tabela-tx">2</th>
                                    <td className="tabela-tx"><img className="rec-imgs rounded" src="https://i.imgur.com/dM00lnA.png"></img></td>
                                    <td className="tabela-tx">Sistemas Operacionais Modernos - Tanenbaum</td>
                                    <td className="tabela-tx">Um clássico da Ciência da Computação, trata de vários sistemas, UNIX,
                                    Windows e Android.
                            </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="tabela-tx">3</th>
                                    <td className="tabela-tx"><img className="rec-imgs rounded" src="https://i.imgur.com/4oKXksn.png"></img></td>
                                    <td className="tabela-tx">Pro Git</td>
                                    <td className="tabela-tx">Um livro sobre uma das ferramentas mas utilizadas
                            na programação, o Git.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recomendados;