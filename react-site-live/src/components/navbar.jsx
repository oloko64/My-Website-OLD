import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#161616cc'}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button style={{backgroundColor: '#3b3b3bcc'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/sobre" className="nav-link">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portifolio" className="nav-link">Portifólio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mais</a>
                                <ul className="dropdown-menu centralizar" aria-labelledby="navbarDropdownMenuLink"  style={{backgroundColor: '#161616cc'}}>
                                    {/* <li>
                                        <Link to="/curiosidades" className="dropdown-item text-secondary">Curiosidades</Link>
                                    </li> PRECISA ACABAR*/}
                                    <li>
                                        <Link to="/livros-recomendados" className="dropdown-item text-secondary">Livros Recomendados</Link>
                                    </li>
                                    <li>
                                        <Link to="/certificados" className="dropdown-item text-secondary">Meus Certificados</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;