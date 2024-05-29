import { NavBar } from "../components/NavBar"
import { InfoAboutSignUp } from "../components/InfoAboutSignUp"
import { SignUp } from "../components/SignUp"

export const SignUpInfo = () => {
  return (
    <div>
      <NavBar />
      <div className="main-view">
        <InfoAboutSignUp />
        <img className="seagull" src="/seagull.png" alt="Icon of seagull" />
        <img
          className="photo"
          src="/walking-scouts.JPG"
          alt="Scouts with big backpacks hiking in the forest."
        />
        <SignUp />
      </div>
    </div>
  )
}
