import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Portifolio() {
    return (
        <div>
            <div className="parallax parallax-port">
                <NavBar />
                <div className="container-md centralizar clearfix">
                    <div className="nome">
                        <h1>Principais projetos</h1>
                    </div>
                    <div className="row blocos-div">
                        <div className="col-12 top-block">
                            <h4>TCC - Máquina de Turing</h4>
                            <p>O projeto é uma máquina de turing php com uma interface amigável,
                            permitindo que esta tenha amplo uso em salas de aulas como ferramenta
                            educacional sobre a máquina em si, e seu funcionamento/operação.
                        </p>
                            <a style={{ color: 'white', textDecoration: 'underline' }} rel="noreferrer" href="https://github.com/ArturVRSampaio/TuringMachine" target="_blank">GitHub</a>
                        </div>
                        <div className="col blocos">
                            <h4>Meu WebSite</h4>
                            <p>Este próprio WebSite, ele utliza React como sua base
                            e foi o primeiro WebSite desenvolvido por mim. Ele busca trazer uma
                            interface limpa e de fácil navegação.
                        </p>
                            <a style={{ color: 'white', textDecoration: 'underline' }} rel="noreferrer" href="https://github.com/OLoKo64/My-Website" target="_blank">GitHub</a>
                        </div>
                        <div className="col blocos">
                            <h4>APS Socket Chat</h4>
                            <p>APS realizado em Junho de 2019 para a criação de um chat. Utilizando do framework
                            Quasar em Vue.js, foi realizado o frontend e backend do projeto.
                        </p>
                            <a style={{ color: 'white', textDecoration: 'underline' }} rel="noreferrer" href="https://github.com/index325/aps-socket" target="_blank">GitHub</a>
                        </div>

                        <div className="col-12 top-block">
                            <h4>OLoKo64 Game Calculator</h4>
                            <p>O projeto utiliza o framework Quasar e consiste na criação de um hub onde há calculadoras de vários jogos.<br/>
                            O plano é adicionar mais calculadoras com o tempo e posteriormente ter um release para Android e iOS.
                        </p>
                            <a style={{ color: 'white', textDecoration: 'underline' }} rel="noreferrer" href="https://github.com/OLoKo64/Multiple-Game-Calculator-Web-App" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portifolio;