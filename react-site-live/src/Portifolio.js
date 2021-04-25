import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Portifolio() {
    return (
        <div>
            <NavBar />
            <div className="container-md centralizar clearfix">
                <div className="nome">
                    <h1>Principais projetos</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 blocos">
                        <p>TCC - Máquina de Turing</p>
                        <p>o projeto é uma maquina de turing php com uma interface amigavel,
                        permitindo que esta tenha amplo uso em salas de aulas como ferramenta
                        educacional sobre a maquina em si, e seu funcionamento/operacao</p>
                    </div>
                    <div className="col blocos">
                        One of three columns
                </div>
                    <div className="col blocos">
                        One of three columns
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portifolio;