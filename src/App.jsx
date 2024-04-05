import { NavBar } from "./components/NavBar"
import { Info } from "./components/Info"
import { SignUp } from "./components/SignUp"
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className="main-view">
        <Info />
        <img className="seagull" src="/seagull.png" alt="Icon of seagull" />
        <img className="photo" src="/canoe-damian.jpg" alt="Canoe in water" />
        <SignUp />
      </div>
    </>
  )
}

export default App
