import mermaidIcon from "/mermaid-color.png"

export const NavBar = () => {
  return (
    <div className="nav-bar">
        <img src={mermaidIcon} alt="Icon of mermaid" />
        <div className="headline">
          <h1>Sommarläger 2024</h1>
          <h2>med Tallhagens Scoutkår</h2>
        </div>
    </div>
  )
}
