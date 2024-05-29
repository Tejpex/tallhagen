import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import mermaidIcon from "/mermaid-color.png"

export const NavBar = () => {
  return (
    <div className="nav-bar">
        <Link to="/"><img src={mermaidIcon} alt="Icon of mermaid" /></Link>
        <div className="headline">
          <div className="head-text">
            <h1>Sommarläger 2024</h1>
            <h2>med Tallhagens Scoutkår</h2>
          </div>
          <nav className="links">
            <NavLink className="link" to="/">Information</NavLink>
            <NavLink className="link" to="/packning">Packning</NavLink>
            <NavLink className="link" to="/sign-up">Anmälan</NavLink>
          </nav>
        </div>
    </div>
  )
}
