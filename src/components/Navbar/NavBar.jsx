import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">📚TuMangaShop📚</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogo 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/category/manga">Mangas</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/category/buzo">Buzos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/category/figura">Figuras </Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="contacto">Contactanos</Link>
        </li>
        <li>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar Articulo" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form> 
    </div>
  </div>    
  <CartWidget/>
</nav>
  )
}

export default NavBar