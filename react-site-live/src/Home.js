import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Home() {
    return (
        <div>
            <div className="parallax-home parallax">
                <NavBar />
                <div className="container-md">
                    <div className="nome">
                        <h1>Reinaldo Rozato Junior</h1>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col coluna-home text-center">
                                <img src='https://i.imgur.com/u66vulJ.jpg' className=" perfilPic rounded" alt="NO" />
                            </div>
                            <div className="col texto coluna-home blocos">
                                <p>Programador e desenvolvedor Jr entrando na carreira.</p>

                                <p>Teve início na carreira de Ciencia da Computação, quando descobriu sua paixão: programar.
                                Seu primeiro emprego foi em uma escola onde aprendeu muito sobre o trabalho em equipe e
                            manejamento de banco de dados.</p>

                                <p>Projeto completo de TCC sobre a Máquina de Turing, utilizando php, CodeIgniter, Bootstrap.</p>

                                <p>Gosta de desafios e continua sempre explorando ideias inovadoras, gosta de programar e de
                                um café puro para acompanhar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;