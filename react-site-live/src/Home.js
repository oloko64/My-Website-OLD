import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Home() {
    return (
        <div>
            <NavBar />
            <div classNameName="container-md">
                <h1>Reinaldo Rozato Junior</h1>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <img src='https://i.imgur.com/u66vulJ.jpg' style={{ maxWidth: '300px' }} className="rounded img-fluid" alt="NO" />
                        </div>
                        <div className="col">
                            <p>Programador e desenvolvedor Jr entrando na carreira.</p>

                            <p>Teve início na carreira de Ciencia da Computação, quando descobriu sua paixão: programar. 
                            Seu primeiro emprego foi em uma escola onde aprendeu muito sobre o trabalho em equipe e 
                            manejamento de banco de dados.</p>
                            
                            Co-fundador da Banlek, aplicativo que conecta fotógrafos a clientes. Usando geolocalização e inteligência Artificial para permitir que o usuário busque e encontre um fotógrafo que esteja por perto no momento ou agende uma sessão para outro dia.

                            Participou da fundação do MusicX que foi um meio revolucionário de ouvir músicas online no ano 2010, que foi sua primeira experiência em uma StartUp, qual saiu com uma habilidade diferenciada em negociações, trabalho em equipe e empreendedorismo.

                            Continua gostando de desafio e ideias inovadoras, atualmente divide seu tempo entre consultoria, construção de negócios, programação e um café bem forte. Com muita motivação, gerencia um blog em que busca passar o maior número de conhecimentos possíveis para outros profissionais da área de tecnologia e apresenta um pouco de sua rotina profissional no seu perfil do Instagram com o objetivo de compartilhar ensinamentos e experiências a profissionais.
    </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                            One of three columns
    </div>
                        <div className="col">
                            One of three columns
    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;