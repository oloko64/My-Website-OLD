import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function About() {
    return (
        <div>
            <div className="parallax-sobre parallax">
                <NavBar />
                <div className="container-md">
                    <h1 className="nome">Sobre</h1>
                    <div className="row">
                        <div className="col coluna-sobre blocos texto">
                            <h3>Pessoal</h3>
                            <p>Gosto bastante de um café forte e sem açucar, projetos
                            que desafiem o conhecimento, assim me empurrando
                            mais longe na estrada do conhecimento.
                        </p>
                            <p>
                                Sempre estou disposto a ajudar o próximo sem qualquer receio, pois
                                nunca saberemos de tudo e sempre precisaremos de ajuda em algum momento.
                        </p>
                            <p>
                                Sempre com bom humor e quase nunca em dias ruins, sempre vendo o lado
                                positivo das coisas.
                        </p>
                        </div>
                        <div className="col coluna-sobre blocos texto">
                            <h3>Profissional</h3>
                            <p>Estou a procura de uma vaga onde possa desenvolver meus conhecimentos
                            e crescer como programador.
                        </p>
                            <p>
                                Desejo uma empresa que respeite o seu funcionario e ofereça a coisa
                                mais importante para a vida de uma pessoa, conhecimento.
                        </p>
                            <p>
                                Atualmente estou disponível para serviços FreeLance e contratação.
                        </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;