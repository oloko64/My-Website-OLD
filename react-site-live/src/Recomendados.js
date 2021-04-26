import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';

function Recomendados() {
    return (
        <div className="clearfix">
            <NavBar />
            <div className="nome">
                <h1>Links Recomendados</h1>
            </div>

            <div className="row" style={{padding: '0px'}}>
                <div className="col coluna-rec">
                    <img className="rec-imgs" src="https://i.imgur.com/0yHzJFW.png"></img>

                </div>
                <div className="col coluna-rec">

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recomendados;