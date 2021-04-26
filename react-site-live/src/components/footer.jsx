function Footer() {
    return (
        <div>
            <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
                <footer>
                    <div className="row my-5 justify-content-center">
                        <div className="col-11">
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <h3 className="text-muted mb-md-0 bold-text">Sobre</h3>
                                    <p>Gosto muito de programação e estou a procura de aumentar
                                    meus conhecimentos em qualquer área relacionada a programação
                                    e estou disposto a novas oportunidades de trabalho.
                                    </p>
                                <div>
                                    <h6 className="mt-2 text-muted bold-text"><b>Reinaldo Rozato Junior</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span>reinaldorozatoj@gmail.com</small>
                                </div>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12 endereco-link">
                                    <h6 className="text-muted  bold-text"><b>LINKS</b></h6>
                                    <ul className="list-unstyled">
                                        <a style={{ color: 'white' , textDecoration: 'underline'}} href="https://github.com/OLoKo64" >GitHub</a><br />
                                        <a style={{ color: 'white' , textDecoration: 'underline' }} href="https://github.com/OLoKo64" >Linkedin</a>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12 endereco-link">
                                    <h6 className="text-muted bold-text mt-sm-0"><b>Endereço</b></h6>
                                    <p className="mb-1">Araraquara - SP</p>
                                </div>
                            </div>
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;