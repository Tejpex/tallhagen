import { NavBar } from './components/NavBar'
import { Info } from './components/Info'
import { SignUp } from './components/SignUp'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className='main-view'>
        <Info />
        <SignUp />
      </div>
    </>
  )
}

export default App
