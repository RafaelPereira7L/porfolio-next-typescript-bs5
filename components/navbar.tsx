/* eslint-disable react/no-unescaped-entities */
import bootstrap from 'bootstrap'
import Script from 'next/script'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <h1 className="navbar-brand">Rafael's Portfolio</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Redes
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/rafael-henrique-pereira-37b155232/" rel="noreferrer">Linkedin</a></li>
                            <li><a className="dropdown-item" target="_blank" href="https://github.com/RafaelPereira7L" rel="noreferrer">GitHub</a></li>
                            <li><a className="dropdown-item" target="_blank" href="https://instagram.com/_raffp" rel="noreferrer">Instagram</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="mailto:rafael.hpereira7@gmail.com" rel="noreferrer">Email de contato</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</>

  )
}

export default Navbar