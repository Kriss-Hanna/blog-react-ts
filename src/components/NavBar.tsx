import { NavLink, Link } from "react-router-dom"

function NavBar() {

  return (
    <nav className="navbar-container">
        <h1><Link to="/">Kriss' Blog</Link></h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">À propos de moi</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/post-article">(A) Ecrire un article</NavLink></li>
            <li><NavLink to="/message">(A) Lire message contact</NavLink></li>
            <li><NavLink to="/admin">Se connecter</NavLink></li>  
        </ul>
    </nav>
  )
}

export default NavBar
