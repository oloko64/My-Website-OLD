import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Fade from 'react-reveal/Fade';
import perfilPic from './img/profile-pic.jpg'

function Home() {
    return (
        <div>
            <div className="parallax-home parallax">
                <Fade top>
                    <NavBar />
                </Fade>
                <div className="container-md">
                        <div className="nome">
                    <Fade left cascade>
                            <h1>Reinaldo Rozato Junior</h1>
                    </Fade>
                        </div>
                    <div className="container">
                        <div className="row row-home">
                            <Fade left>
                                <div className="col coluna-home text-center">
                                    <img src={perfilPic} className=" perfilPic rounded" />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col texto coluna-home blocos">
                                    <p>Programador e desenvolvedor Jr entrando na carreira.</p>

                                    <p>Teve início na carreira de Ciência da Computação, quando descobriu sua paixão: programar.
                                    Seu primeiro emprego foi em uma escola onde aprendeu muito sobre o trabalho em equipe e
                            manejamento de banco de dados.</p>

                                    <p>Projeto completo de TCC sobre a Máquina de Turing, utilizando php, CodeIgniter, Bootstrap.</p>

                                    <p>Gosta de desafios e continua sempre explorando ideias inovadoras, gosta de programar e de
                                um café puro para acompanhar.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;